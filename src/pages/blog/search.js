import { useRouter } from "next/router";
import { Navbar } from "../../components";
import Link from "next/link";

export default function SearchPortfolio() {
    const router = useRouter();
    const { q, category } = router.query;
    return (
        <>
            <Navbar />
            <h1 className="text-dark mt-4">search</h1>
            <h1 className="text-dark mt-4">{category}</h1>
            <h1 className="text-dark mt-4">{q}</h1>
        </>
    );
}