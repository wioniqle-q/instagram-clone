import React from "react";
import Search from "./HaederSearch/Search";
import Icons from "./HeaderIcons/Icons";
import Logo from "./HeaderLogo/Logo";

const Header = () => {
    return (
        <div className="border-b-2">
            <div className="max-w-4xl mx-auto flex justify-between py-1 sm:py-3 items-center bg-white">
                <Logo />
                <Search />
                <Icons />

            </div>
        </div>
    );
};

export default Header;
