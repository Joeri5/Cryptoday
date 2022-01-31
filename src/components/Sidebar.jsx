import React from 'react';
import Icon from "./Icon";
import Logo from "../assets/icon.png"
import {Link} from "react-router-dom";

const SidebarButton = ({ children, icon, path }) => {
    return (
        <li className="-mx-5 py-3">
            <Link to={path} className="text-secondary-50 text-xl flex items-center gap-2 hover:bg-dark-300 hover:bg-opacity-50 transition-all duration-300 px-4 py-2 rounded-xl" href="/">
                {icon && <Icon icon={icon}/>}
                {children}
            </Link>
        </li>
    )
}

const Sidebar = () => {
    return (
        <div className="fixed w-64 top-0 left-0 h-screen bg-dark">
            <div className="p-10 flex flex-col justify-between h-full">
                <div>
                    <header>
                        <Link className="text-3xl font-bold text-white" to="/">
                            <img className="h-24 w-24 mx-auto" src={Logo} alt="Cryptoday" />
                        </Link>
                    </header>
                    <nav className="mt-10">
                        <ul>
                            <SidebarButton icon="dashboard" path="/">Dashboard</SidebarButton>
                            <SidebarButton icon="news" path="/news">News</SidebarButton>
                            <SidebarButton icon="coin" path="/coins">Coins</SidebarButton>
                        </ul>
                    </nav>
                </div>
                <footer>
                    <h2 className="text-center text-white font-light text-opacity-25">
                        Made by <br />Joeri Schenk.
                    </h2>
                </footer>
            </div>
        </div>
    );
};

export default Sidebar;