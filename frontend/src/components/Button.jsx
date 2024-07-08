function Button({ text, fill, color }) {
    return (
        fill ?
            <button className={`bg-${color} p-5 text-snow text-fira font-bold text-2xl w-full rounded`}>
                {text}
            </button>
            :
            <button className="border-2 p-5 text-snow text-fira font-bold text-2xl w-full rounded border-white">
                {text}
            </button>
    )
}

export default Button