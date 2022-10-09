export default function Modal({isVisible, children}) {
    if (!isVisible) {
        return (<></>)
    }

    return (
        <a href={"/"}>
            <div className={"flex flex-col h-screen w-screen bg-modal"}>
                {children}
            </div>
        </a>
    )
}