import Image from "next/image";

export default function Header() {
    return (
        <div className={"w-full bg-header h-56 relative"}>
            <div className={"pl-2 pt-2 absolute opacity-40"}>
                <Image src={"/images/stroke_small.png"} width={379} height={120} alt={"Small paint stroke"}/>
            </div>
            <div className={"invisible md:visible flex w-full h-56 absolute items-end justify-end place-items-end overflow-hidden"}>
                <div className={"flex opacity-40 rotate-12"}>
                    <Image src={"/images/stroke_large.png"} width={1040} height={95} alt={"Large paint stroke"}/>
                </div>
            </div>
            <div className="flex w-full h-full items-center justify-center place-items-center">
                <Image
                    src="/images/logo.png"
                    width={178}
                    height={178}
                    className={"object-center"}
                    alt={"Logo"}
                />
            </div>
        </div>
    )
}
