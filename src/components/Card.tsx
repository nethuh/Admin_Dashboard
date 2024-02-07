import React, {ReactNode} from "react";
import {MdArrowDownward, MdArrowUpward} from "react-icons/md";

interface CardDataStatsProps {
    title: string;
    total: string;
    rate: string;
    levelUp?: boolean;
    levelDown?: boolean;
    children: ReactNode;
}

const Card: React.FC<CardDataStatsProps> = ({
                                                children,
                                                total,
                                                rate,
                                                levelUp,
                                                levelDown,
                                                title
                                            }) => {

    return (
        <div
            className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                {children}
            </div>

            <div className="mt-4 flex items-end justify-between">
                <div>
                    <h4 className="text-title-md font-bold text-black dark:text-white">
                        {total}
                    </h4>
                    <span className="text-sm font-medium">{title}</span>
                </div>

                <span className={`flex items-center gap-1 text-sm font-medium ${
                    levelUp && "text-meta-3"
                } ${levelDown && "text-meta-5"} `}
                >

                    {rate}

                    {levelUp && <MdArrowUpward size={20}/>}
                    {levelDown && <MdArrowDownward size={20}/>}

                </span>
            </div>
        </div>
    );
};

export default Card;
