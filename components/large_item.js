export default function LargeItem({image, description}) {
    return (
        <>
            <img src={image} className={"bg-header"}/>
            <div className={"mt-4"}>
                {description}
            </div>
        </>
    )
}
