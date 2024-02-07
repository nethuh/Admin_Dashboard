import {MdChat, MdList, MdNotifications, MdPeople, MdSearch} from "react-icons/md";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <MdList size={20}/>
                    </button>
                </div>

                <div className="hidden sm:block">
                    <form>
                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2">
                                <MdSearch size={20}/>
                            </button>


                            <input
                                type="text"
                                placeholder="Type to Search..."
                                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                            />
                        </div>
                    </form>
                </div>

                <div>
                    <ul>
                        <MdNotifications size={20}/>
                        <MdChat size={20}/>
                    </ul>
                    <MdPeople/>
                </div>
            </div>
        </header>
    );
};

export default Header;
