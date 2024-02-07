"use client";
import React from "react";
import Card from "@/components/Card";
import {MdOutlinePeople, MdOutlineShoppingBag, MdRemoveRedEye, MdShoppingCart} from "react-icons/md";
import ChartOne from "@/components/chart/ChartOne";

const Dashboard: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <Card title="Total views" total="$3.456K" rate="0.43%" levelUp>
                    <MdRemoveRedEye size={20}/>
                </Card>
                <Card title="Total Profit" total="$45.67K" rate="4.43%" levelUp>
                    <MdShoppingCart size={20}/>
                </Card>
                <Card title="Total Product" total="$5.46K" rate="0.43%" levelUp>
                    <MdOutlineShoppingBag size={20}/>
                </Card>
                <Card title="Total Users" total="$2.456K" rate="0.43%" levelDown>
                    <MdOutlinePeople size={20}/>
                </Card>

            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartOne />
            </div>
        </>
    );
}

export default Dashboard;
