import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function Index() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);

  if (!data) {
    return "loading...";
  }
  return (
    <div>
      <h1>My Framework from file</h1>
      <ul>
        {data.map((artwork) => (
          <>
            <li key={artwork.slug}>{artwork.name}</li>
            <li>{artwork.artist} </li>
          </>
        ))}
      </ul>
    </div>
  );
}
