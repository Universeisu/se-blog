import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]); // สร้าง state สำหรับ posts
  const [loading, setLoading] = useState(true); // สร้าง state สำหรับ loading

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://your-api-endpoint.com/posts"); // URL ของ API
        const data = await response.json();
        setPosts(data); // อัพเดต state ด้วยข้อมูลที่ดึงมา
        setLoading(false); // เมื่อข้อมูลโหลดเสร็จแล้ว set loading เป็น false
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // กรณีเกิดข้อผิดพลาด
      }
    };

    fetchPosts();
  }, []); // ใช้ [] เพื่อให้เรียกใช้แค่ครั้งเดียวเมื่อ component mount

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-4xl space-y-6 p-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600">{post.summary}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
