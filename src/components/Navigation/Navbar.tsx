import { FaAngleLeft } from "react-icons/fa6"

export default function Navbar({ hide, setHide }: any) {
    return (
        <>
            <div className="sticky top-0 left-0 w-full bg-white p-5 shadow flex items-center justify-between">
                <button className={!hide ? "p-2 rounded hover:bg-gray-100 bg-white" : "p-2 rounded hover:bg-gray-100 bg-white opacity-50 hover:opacity-100"} onClick={() => { setHide(!hide) }}>
                    <FaAngleLeft className={hide ? "transition-all duration-200 -rotate-180" : "transition-all duration-200"} />
                </button>
            </div>
        </>
    )
}