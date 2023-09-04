import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomNumber = Math.floor(Math.random() * pieces.length);
  console.log(randomNumber);
  return (
    <>
      <Image src={pieces[randomNumber].imageSource} width={500} height={500} />
      <h2>{pieces[randomNumber].artist}</h2>
    </>
  );
}
