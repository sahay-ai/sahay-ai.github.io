import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { background, sahay, main } from "../assets"; // Import your assets
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const navigation = [
    {
        id: "0",
        title: "Features",
        url: "/#features",  // Added root path for proper routing
    },
    {
        id: "2",
        title: "About",
        url: "/#how-to-use", // Updated for correct routing
    },
    {
        id: "1",
        title: "Technology",
        url: "/#pricing", // Added root path
    },
    {
        id: "3",
        title: "Roadmap",
        url: "/#roadmap", // Added root path
    },
  {  
    id: "5",
    title: "Contact",
    url: "#contact", // Add this new Contact link
},
    {
        id: "4",
        title: "Sign in",
        url: "https://app.sahayai.com/",
        onlyMobile: true, // Mobile-only
    },
];

const Header = () => {
    const { pathname, hash } = useLocation(); // Destructure both pathname and hash
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                {/* Logo + Text */}
                <a className="block w-[12rem] xl:mr-8 flex items-center" href="/">
                    <img src={sahay} width={40} height={40} alt="Sahay AI" />
                    <span className="ml-2 text-white text-xl font-bold">Sahay AI</span>
                </a>

                {/* Navigation */}
                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname + hash ? "z-2 lg:text-white" : "lg:text-white/50"
                                } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Background Effects */}
                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <img className="w-full h-full object-cover" src={main} width={688} height={953} alt="" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>

                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>

                {/* Sign-in Button for Desktop */}
                <Button className="hidden lg:flex" href="https://app.sahayai.com/">
                    Sign in
                </Button>

                {/* Hamburger Menu for Mobile */}
                <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;