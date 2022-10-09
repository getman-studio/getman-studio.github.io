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
                    title={"Розпис"}
                />
            </a>
            <a onClick={() => router.push('?page=painting', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    title={"Живопис"}
                />
            </a>
            <a onClick={() => router.push('?page=decoration', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    title={"Декорації"}
                />
            </a>
            <a onClick={() => router.push('?page=graphic', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    title={"Графіка"}
                />
            </a>
            <a onClick={() => router.push('?page=art', undefined, {shallow: true})} className={"cursor-pointer"}>
                <PortfolioItem
                    title={"Арт"}
                />
            </a>
        </div>
    )
}