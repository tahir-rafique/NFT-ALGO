
const ButtonSecondary = ({downArrow,text}) => {
    return (
        <div>
            <button className="navbtn-size border border-grd text-main navbtn-border  px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center gap-1">
                {text}
                <img src={downArrow} alt="" />
            </button>
        </div>
    )
}

export default ButtonSecondary;