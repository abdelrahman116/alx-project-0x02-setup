import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>This is my header</h1>
      <ul>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/home">
          <li>Home</li>
        </Link>
      </ul>
    </div>
  );
}
