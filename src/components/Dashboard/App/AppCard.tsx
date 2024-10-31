import { FaTrash } from "react-icons/fa6"
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

export default function AppCard() {
    return (
        <>
            <div className="bg-white overflow-hidden rounded-xl p-5 shadow hover:ring-4 transition-all duration-200 relative">
                <h1 className="text-3xl">
                    {"{ชื่อแอป}"}
                </h1>
                <label className="text-gray-500 mt-2">{"{รายละเอียดแอป}"}</label>
                <div className="flex gap-2 mt-2">
                    <button className="w-1/2 bg-blue-500 p-2 rounded text-sm text-white flex gap-2 items-center justify-center transition-all duration-150 active:scale-90">
                        <FaInfoCircle className="text-xs" />
                        รายละเอียดแอป
                    </button>
                    <button className="w-1/2 bg-red-500 p-2 rounded text-sm text-white flex gap-2 items-center justify-center transition-all duration-150 active:scale-90">
                        <FaTrash className="text-xs" />
                        ลบแอป
                    </button>
                </div>
                {/* <input type="checkbox" className="absolute top-5 right-5 rounded size-4 border-gray-300"/> */}
            </div >
        </>
    )
}