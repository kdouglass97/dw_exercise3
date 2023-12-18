import Link from "next/link";

const Header = () => (
    <header>
        <nav>
            <Link href="/New York">New York</Link>
            <Link href="/Tokyo">Tokyo</Link>
            <Link href="/Miami">Miami</Link>
            <Link href="/Berlin">Berlin</Link>
        </nav>
    </header>
);

export default Header;