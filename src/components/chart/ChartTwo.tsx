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
    return (
        <></>
    );
}

export default ChartTwo;
