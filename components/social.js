import Image from "next/image";

export default function Social() {
    return (
        <div className={"flex flex-row w-full justify-center gap-x-2"}>
            <a href={"https://www.facebook.com/getmanstudio"}><Image src={"/social/fb.png"} width={52} height={52} alt={"Facebook"}/></a>
            <a href={"https://ru.pinterest.com/artstudioGetman/"}><Image src={"/social/pinterest.png"} width={52} height={52} alt={"Pinterest"}/></a>
            <a href={"https://www.behance.net/getmanstudio"}><Image src={"/social/behance.png"} width={52} height={52} alt={"Behance"}/></a>
            <a href={"https://instagram.com/getmanstudio/"}><Image src={"/social/instagram.png"} width={52} height={52} alt={"Instagram"}/></a>
        </div>
    )
}