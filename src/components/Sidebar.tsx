"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import {
    MdArrowLeft,
    MdSettings, MdCalendarMonth, MdDashboard, MdPeople, MdTableChart, MdBarChart,
} from "react-icons/md";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({sidebarOpen, setSidebarOpen}: SidebarProps) => {
    const pathname = usePathname();
    return (
        <aside
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link href="/"
                className="group relative flex items-center gap-2.5 px-4 py-2 font-extrabold text-3xl text-bodydark1 duration-300 ease-in-out">
                    <Image
                        width={50}
                        height={5}
                        src={"/image/logo-icon.svg"}
                        alt="Logo"
                        priority
                    />
                    Admin
                </Link>

                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <MdArrowLeft size={20}/>
                </button>
            </div>

            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            MENU
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* <!-- Menu Item Dashboard --> */}

                            <Link
                                href="#"
                                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    (pathname === "/" || pathname.includes("dashboard")) &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <MdDashboard size={20}/>
                                Dashboard
                            </Link>

                            <li>
                                <Link href="/"
                                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                          pathname.includes("calendar") &&
                                          "bg-graydark dark:bg-meta-4"
                                      }`}
                                >

                                    <MdCalendarMonth size={20}/>
                                    Calender
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/profile"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <MdPeople size={20}/>
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/tables"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <MdTableChart size={20}/>
                                    Tables
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/settings"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("settings") &&
                                        "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <MdSettings size={20}/>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Others Group --> */}

                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            OTHERS
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link
                                    href="/"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                                    }`}
                                >
                                    <MdBarChart size={20}/>
                                    Chart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
