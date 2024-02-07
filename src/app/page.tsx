import {Metadata} from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
    title:
        "Admin Dashboard",
    description: "This is Next.js Admin Dashboard",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Dashboard/>
            </DefaultLayout>
        </>
    );
}
