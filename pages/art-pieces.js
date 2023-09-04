import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";

export default function ArtPiecesOverview({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>

      <ArtPieces pieces={pieces} />
    </>
  );
}
