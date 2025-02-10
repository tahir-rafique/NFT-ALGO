const ButtonMain = ({ text, expIcon, toggleDropdown, }) => {
    return (
        <div>
            <button
                onClick={toggleDropdown}
                className="navbtn-size  navbtn-border background-grad text-inverted px-4 py-2 cursor-pointer font-medium flex items-center">
                {text}
                <img src={expIcon} alt="" />
                
            </button>
        </div>
    )
}

export default ButtonMain