import Header from '../components/header'
import Social from "../components/social";
import Portfolio from "../components/portfolio";
import Modal from "../components/modal";
import Sculpture from "../components/sculpture";
import {useEffect, useState} from "react";

export default function Home() {

    const [modal, setModal] = useState(null)

    useEffect(() => {
        switch (window.location.pathname) {
            case "/sculpture":
                setModal(<Sculpture />)
                break;
        }
    }, [])

    return (
        <div className={"relative"}>
            <div className={"absolute flex flex-col h-screen w-screen"}>
                <div>
                    <Header/>
                </div>
                <div className={"flex-1 flex items-center justify-center place-items-center mt-2 mb-2"}>
                    <Portfolio/>
                </div>
                <div className={"mb-2"}>
                    <Social/>
                </div>
            </div>
            <div className={"absolute"}>
                <Modal isVisible={modal != null}>x
                    {modal}
                </Modal>
            </div>
        </div>
    )
}
