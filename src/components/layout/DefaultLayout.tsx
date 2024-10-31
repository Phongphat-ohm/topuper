"use client";
import { useState } from "react";
import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";

export default function DefaultLayout({ children }: any) {
    const [hide, setHide] = useState(false);

    return (
        <>
            <div className="flex h-screen">
                <Sidebar hide={hide} setHide={setHide} />
                <div className="bg-gray-100 w-full h-screen overflow-scroll relative">
                    <Navbar hide={hide} setHide={setHide} />
                    {children}
                </div>
            </div>
        </>
    )
}