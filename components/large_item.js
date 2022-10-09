export default function LargeItem({image, description}) {
    return (
        <>
            <img src={image} className={"bg-header"}/>
            <div className={"pt-4 bg-white"}>
                {description}
            </div>
        </>
    )
}
