function MenuExtras({ dip }) {

    let dipName = dip.name.toLowerCase()
    if (dipName.includes('standard')) {
        dipName = dipName.replace('standard', 'std')
    }

    return (
        <p className="py-2 px-3 bg-gray-light rounded text-sm">{dipName}</p>
    )
}

export default MenuExtras