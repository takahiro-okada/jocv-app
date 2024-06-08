"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  image: string;
  profileText: string;
};

async function fetchProfile(slug: string) {
  const req = await fetch(`http://localhost:3000/api/users/${slug}`);
  const data = await req.json();
  return data;
}

export default function Profile({ params }) {
  const { slug } = params;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchProfile(slug);
      setUser(userData);
    }
    fetchData();
  }, [slug]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <main>
        <div className="mx-4 mt-10">
          <div className="flex justify-center">
            <Image
              src={user.image || "/images/default_profile.jpg"} // ユーザー画像がない場合のデフォルト画像
              alt="user profile"
              className="rounded-full w-36"
              width={600}
              height={600}
            />
          </div>
          <div className="text-xl mt-3 text-center">{user.name}</div>
          <div className="text-center">愛知県 半田市</div> {/* 住所の例 */}
          <p className="mt-4">
            {user.profileText || "プロフィール情報がありません。"}
          </p>
          <div className="flex justify-between mt-8">
            <div className="">
              <div className="">タンザニア</div> {/* 配属地の例 */}
              <div className="">26年1次隊</div> {/* 隊員期の例 */}
            </div>
            <div className="">
              <a
                href=""
                className="bg-[#F7FAFC] border border-[#E7E7E7] text-center inline-block rounded-3xl px-4 py-2 min-w-32"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
