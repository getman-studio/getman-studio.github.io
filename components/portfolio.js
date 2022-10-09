import PortfolioItem from "./portfolio_item";
import {useRouter} from "next/router";

export default function Portfolio() {

    const router = useRouter()

    return (
        <div className={"flex flex-col md:flex-row gap-1 md:gap-8 pl-4 pr-4 md: overflow-x-scroll"}>
            <a onClick={() => router.push('?page=sculpture', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/sculpture_top.png"}
                    backgroundImage={"/portfolio/sculpture_bottom.png"}
                    title={"Скульптура"}
                />
            </a>
            <a onClick={() => router.push('?page=mural', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/mural_top.png"}
                    backgroundImage={"/portfolio/mural_bottom.png"}
                    title={"Розпис"}
                />
            </a>
            <a onClick={() => router.push('?page=painting', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/painting_top.png"}
                    backgroundImage={"/portfolio/painting_bottom.png"}
                    title={"Живопис"}
                />
            </a>
            <a onClick={() => router.push('?page=decoration', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/decoration_top.png"}
                    backgroundImage={"/portfolio/decoration_bottom.png"}
                    title={"Декорації"}
                />
            </a>
            <a onClick={() => router.push('?page=graphic', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/graphic_top.png"}
                    backgroundImage={"/portfolio/graphic_bottom.png"}
                    title={"Графіка"}
                />
            </a>
            <a onClick={() => router.push('?page=art', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/art_top.png"}
                    backgroundImage={"/portfolio/art_bottom.png"}
                    title={"Арт"}
                />
            </a>
        </div>
    )
}