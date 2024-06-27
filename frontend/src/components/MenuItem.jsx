import MenuIngredient from './MenuIngredient';

function MenuItem({ item }) {
    return (
        <li className="p-4 border-b border-dotted">
            <section className="flex flex-row justify-between mb-2 text-xl font-bold">
                <h2 className="">{item.name}</h2>
                <h3 className="">{item.price}SEK</h3>
            </section>
            <section className="flex flex-row gap-1 text-sm font-medium">
                {
                    item.ingredients.map((ingredient, index) => {
                        return (
                            <MenuIngredient key={index} ingredient={ingredient} />
                        )
                    })
                }
            </section>
        </li>
    )
}

export default MenuItem