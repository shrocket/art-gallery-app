import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
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
