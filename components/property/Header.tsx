import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-2xl font-bold text-greeb-600">
                    🌿 StayFinder
                </Link>

                <nav className="space-x-6">
                    <Link href="/" className="hover:text-green-600">Home</Link>
                    <Link href="/" className="hover:text-green-600">About</Link>
                    <Link href="/" className="hover:text-green-600">Contact</Link>
                </nav>
            </div>
        </header>
    )
}