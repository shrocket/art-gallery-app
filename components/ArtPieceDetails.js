import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  name,
  imageSource,
  artist,
  year,
  genre,
}) {
  return (
    <>
      <button>
        <Link href="/art-pieces">Back</Link>
      </button>
      <Image src={imageSource} alt={name} height={500} width={500} />
      <p>
        {artist}: {name} {year} {genre}
      </p>
    </>
  );
}
