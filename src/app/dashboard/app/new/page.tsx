import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";
import { FaAngleLeft, FaCheck, FaClipboardUser } from "react-icons/fa6";

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
                        <li>เพิ่มแอป</li>
                    </ul>
                    <div className="mt-3">
                        <div className="flex justify-center">
                            <form className="p-5 flex flex-col bg-white rounded-lg w-1/2 shadow">
                                <h1 className="text-3xl">
                                    เพิ่มแอปของคุณ
                                </h1>
                                <label className="text-gray-500 mt-2">กรุณากรอกข้อมูลให้ครบเพื่อสร้างแอปของคุณ   </label>
                                <div className="flex flex-col mt-2">
                                    <label>ชื่อแอป</label>
                                    <input type="text" className="tail-input" placeholder="กรอกชื่อแอป" autoFocus required />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label>รายละเอียดแอป</label>
                                    <input type="text" className="tail-input" placeholder="กรอกรายละเอียดแอป" required />
                                </div>
                                <div className="flex gap-3 mt-5">
                                    <button type="submit" className="rounded-lg bg-green-400 text-white p-3 px-5 flex items-center justify-center gap-2 hover:bg-green-500">
                                        <FaCheck className="text-sm" />
                                        บันทึก
                                    </button>
                                    <button type="reset" className="rounded-lg bg-yellow-400 text-white p-3 px-5 flex items-center justify-center gap-2 hover:bg-yellow-500">
                                        <FaClipboardUser className="text-sm" />
                                        ล้างฟอร์ม
                                    </button>
                                    <Link href={"/dashboard/app"} className="rounded-lg bg-red-400 text-white p-3 px-5 flex items-center justify-center gap-2 hover:bg-red-500">
                                        <FaAngleLeft />ยกเลิก
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}