import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7FAFC] py-14 mt-16">
      <div className="px-4">
        <ul className="grid grid-cols-2 gap-10">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/policy">規約とポリシー</Link>
          </li>
          <li>
            <Link href="/howto">使い方</Link>
          </li>
          <li>
            <Link href="/sponsor">スポンサー</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
