import Image from "next/image";

export default function PortfolioItem({foregroundImage, backgroundImage, title}) {
    return (
        <div>
            <div className={"relative"}>
                <div className={"absolute left-4 top-4"}>
                    <div className={"relative"}>
                        <div className={"absolute w-full h-full bg-header"}/>
                        <Image src={backgroundImage} width={320} height={320} className={"opacity-30"}/>
                    </div>
                </div>

                <div className={"relative mr-4 mb-4"}>
                    <Image src={foregroundImage} width={320} height={320} layout={"fixed"}/>
                </div>
            </div>
            <p className={"pt-6 pb-6"}>{title}</p>
        </div>
    )
}