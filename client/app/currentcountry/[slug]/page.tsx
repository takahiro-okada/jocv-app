import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CurrentCountry() {
  return (
    <>
      <Header />

      <main>
        <div className="mx-4">
          <div className="text-xl flex items-center">
            <Image
              src="/images/icon-search.svg"
              alt=""
              width={40}
              height={40}
            />
            <h1 className="ml-2">愛知県に住んでいるOBOG</h1>
          </div>

          <div className="mt-6">
            <div className="flex items-start gap-6 border border-gray-300 py-3 px-3 rounded-xl">
              <div className="w-4/12">
                <Image
                  src="/images/icon_oka.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-8/12">
                <h2 className="text-2xl font-bold">岡田貴弘</h2>
                <div className="flex mt-3">
                  <div className="">タンザニア</div>
                  <div className="ml-3">愛知県</div>
                </div>
                <p className="mt-3">
                  こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-start gap-6 border border-gray-300 py-3 px-3 rounded-xl">
              <div className="w-4/12">
                <Image
                  src="/images/icon_oka.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-8/12">
                <h2 className="text-2xl font-bold">岡田貴弘</h2>
                <div className="flex mt-3">
                  <div className="">タンザニア</div>
                  <div className="ml-3">愛知県</div>
                </div>
                <p className="mt-3">
                  こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。こんにちは！山田花子です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
