import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist, slug }) {
  return (
    <div>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <h2>
        {name} by {artist}
      </h2>
    </div>
  );
}
