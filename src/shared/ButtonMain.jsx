const ButtonMain = ({ text, expIcon, toggleDropdown, time }) => {
    return (
        <div>
            <button
                onClick={toggleDropdown}

                className="navbtn-size  navbtn-border background-grad text-inverted px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center">
                {text}
                <img src={expIcon} alt="" />
                {time}
            </button>
        </div>
    )
}

export default ButtonMain