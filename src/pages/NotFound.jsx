import { MdError } from "react-icons/md";
const NotFound = () => {
    return (
        <>
            <section className="bg-frame  h-[100vh] text-center py-10 ">
                <div className="flex items-center justify-center">
                    <div className="text-main text-5xl sm:text-[270px]">
                        404
                    </div>
                    <MdError className="text-5xl sm:text-[200px] text-main" />
                </div>
                <h1 className="text-main pb-10">page not found.....!</h1>

                <a href="/" className="text-main text-2xl border-2 px-5 py-3 rounded-2xl hover:bg-main hover:text-inverted ">Go Back...! </a>
            </section>
        </>
    )
}

export default NotFound;
