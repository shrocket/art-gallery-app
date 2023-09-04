import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                imageSource={piece.imageSource}
                artist={piece.artist}
                name={piece.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
