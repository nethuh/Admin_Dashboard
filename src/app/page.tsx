import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title:
      "Admin Dashboard",
  description: "This is Next.js Admin Dashboard",
};

export default function Home() {
  return (
    <div>
      <DefaultLayout>

      </DefaultLayout>
    </div>
  );
}
