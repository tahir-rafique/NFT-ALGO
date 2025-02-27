const NotFound = () => {
    return (
        <>
            <section className="bg-frame h-[100vh] text-center py-10 relative ">
                <div className="flex items-center justify-center">
                    <div className="text-slate-600 text-5xl sm:text-[270px]">
                        4<span className="text-slate-600  ">0</span>4
                    </div>
                </div>
                <h1 className="text-slate-600 pb-10">page not   found.....!</h1>

                <a href="/" className="text-slate-600 text-xl border-2 px-5 py-3 rounded-2xl hover:bg-main hover:text-inverted font-secondary ">Go Back HOME 😊</a>
            </section>
        </>
    )
}

export default NotFound;
