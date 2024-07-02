function Button({ text, fill }) {
    return (
        fill ?
            <button className="bg-coal p-5 text-snow text-fira font-bold text-2xl w-full rounded">
                {text}
            </button>
            :
            <button className="border-2 p-5 text-snow text-fira font-bold text-2xl w-full rounded border-white">
                {text}
            </button>
    )
}

export default Button