import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBox from "../src/components/searchBox/searchBox.component";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-100 h-screen font-kanit">
      <main>
        <h1
          className="text-5xl absolute left-1/2 top-[10%]"
          style={{
            transform: "translate(-50%, 0)",
          }}
        >
          Deel Challenge
        </h1>
        <div className="h-screen flex justify-center items-center">
          <SearchBox />
        </div>
      </main>
      <footer>
        <div className="absolute right-5 bottom-2">
          Developed by{" "}
          <a
            className="underline text-violet-800"
            target="_blank"
            href="https://www.linkedin.com/in/carlos-agustin-mori-765116128/"
            rel="noreferrer"
          >
            Carlos Mori
          </a>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Home;
