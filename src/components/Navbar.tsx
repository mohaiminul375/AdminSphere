import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
   const path=usePathname();
   console.log(path)
    return (
        <div className="bg-base-100 shadow-2xl border-b-2 h-10 md:h-16">
            <div className="flex justify-center items-center gap-6 h-full">
                <Link href="/">
                    Home
                </Link>
                <Link href="/admin-dashboard">
                    Admin Dashboard
                </Link>
            </div>
        </div>
    );
}
