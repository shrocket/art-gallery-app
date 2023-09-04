import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtpiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtpiece) {
    return null;
  }

  return <ArtPieceDetails {...currentArtpiece} />;
}
