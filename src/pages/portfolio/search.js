import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "../../components";

export default function SearchPortfolio() {
    const router = useRouter();
    const { q } = router.query;
    return (
        <>
            <Navbar />
            <Link href={{ pathname: '/portfolio/search', query: { q: 'this way' } }}>path</Link>
            <h1 className="text-dark mt-4">search</h1>
            <h1 className="text-dark mt-4">{q}</h1>
        </>
    );
}