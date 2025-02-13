import { MdError } from "react-icons/md";


const NotFound = () => {
    return (
        <div className="bg-frame w-full h-screen text-center  ">
            <div className="flex items-center justify-center">
                <div className="text-main text-[300px]">404</div>
                <MdError className="text-[300px] text-main" />
            </div>
            <h1 className="text-main pb-10">page not found.....!</h1>

            <a href="/" className="text-main text-2xl border-2 px-5 py-3 rounded-2xl hover:bg-main hover:text-inverted ">Go Back...! </a>



        </div>
    )
}

export default NotFound