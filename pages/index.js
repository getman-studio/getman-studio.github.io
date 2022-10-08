import Header from '../components/header'
import Social from "../components/social";

export default function Home() {
    return (
        <div className={"flex flex-col w-full h-full"}>
            <Header/>

                <Social/>
        </div>
    )
}
