import Link from "next/link";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  list-style: none;
`;

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <Ul>
            <li>
              <Link href="/">Spotlight</Link>
            </li>
            <li>
              <Link href="/art-pieces">Art Pieces</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
          </Ul>
        </div>
      </nav>
    </>
  );
}
