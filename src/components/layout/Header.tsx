import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between p-4">
            <Image src="/banner-dark.svg" width={200} height={60} priority={true} alt="GEDIAZQ logo" className="block dark:hidden" />
            <Image src="/banner-light.svg" width={200} height={60} priority={true} alt="GEDIAZQ logo" className="hidden dark:block" />
            <Navbar />
        </header>
    );
}

export default Header;