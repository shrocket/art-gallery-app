import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              imageSource={piece.imageSource}
              artist={piece.artist}
              name={piece.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
