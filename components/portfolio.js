import PortfolioItem from "./portfolio_item";

export default function Portfolio() {
    return (
        <div className={"flex gap-4 pl-4 pr-4 overflow-x-scroll"}>
            <PortfolioItem
                foregroundImage={"/portfolio/Sculpture Top.png"}
                backgroundImage={"/portfolio/Sculpture Bottom.png"}
                title={"Скульптура"}
                />
            <PortfolioItem
                title={"Розпис"}
            />
            <PortfolioItem
                title={"Живопис"}
            />
            <PortfolioItem
                title={"Декорації"}
            />
            <PortfolioItem
                title={"Графіка"}
            />
            <PortfolioItem
                title={"Арт"}
            />
        </div>
    )
}