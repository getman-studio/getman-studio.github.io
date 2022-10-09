import LargeItem from "./large_item";

export default function Sculpture() {
    return (
        <div className={"flex flex-col"}>
            <p className={"text-2xl text-white mb-12"}>Скульптура</p>
            <LargeItem image={"/portfolio/sculpture_1.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Скульптура з дерева &quot;Родина&quot;</p>
                    <br />
                    <a className={"text-blue"} href={"https://www.facebook.com/getmanstudio/photos/a.962635990474690/2984543931617209/?type=3&theater"}>https://www.facebook.com/getmanstudio/photos/a.962635990474690/2984543931617209/?type=3&theater</a>
                </div>
            }/>
            <br/>
        </div>
    )
}
