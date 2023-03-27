import { useRouter } from "next/router";
import { Navbar } from "../../components";

export default function PortfolioDetail() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Navbar />
            <h1 className="text-dark mt-4">Judul Post: {slug}</h1>
        </>
    );
}