import GlobalStyle from "../styles";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

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
      <FavoriteButton
        onToggleFavorite={handleToggleFavorite}
        isFavorite={artPiecesInfo[slug].isFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
