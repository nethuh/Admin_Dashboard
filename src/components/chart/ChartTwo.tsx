import { ApexOptions } from "apexcharts";
import React, { useState } from "react";

interface ChartThreeState {
    series: number[];
}

const options: ApexOptions = {
    chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "donut",
    },
    colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
    labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
    legend: {
        show: false,
        position: "bottom",
    },

    plotOptions: {
        pie: {
            donut: {
                size: "65%",
                background: "transparent",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

const ChartTwo: React.FC = () => {
    const [state, setState] = useState<ChartThreeState>({
        series: [65, 34, 12, 56],
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
            series: [65, 34, 12, 56],
        }));
    };
    handleReset;

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Visitors Analytics
                    </h5>
                </div>
                <div>
                    <div className="relative z-20 inline-block">
                        <select
                            name=""
                            id=""
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                        >
                            <option value="" className="dark:bg-boxdark">
                                Monthly
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
            );
}

export default ChartTwo;
