import LargeItem from "./large_item";

export default function Sculpture() {
    return (
        <div className={"flex flex-col overflow-y-scroll ml-20 mr-20"}>
            <p className={"text-2xl text-white mb-12 mt-20"}>Скульптура</p>
            <LargeItem image={ "/portfolio/sculpture_1.png" } description={
                <p>Hello</p>
            }/>
        </div>
    )
}
