import React from 'react';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "ยิงในบ้าน สุนทร วิลาวัลย์ พบ อดีต สจ.โต้ง เสียชีวิต คุมตัวผู้ก่อเหตุแล้ว",
      summary: "เจ้าหน้าที่คุมสถานการณ์ เหตุยิงในบ้าน สุนทร ที่ปราจีนบุรี พบ อดีต สจ.โต้ง เสียชีวิต 1 ศพ คุมตัวผู้ก่อเหตุแล้ว ...",
      image: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rMm3NbjaadlKqa2pahW4OEMA5mzBqdwMfz11ZiRS3onPv8Y9W2.webp",
      author: "ff",
      date: "05 December 2024 - 23:26"
    },
    {
      id: 2,
      title: "อาหารทะเลนำเข้ามาแรง สะท้อนพฤติกรรมคนไทยชอบกินอาหารทะเลจากทั่วโลก",
      summary: "ใอาหารทะเล คือเมนูที่หลายคนชื่นชอบ ด้วยรสชาติจากหลากหลายวัตถุดิบที่สามารถนำมาปรุงแต่งได้หลายเมนูทั้งไทยและนานาชาติ ",
      image: "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbQWBDHg8lSBCS2SG8QtZPjF7EOF3BHDrG4q54Q5gr1KVREIuoSnMF.webp",
      author: "gg",
      date: "05 December 2024 - 21:11"
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-4xl space-y-6 p-6">
        {posts.map((post) => (
          <div key={post.id} className="card lg:card-side bg-base-100 shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
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
