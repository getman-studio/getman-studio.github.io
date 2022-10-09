import LargeItem from "./large_item";

export default function Art() {
    return (
        <div className={"flex flex-col"}>
            <p className={"text-2xl text-white mb-12"}>Арт</p>
            <LargeItem image={"/portfolio/art_1.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Арт – корпоратив для компанії «Горні машини», 2013 рік, замовник: <a className={"text-blue"} href={"http://mainstream.ua/en/"}>http://mainstream.ua/en/</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/art_2.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Арт – корпоратив для компанії Mainstream, 2009 рік, замовник: <a className={"text-blue"} href={"http://mainstream.ua/en/"}>http://mainstream.ua/en/</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/art_3.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Колективне малювання картини на весіллі (весільний подарунок), полотно, олія, 2015 рік</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/art_4.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Колективне малювання картини на весіллі (весільний подарунок), полотно, олія, 2014 рік</p>
                </div>
            }/>
            <br/>
        </div>
    )
}
