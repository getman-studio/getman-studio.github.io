import {useRouter} from "next/router";

export default function Modal({isVisible, children}) {
    const router = useRouter()

    if (!isVisible) {
        return (<></>)
    }

    return (
        <div className={"relative h-screen w-screen"}>
            <a onClick={() => router.push("/", undefined, { shallow: true})} className={"absolute cursor-pointer"}>
                <div className={"h-screen w-screen bg-modal"}/>
            </a>
            <div className={"absolute top-20 left-4 right-4 md:left-60 md:right-60 bottom-12 overflow-y-scroll md:scrollbar-hide"}>
                {children}
            </div>
        </div>
    )
}