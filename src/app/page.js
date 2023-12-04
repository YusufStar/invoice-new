import Invoice from "@/components/invoice";

export default function Home() {
    return (
        <div className="min-h-screen h-fit w-screen overflow-y-auto overflow-x-hidden flex flex-col gap-6 items-center justify-center">
            <Invoice/>
        </div>
    )
}
