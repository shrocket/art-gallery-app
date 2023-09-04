import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight pieces={pieces} />
    </>
  );
}
