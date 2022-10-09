export default function Modal({isVisible, children}) {
    if (!isVisible) {
        return (<></>)
    }

    return (
        <div className={"relative h-screen w-screen"}>
            <a href={"/"} className={"absolute"}>
                <div className={"h-screen w-screen bg-modal"}/>
            </a>
            <div className={"absolute top-20 left-20 right-20 bottom-12 overflow-y-scroll"}>
                {children}
            </div>
        </div>
    )
}