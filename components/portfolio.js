import PortfolioItem from "./portfolio_item";

export default function Portfolio() {
    return (
        <div className={"flex flex-col md:flex-row gap-1 md:gap-8 pl-4 pr-4 md: overflow-x-scroll"}>
            <a href={"/sculpture"}>
                <PortfolioItem
                    foregroundImage={"/portfolio/Sculpture Top.png"}
                    backgroundImage={"/portfolio/Sculpture Bottom.png"}
                    title={"Скульптура"}
                />
            </a>
            <a href={"/mural"}>
                <PortfolioItem
                    title={"Розпис"}
                />
            </a>
            <a href={"/painting"}>
                <PortfolioItem
                    title={"Живопис"}
                />
            </a>
            <a href={"/decoration"}>
                <PortfolioItem
                    title={"Декорації"}
                />
            </a>
            <a href={"/graphic"}>
                <PortfolioItem
                    title={"Графіка"}
                />
            </a>
            <a href={"/art"}>
                <PortfolioItem
                    title={"Арт"}
                />
            </a>
        </div>
    )
}