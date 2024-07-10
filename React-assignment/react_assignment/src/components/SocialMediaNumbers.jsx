export const SocialMediaNumbers = ({
    number,
    title
}) => {
    return <div className="flex flex-col justify-center">
        <div className=" justify-center">
        <div className="flex justify-center font-bold">
                {number}K
                </div>
                <div className="flex justify-center text-gray-400 font-medium">
                    {title}
                </div>
                </div>
    </div>
}