const CartCard = ({
    title,
    value,
    image,
    currency1
}) => {

    return (
        <div className="mb-4 xl:mb-6 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="md:text-xl font-bold mb-2	">
                    {title}
                </span>
                <span className="md:text-3xl font-normal text-slate-600">
                    {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: 'USD',
                        maximumFractionDigits: 2,
                        roundingIncrement: 5
                    }).format(value)}
                </span>
            </div>
            <div className="h-16 md:h-20 w-28 md:w-36 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}>
            </div>
        </div>
    )
}

export default CartCard