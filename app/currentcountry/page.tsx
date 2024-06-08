import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function CurrentCountry() {
  return (
    <>
      <Header />

      <main className="mt-8 mx-4">
        <SectionTitle title="現住所" />

        <div className="mt-8">
          <div className="">
            <h3 className="text-2xl">日本国内</h3>
            <div className="mt-10">
              <h4 className="text-xl">北海道・東北</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">北海道</Link>
                </li>
                <li>
                  <Link href="#">青森県</Link>
                </li>
                <li>
                  <Link href="#">岩手県</Link>
                </li>
                <li>
                  <Link href="#">宮城県</Link>
                </li>
                <li>
                  <Link href="#">秋田県</Link>
                </li>
                <li>
                  <Link href="#">山形県</Link>
                </li>
                <li>
                  <Link href="#">福島県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">関東</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">茨城県</Link>
                </li>
                <li>
                  <Link href="#">栃木県</Link>
                </li>
                <li>
                  <Link href="#">群馬県</Link>
                </li>
                <li>
                  <Link href="#">埼玉県</Link>
                </li>
                <li>
                  <Link href="#">千葉県</Link>
                </li>
                <li>
                  <Link href="#">東京都</Link>
                </li>
                <li>
                  <Link href="#">神奈川県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">中部</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">新潟県</Link>
                </li>
                <li>
                  <Link href="#">富山県</Link>
                </li>
                <li>
                  <Link href="#">石川県</Link>
                </li>
                <li>
                  <Link href="#">福井県</Link>
                </li>
                <li>
                  <Link href="#">山梨県</Link>
                </li>
                <li>
                  <Link href="#">長野県</Link>
                </li>
                <li>
                  <Link href="#">岐阜県</Link>
                </li>
                <li>
                  <Link href="#">静岡県</Link>
                </li>
                <li>
                  <Link href="#">愛知県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">近畿</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">三重県</Link>
                </li>
                <li>
                  <Link href="#">滋賀県</Link>
                </li>
                <li>
                  <Link href="#">京都府</Link>
                </li>
                <li>
                  <Link href="#">大阪府</Link>
                </li>
                <li>
                  <Link href="#">兵庫県</Link>
                </li>
                <li>
                  <Link href="#">奈良県</Link>
                </li>
                <li>
                  <Link href="#">和歌山県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">中国</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">鳥取県</Link>
                </li>
                <li>
                  <Link href="#">島根県</Link>
                </li>
                <li>
                  <Link href="#">岡山県</Link>
                </li>
                <li>
                  <Link href="#">広島県</Link>
                </li>
                <li>
                  <Link href="#">山口県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">四国</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">徳島県</Link>
                </li>
                <li>
                  <Link href="#">香川県</Link>
                </li>
                <li>
                  <Link href="#">愛媛県</Link>
                </li>
                <li>
                  <Link href="#">高知県</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h4 className="text-xl">九州</h4>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                <li>
                  <Link href="#">福岡県</Link>
                </li>
                <li>
                  <Link href="#">佐賀県</Link>
                </li>
                <li>
                  <Link href="#">長崎県</Link>
                </li>
                <li>
                  <Link href="#">熊本県</Link>
                </li>
                <li>
                  <Link href="#">大分県</Link>
                </li>
                <li>
                  <Link href="#">宮崎県</Link>
                </li>
                <li>
                  <Link href="#">鹿児島県</Link>
                </li>
                <li>
                  <Link href="#">沖縄県</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl mt-8">海外</h3>
            <ul className="grid grid-cols-2 gap-4 mt-4">
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
                <Link href="#">バングラデシュ</Link>
              </li>
              <li>
                <Link href="#">フィリピン</Link>
              </li>
              <li>
                <Link href="#">ブータン</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
