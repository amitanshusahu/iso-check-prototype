"use client"
import { BarChar1 } from "@/components/BarChart1";
import { BreadcrumbWithCustomSeparator } from "@/components/Bread";
import Navbar from "@/components/Navbar";
import PieChart1 from "@/components/PiChart1";
import { Table1 } from "@/components/Table1";
import { Table2 } from "@/components/Table2";
import { Card } from "@/components/ui/card";
// import Image from "next/image";


export default function Home() {
  return (
    <div className="max-w-[1444px] mx-auto">
      <div className="grid grid-cols-[30%70%]">
        <aside className="p-8 bg-sky-600 h-[100vh]">
          <div className="overflow-hidden h-[50px] w-[200px]">
            <img src="https://www.cdnlogo.com/logos/f/85/flaticon.svg" className="object-cover" />
          </div>
          <div className="mt-8">
            <ul className="flex flex-col gap-4 text-gray-100 font-semibold">
              <li className="border-b-2 w-full py-2">Menu Items</li>
              <li className="w-full p-2">Customer compliance</li>
              <li className="w-full p-2 text-gray-300">Risk Status</li>
              <li className="w-full p-2 text-gray-300">Report Status</li>
              <li className="w-full p-2 text-gray-300">ISO Check Status</li>
              <li className="w-full p-2 text-gray-300">Dashboard</li>
            </ul>
          </div>
        </aside>

        <div className="w-full h-[100vh] overflow-y-auto">
          <div className="p-8 bg-slate-50 min-h-[100vh]">
            <Navbar />
            <div className="pt-8 flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Customer Centric Compliance</h2>
              <BreadcrumbWithCustomSeparator />
              <h2 className="text-xl font-semibold text-gray-700">Utility Hub Compliance Status</h2>
            </div>

            <div className="mt-11">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-4">
                  <Table1 />
                </Card>
                <PieChart1 />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card className="p-4">
                  <Table2 />
                </Card>
                <BarChar1 />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
