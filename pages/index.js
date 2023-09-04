import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ArtPieces from "../components/ArtPieces";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function Index() {
  const { data: pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (!pieces) {
    return "loading...";
  }

  return (
    <>
      <h1>Welcome!</h1>

      <ArtPieces pieces={pieces} />
    </>
  );
}
