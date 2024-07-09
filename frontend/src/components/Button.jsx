function Button({ text, fill, color, handleClick }) {
    return (
        fill ?
            <button className={`bg-${color} p-5 text-snow text-fira font-bold text-2xl w-full rounded`}
                onClick={handleClick} >
                {text}
            </button>
            :
            <button className="border-2 p-5 text-snow text-fira font-bold text-2xl w-full rounded border-white"
                onClick={handleClick} >
                {text}
            </button>
    )
}

export default Button