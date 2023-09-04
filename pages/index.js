import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export default function Homepage({ pieces }) {
  return (
    <>
      <h1>Welcome!</h1>
      <Link href="/art-pieces">Art Pieces</Link>
      <br />
      <Spotlight pieces={pieces} />
    </>
  );
}
