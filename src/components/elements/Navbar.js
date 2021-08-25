import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-scroll';
import Logo from '../../img/logo-transparant.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="md:px-16 px-6 flex flex-col md:flex-row md:justify-between md:items-center md:py-5 py-6">
            <div className="flex flex-row">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="Logo-yukebrillianth" className="rounded-full" width="50" />
                    </Link>
                </div>

                <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer md:hidden block">
                    {isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        : <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    }
                </span>
            </div>

            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="md:hidden" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base font-medium text-gray-700 pt-4 md:pt-0">
                            <li>
                                <Link
                                    to="Hero"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                                >Home</Link>
                            </li>
                            <li>
                                <Link
                                    to="About"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                                >About</Link>
                            </li>
                            <li>
                                <Link
                                    to="Portfolio"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                                >Portfolio</Link>
                            </li>
                            <li>
                                <a
                                    href="http://haloteknologi.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="md:p-4 py-3 px-0 block hover:text-blue-600"
                                >Blog</a>
                            </li>
                            <li>
                                <Link
                                    to="Contact"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                                >Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Transition>

            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base font-medium text-gray-700 pt-4 md:pt-0">
                        <li>
                            <Link
                                to="Hero"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                to="About"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                to="Portfolio"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                            >Portfolio</Link>
                        </li>
                        <li>
                            <a
                                href="http://haloteknologi.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="md:p-4 py-3 px-0 block hover:text-blue-600"
                            >Blog</a>
                        </li>
                        <li>
                            <Link
                                to="Contact"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                className="md:p-4 py-3 px-0 block hover:text-blue-600 cursor-pointer"
                            >Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Navbar;