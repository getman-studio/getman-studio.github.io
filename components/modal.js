import {useRouter} from "next/router";

export default function Modal({isVisible, children}) {
    const router = useRouter()

    if (!isVisible) {
        return (<></>)
    }

    return (
        <div className={"relative h-screen w-screen"}>
            <a onClick={() => router.push("/", undefined, { shallow: true})} className={"absolute"}>
                <div className={"h-screen w-screen bg-modal"}/>
            </a>
            <div className={"absolute top-20 left-4 right-4 md:left-20 md:right-20 bottom-12 overflow-y-scroll"}>
                {children}
            </div>
        </div>
    )
}