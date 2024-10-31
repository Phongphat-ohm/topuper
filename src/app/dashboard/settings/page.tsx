import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Page() {
    return (
        <>
            <DefaultLayout>
                <div className="container mx-auto">
                    <ul className="text-sm text-gray-500 flex gap-2 p-2">
                        <li>แพงควบคุม</li>
                        <li>{">"}</li>
                        <li>หน้าหลัก</li>
                        <li>{">"}</li>
                        <li>การตั้งค่า</li>
                    </ul>
                </div>
            </DefaultLayout>
        </>
    )
}