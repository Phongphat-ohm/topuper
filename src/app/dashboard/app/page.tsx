"use client"
import AppCard from "@/components/Dashboard/App/AppCard";
import DefaultLayout from "@/components/layout/DefaultLayout";


export default function Page() {
    return (
        <>
            <DefaultLayout>
                <div className="container mx-auto px-5">
                    <ul className="text-sm text-gray-500 flex gap-2 p-2">
                        <li>แพงควบคุม</li>
                        <li>{">"}</li>
                        <li>หน้าหลัก</li>
                        <li>{">"}</li>
                        <li>แอป</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid grid-cols-4 gap-3">
                            <AppCard />
                            <AppCard />
                            <AppCard />
                            <AppCard />
                            <AppCard />
                            <AppCard />
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}