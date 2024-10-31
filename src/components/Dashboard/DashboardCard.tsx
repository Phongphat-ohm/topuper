"use client"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface Root {
    header: string;
    count: string;
    count_nub: string;
}

export default function DashboardCard({ header, count, count_nub }: Root) {
    const [isShow, setIsShow] = useState(true);

    return (
        <>
            <div className="min-w-auto flex flex-col">
                <header className="w-full p-2 px-4 bg-blue-500 text-white text-sm flex justify-between items-center gap-20">
                    <label>
                        {header}
                    </label>
                    <button className={!isShow ? "transition-all duration-500 rotate-180" : "transition-all duration-500"} onClick={() => setIsShow(!isShow)}>
                        <FaAngleDown />
                    </button>
                </header>
                <div className={isShow ? "p-5 transition-all duration-500 h-auto bg-white shadow" : "p-0 h-0 transition-all duration-500 overflow-y-hidden bg-white shadow"}>
                    <div className="flex justify-between items-end">
                        <h1 className="text-8xl">
                            {count}
                        </h1>
                        <label>{count_nub}</label>
                    </div>
                </div>
            </div>
        </>
    )
}