'use client'

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className="mt-16 mx-auto mb-5 flex flex-row justify-between">
            <ul className="flex flex-row justify-between flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0 gap-x-16 lg:gap-x-20">
                <li>
                    <p className="text-sm lg:text-base text-white"> {currentYear} Guillermo Diaz </p>
                </li>
                <li>
                    <a href='#inicio' className="text-sm lg:text-base text-white">Inicio</a>
                </li>
                <li>
                    <a href="mailto:guillermoe.diazq@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base text-white">Contactame</a>
                </li>
            </ul>
        </footer>
    );
}