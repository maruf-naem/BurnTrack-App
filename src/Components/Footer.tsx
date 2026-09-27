import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#090A0D] text-base-content p-4">
            <aside className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 justify-between items-center">
                <Link
                    href="/"
                    className="group flex items-center gap-2 rounded-lg px-2 py-1 transition-all duration-200 hover:bg-white/5"
                >
                    <Image
                        src={Logo}
                        alt="Fitness Tracker Logo"
                        width={40}
                        height={40}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="hidden text-lg font-bold text-white sm:block">
                        Fitness Tracker
                    </span>
                </Link>
                <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;