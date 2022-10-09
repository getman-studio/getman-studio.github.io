import LargeItem from "./large_item";

export default function Decoration() {
    return (
        <div className={"flex flex-col"}>
            <p className={"text-2xl text-white mb-12"}>Декорації</p>
            <LargeItem image={"/portfolio/decoration_1.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Гіпсовий портал (навколо дверей), 2012 рік, автор: Гетьман Валентин</p>
                </div>
            }/>
            <br />
            <LargeItem image={"/portfolio/decoration_2.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Фотофон для проекту Вікторії Файнблат , фотограф Вікторія Болькіна, художник Гетьман Валентин 2013 рік <a className={"text-blue"} href={"http://bolkin.kiev.ua/"}>http://bolkin.kiev.ua/</a>, <a className={"text-blue"} href={"http://faynblat.kiev.ua/"}>http://faynblat.kiev.ua/</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/decoration_3.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Портал у ресторані «Кабачок на бочок», гіпс, декоративна штукатурка, 2011 рік. Художник: Валентин і Зоріна Гетьман; замовник <a className={"text-blue"} href={"http://kabachok.com.ua/kafe"}>http://kabachok.com.ua/kafe</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/decoration_4.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Портал у ресторані «Кабачок на бочок», гіпс, декоративна штукатурка, 2011 рік. Художник: Валентин і Зоріна Гетьман; замовник <a className={"text-blue"} href={"http://kabachok.com.ua/kafe"}>http://kabachok.com.ua/kafe</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/decoration_5.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Єгипетські колони, гіпс, акрилова фарба; 2008 рік. Скульптор: Валентин і Зоріна Гетьман</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/decoration_6.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Морський пейзаж &quot;Середземномор&apos;я&quot;, гіпсова ліпнина – левкас, 2008 рік. Художник: Валентин і Зоріна Гетьман</p>
                </div>
            }/>
        </div>
    )
}
