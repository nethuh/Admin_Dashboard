import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title:
      "Admin Dashboard",
  description: "This is Next.js Admin Dashboard",
};

export default function Home() {
  return (
    <div>
      <Sidebar/>
    </div>
  );
}
