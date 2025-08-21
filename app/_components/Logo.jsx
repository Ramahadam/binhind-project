import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="">
      <Image src="./logo.svg" alt="" width={120} height={120} />
    </Link>
  );
}

export default Logo;
