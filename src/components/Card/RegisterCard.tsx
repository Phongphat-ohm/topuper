"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function LoginCard() {
    const [generate, setGenerate] = useState("");
    const [upperCase, setUpperCase] = useState("");

    useEffect(() => {
        const generateRandomCode = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890';
            let result = '';
            const charactersLength = characters.length;
            for (let i = 0; i < 6; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        };

        setGenerate(generateRandomCode());
    }, []);

    const formHandler = (e: FormData) => {
        if (generate !== e.get("vertify")) {
            toast.error("กรุณากรอกรหัสยืนยันให้ตรงกัน");
        }
    }

    return (
        <>
            <div className="w-96 flex flex-col overflow-hidden">
                <span className="bg-blue-500 w-full h-2 rounded-t"></span>
                <div className="p-5 w-full border rounded-b-lg bg-white">
                    <h1 className="text-2xl">
                        ยินดีต้อนรับ !
                    </h1>
                    <label className="text-gray-500">คุณสามารถสมัครสมาชิกเพื่อใช้ระบบเรา</label>
                    <form action={formHandler} className="flex flex-col mt-5">
                        <div className="flex flex-col">
                            <label className="flex gap-1">อีเมล<span className="text-red-500">*</span></label>
                            <input type="text" autoFocus required className="p-2 px-3 mt-2 border outline-none transition-all duration-200 focus:ring-4 focus:rounded" placeholder="กรอกชื่อผู้ใช้หรืออีเมล" name="identify" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label className="flex gap-1">ชื่อผู้ใช้<span className="text-red-500">*</span></label>
                            <input type="text" required className="p-2 px-3 mt-2 border outline-none transition-all duration-200 focus:ring-4 focus:rounded" placeholder="กรอกชื่อผู้ใช้หรืออีเมล" name="identify" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label className="flex gap-1">รหัสผ่าน<span className="text-red-500">*</span></label>
                            <input type="password" required className="p-2 px-3 mt-2 border outline-none transition-all duration-200 focus:ring-4 focus:rounded" placeholder="กรอกรหัสผ่าน" name="password" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label className="flex gap-1">ยืนยันรหัสผ่าน<span className="text-red-500">*</span></label>
                            <input type="password" required className="p-2 px-3 mt-2 border outline-none transition-all duration-200 focus:ring-4 focus:rounded" placeholder="กรอกรหัสผ่าน" name="password" />
                        </div>
                        <div className="flex gap-2 mt-3">
                            <div className="relative w-1/2 flex flex-col">
                                <span className="bg-gray-500 text-gray-400 flex items-center justify-center text-center h-full">
                                    {generate}
                                </span>
                                <div className="w-full h-full absolute top-0"></div>
                            </div>
                            <input type="text" required className="p-2 px-3 border outline-none transition-all duration-200 focus:ring-4 focus:rounded w-full" placeholder="กรอกรหัสยืนยัน" value={upperCase} name="vertify" onChange={(e) => {
                                setUpperCase(e.target.value.toUpperCase());
                            }} />
                        </div>
                        <button className="mt-5 p-3 rounded bg-blue-500 text-white">
                            ยืนยัน
                        </button>
                    </form>
                    <div className="text-center mt-1 text-gray-500 text-sm">
                        คุณต้องการเข้าสู่ระบบไหม? <Link href="/" className="text-blue-500 font-bold hover:text-blue-700">[กดที่นี่]</Link>
                    </div>
                </div>
            </div>
        </>
    )
}