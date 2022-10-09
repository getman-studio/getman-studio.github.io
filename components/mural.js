import LargeItem from "./large_item";

export default function Mural() {
    return (
        <div className={"flex flex-col"}>
            <p className={"text-2xl text-white mb-12"}>Розпис</p>
            <LargeItem image={"/portfolio/mural_1.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Настінний розпис &quot;Карпати&quot;, акрил. Художник: Валентин і Зорина Гетьман</p>
                </div>
            }/>
            <br />
            <LargeItem image={"/portfolio/mural_2.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Настінний розпис «Нью-Йорк», олійні фарби, 2011рік. Художник: Валентин і Зоріна Гетьман; дизайн: Анна Ворон <a className={"text-blue"} href={"http://annavoron.com.ua/object/remont-gostinoy-studio"}>http://annavoron.com.ua/object/remont-gostinoy-studio</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_3.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис в українському стилі, акрил, полички — дерево, левкас, 2010 рік. Художник: Валентин & Зоріна Гетьман</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_4.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис стелі в марроканському стилі (кальянна кімната), акрил, 2011 рік. Художник: Валентин & Зоріна Гетьман</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_5.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис «Старовинний замок», олійний живопис, 2010 рік. Художник: Валентин & Зоріна Гетьман</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_6.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис стелі «Небо», акриловий живопис. Художник: Валентин & Зоріна Гетьман. Дизайн інтер&apos;єру: <a className={"text-blue"} href={"http://annavoron.com.ua/gallery/remont-kvartiry-na-pchilki"}>http://annavoron.com.ua/gallery/remont-kvartiry-na-pchilki</a></p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_7.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Морський пейзаж &quot;Середземномор&apos;я&quot;, олійні фарби, гіпсова ліпнина – левкас, 2008 рік</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_8.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис стелі, акрилові фарби, 2008 рік</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_9.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Настінний розпис «Сад», олійні фарби; ліпнина ручна робота – гіпс, акрил, 2009 рік</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_10.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис дитячої кімнати «Пірати на кораблі», акриловий живопис; рамки для фото – дерево, левкас, 2009 рік</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_11.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис дитячої кімнати &quot;Казковий світ&quot;, акрил; колони - гіпс; рами для фото - дерево, левкас, 2009 рік. Художник: Валентин & Зоріна Гетьман</p>
                </div>
            }/>
            <br/>
            <LargeItem image={"/portfolio/mural_12.png"} description={
                <div className={"p-4"}>
                    <p className={"text-black"}>Розпис клубу в стилі комп&apos;ютерної гри, графіті, аерографія, змішана техніка, 2009 рік. Художник: Валентин & Зоріна Гетьман, дизайн інтер&apos;єру <a className={"text-blue"} href={"http://annavoron.com.ua/gallery/remont-kompyuternogo-kluba-v-stile-igry"}>http://annavoron.com.ua/gallery/remont-kompyuternogo-kluba-v-stile-igry</a></p>
                </div>
            }/>
        </div>
    )
}
