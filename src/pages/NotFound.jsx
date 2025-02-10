import { MdError } from "react-icons/md";
const NotFound = () => {
    return (
        <div className="bg-main w-full h-screen text-center py-20">
            <div className="flex items-center justify-center">
                <div className="text-inverted text-[300px]">404</div>
                <MdError className="text-[300px] text-inverted" />
            </div>
            <h1 className="text-white">page not found.....!</h1>
        </div>
    )
}

export default NotFound