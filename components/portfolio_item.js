import Image from "next/image";

export default function PortfolioItem({foregroundImage, backgroundImage, title}) {
    return (
        <div>
            <div className={"relative"}>
                <div className={"absolute translate-x-4 translate-y-4 w-80 h-80"}>
                    <div className={"relative"}>
                        <img src={backgroundImage} className={"absolute opacity-30"}/>
                        <div className={"bg-header w-80 h-80"} />
                    </div>
                </div>

                <div className={"relative w-80 h-80 shadow"}>
                    <img src={foregroundImage} />
                </div>
            </div>
            <p className={"pt-6 pb-6"}>{title}</p>
        </div>
    )
}