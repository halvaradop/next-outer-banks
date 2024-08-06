import Image from "next/image"
import van from "@/assets/van.jpg"
import fire from "@/assets/fire.jpg"
import island from "@/assets/island.jpg"

const Index = () => {

    return (
        <main>
            <div className="text-center uppercase">
                <h1 className="fluency-6xl font-bold">Outer Banks</h1>
            </div>
            <figure className="w-full max-w-full flex items-center overflow-x-hidden">
                <Image className="min-w-full aspect-video object-cover" src={fire} alt="fire picture" />
                <Image className="min-w-full aspect-video object-cover" src={van} alt="van picture" />
                <Image className="min-w-full aspect-video object-cover" src={island} alt="island picture" />
            </figure>
        </main>
    )
}

export default Index