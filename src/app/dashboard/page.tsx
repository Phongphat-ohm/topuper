"use client"
import { useEffect, useState } from "react";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import TableDash from "@/components/Dashboard/Table";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { FaSpinner } from "react-icons/fa6";

export default function Page() {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

    useEffect(() => {
        if (timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval); // Clear interval on unmount
        }
    }, [timeLeft]);

    // Format the time as mm:ss
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <DefaultLayout>
            <div className="container mx-auto px-5">
                <ul className="text-sm text-gray-500 flex gap-2 p-2">
                    <li>แพงควบคุม</li>
                    <li>{">"}</li>
                    <li>หน้าหลัก</li>
                </ul>
                <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                        <DashboardCard header="จำนวนแอปทั้งหมด" count="0" count_nub="แอป" />
                        <DashboardCard header="รายได้ทั้งหมด/วัน" count="0" count_nub="บาท" />
                        <DashboardCard header="รายได้ทั้งหมด/เดือน" count="0" count_nub="บาท" />
                        <DashboardCard header="รายได้ทั้งหมด/ปี" count="0" count_nub="บาท" />
                    </div>
                    <div className="mt-2 text-gray-500 text-sm flex items-center gap-3">
                        <FaSpinner className="animate-spin text-green-500" />
                        รีโหลดข้อมูลในอีก {formatTime(timeLeft)} นาที
                    </div>
                    <div className="mt-2">
                        <TableDash />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
