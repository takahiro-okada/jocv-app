import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function DispatchedCountry() {
  return (
    <>
      <Header />

      <main className="mt-8 mx-4">
        <SectionTitle title="派遣国" />

        <div className="mt-8">
          <div className="">
            <h3 className="text-2xl">アフリカ</h3>
            <ul className="grid grid-cols-2 gap-8 mt-4">
              <li>
                <Link href="#">エジプト</Link>
              </li>
              <li>
                <Link href="#">エチオピア</Link>
              </li>
              <li>
                <Link href="#">ガーナ</Link>
              </li>
              <li>
                <Link href="#">カメルーン</Link>
              </li>
              <li>
                <Link href="#">ケニア</Link>
              </li>
              <li>
                <Link href="#">コートジボワール</Link>
              </li>
              <li>
                <Link href="#">コンゴ</Link>
              </li>
              <li>
                <Link href="#">ザンビア</Link>
              </li>
              <li>
                <Link href="#">ジンバブエ</Link>
              </li>
              <li>
                <Link href="#">スーダン</Link>
              </li>
              <li>
                <Link href="#">セネガル</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-8">アジア</h3>
            <ul className="grid grid-cols-2 gap-8 mt-4">
              <li>
                <Link href="#">インドネシア</Link>
              </li>
              <li>
                <Link href="#">カンボジア</Link>
              </li>
              <li>
                <Link href="#">シリア</Link>
              </li>
              <li>
                <Link href="#">タイ</Link>
              </li>
              <li>
                <Link href="#">ネパール</Link>
              </li>
              <li>
                <Link href="#">パキスタン</Link>
              </li>
              <li>
                <Link href="#">フィリピン</Link>
              </li>
              <li>
                <Link href="#">ベトナム</Link>
              </li>
              <li>
                <Link href="#">ミャンマー</Link>
              </li>
              <li>
                <Link href="#">ラオス</Link>
              </li>
              <li>
                <Link href="#">中国</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
