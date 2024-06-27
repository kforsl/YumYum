function MenuExtras({ dip }) {

    let dipName = dip.name.toLowerCase()
    if (dipName.includes('standard')) {
        dipName = dipName.replace('standard', 'std')
    }

    return (
        <p className="p-2 bg-slate-400 rounded">{dipName}</p>
    )
}

export default MenuExtras