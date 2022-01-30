import React from 'react';
import Icon from "./Icon";

const SidebarButton = ({ children, icon }) => {
    return (
        <li className="-mx-5 py-3">
            <a className="text-secondary-50 text-xl flex items-center gap-2 hover:bg-dark-300 hover:bg-opacity-50 transition-all duration-300 px-4 py-2 rounded-xl" href="/">
                {icon && <Icon icon={icon}/>}
                {children}
            </a>
        </li>
    )
}

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen bg-dark">
            <div className="p-10 flex flex-col justify-between h-full">
                <div>
                    <header>
                        <h1 className="text-white font-bold text-3xl">
                            <a href="/">
                                Cryptoday
                            </a>
                        </h1>
                    </header>
                    <nav className="mt-10">
                        <ul>
                            <SidebarButton icon="dashboard">Dashboard</SidebarButton>
                            <SidebarButton icon="news">News</SidebarButton>
                            <SidebarButton icon="coin">Coin</SidebarButton>
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