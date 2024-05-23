import Image from "next/image";
import HamburgerButton from "@/components/HamburgerButton";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Taiji() {
  return (
    <>
      <Header />

      <main className="mt-8 mx-4">
        <SectionTitle title="隊次" />

        <div className="mt-8">
          <ul className="grid grid-cols-2 gap-8">
            <li>
              <Link href="#">23年1次隊</Link>
            </li>
            <li>
              <Link href="#">23年1次隊</Link>
            </li>
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>{" "}
            <li>
              <Link href="#">23年1次隊</Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
