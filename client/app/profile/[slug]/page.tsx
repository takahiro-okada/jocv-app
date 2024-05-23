import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-4 mt-10">
          <div className="flex justify-center">
            <Image
              src="/images/icon_oka.jpg"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
          <div className="text-xl mt-3 text-center">岡田　貴弘</div>
          <div className="text-center">愛知県 半田市</div>

          <p className="mt-4">
            ここにはプロフィールが入りますここにはプロフィールが入りますここにはプロフィールが入りますここにはプロフィールが入りますここにはプロフィールが入りますここにはプロフィールが入ります
          </p>

          <div className="flex justify-between mt-8">
            <div className="">
              <div className="">タンザニア</div>
              <div className="">26年1次隊</div>
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
