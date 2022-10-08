import Header from '../components/header'
import Social from "../components/social";
import Portfolio from "../components/portfolio";

export default function Home() {
    return (
        <div className={"flex flex-col h-screen"}>
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
    )
}
