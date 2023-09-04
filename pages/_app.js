import GlobalStyle from "../styles";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";
import Link from "next/link";
import Layout from "@/components/Layout";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (!pieces) {
    return "loading...";
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Layout />
    </>
  );
}
