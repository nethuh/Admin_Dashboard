import React, {ReactNode} from "react";

interface CardDataStatsProps {
    title: string;
    total: string;
    rate: string;
    levelUp?: boolean;
    levelDown?: boolean;
    children: ReactNode;
}

const Card: React.FC<CardDataStatsProps> = ({}) => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div>

            </div>
        </div>
    )
}

export default Card;
