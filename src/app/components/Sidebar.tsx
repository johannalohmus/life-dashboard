import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-neutral-200 bg-white">
            <nav className="p-6">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                        >
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

