import Link from "next/link";
import { FaAngleLeft, FaGear, FaHouse, FaPlus, FaRightFromBracket } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";

export default function Sidebar({ hide, setHide }: any) {
    const link_list = [
        {
            name: "หน้าหลัก",
            route: "/dashboard",
            icon: <FaHouse />
        },
        {
            name: "เพิ่มแอป",
            route: "/dashboard/app/new",
            icon: <FaPlus />
        },
        {
            name: "แอปทั้งหมด",
            route: "/dashboard/app",
            icon: <GrAppsRounded />
        },
        {
            name: "การตั้งค่า",
            route: "/dashboard/settings",
            icon: <FaGear />
        }
    ]

    return (
        <>
            <div className={!hide ? "w-1/4 bg-white p-5 transition-all duration-300 max-xl:fixed max-xl:w-3/4 h-full" : "w-0 bg-white transition-all duration-300 z-20 overflow-hidden"}>
                {/* <div className="flex justify-end">
                    <div className={!hide ? "" : "p-2"}>
                        <button className={!hide ? "p-2 rounded hover:bg-gray-100 bg-white" : "p-2 rounded hover:bg-gray-100 bg-white opacity-50 hover:opacity-100"} onClick={() => { setHide(!hide) }}>
                            <FaAngleLeft className={hide ? "transition-all duration-200 -rotate-180" : "transition-all duration-200"} />
                        </button>
                    </div>
                </div> */}
                <ul className="flex flex-col">
                    {link_list.map((val, index) => (
                        <li key={index}>
                            <Link href={val.route} className="p-4 px-6 hover:bg-gray-100 flex items-center rounded-lg gap-2 transition-all duration-200 text-gray-500 hover:text-black">
                                {val.icon}
                                <p>{val.name}</p>
                            </Link>
                        </li>
                    ))}
                    <hr className="my-2" />
                    <li>
                        <Link href={"/logout"} className="p-4 px-6 hover:bg-red-100 flex items-center rounded-lg gap-2 transition-all duration-200 text-gray-500 hover:text-red-500">
                            <FaRightFromBracket />
                            <p>ออกจากระบบ</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}