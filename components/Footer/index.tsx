"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Footer() {
  const { data: session, status } = useSession();

  return (
    <footer className="bg-[#F7FAFC] py-14 mt-16">
      <div className="mx-4">
        <div className="">
          {status === "authenticated" ? (
            <div>
              <div className="flex items-center">
                <img
                  src={session.user?.image ?? ``}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p className="ml-3">@{session.user?.name}</p>
                <Link
                  className="ml-2 underline text-slate-400"
                  href="/api/auth/signout"
                >
                  ログアウト
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Link href="/api/auth/signin">ログイン</Link>
            </div>
          )}
        </div>

        <div className="px-4 mt-8">
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
      </div>
    </footer>
  );
}
