import React from 'react'
import HeroImg from '../../img/hero6.svg'
import GithubLogo from '../../img/github-logo.svg'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font" id="Hero">
            <div className="container mx-auto flex px-6 lg:px-10 md:px-12 py-5 md:py-24 md:flex-row flex-col-reverse items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col sm:mt-0 mt-8 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="md:leading-tight font-bold title-font sm:text-5xl text-4xl text-gray-900">Hi, I'am<span className="text-blue-600"> Yuke
                        <br className="hidden lg:inline-block" /> Brilliant Hestiavin</span>
                    </h1>
                    <p className="text-gray-800 font-normal text-lg leading-loose my-10">Halo! Saya Seorang Full Stack Developer
                        <br className="hidden lg:inline-block" /> dari Surabaya. Saya akan memberikan pelayanan
                        <br className="hidden lg:inline-block" /> terbaik untuk project yang saya kerjakan
                    </p>
                    <div className="flex justify-center">
                        <a href="https://github.com/yukebrillianth" target="_blank" rel="noreferrer" className="bg-gray-900 inline-flex py-3 px-5 rounded-lg items-center mr-4 hover:bg-gray-800 focus:outline-none">
                            <img className="w-5 md:w-7" src={GithubLogo} alt="github logo" />
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-white mb-1">Available On</span>
                                <span className="title-font font-medium text-white">GitHub</span>
                            </span>
                        </a>
                        <button className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512"><path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path></svg><span className="ml-4 flex items-start flex-col leading-none"><span className="text-xs text-gray-600 mb-1">GET IT ON</span><span className="title-font font-medium">Google Play</span></span></button>
                    </div>
                </div>

                <div className="md:w-5/12 w-full">
                    <img className="object-cover object-center" alt="hero" src={HeroImg} />
                </div>
            </div>
        </section>
    )
}

export default Hero
