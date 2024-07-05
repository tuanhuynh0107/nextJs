import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main className="container-fluid main-content flex-grow-1 mt-6 pb-5">
      <Hero />
    </main>

  );
}
