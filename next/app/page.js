import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h3>Home</h3>
      <Link href = "/users" >Users</Link>
    </>
  );
}
