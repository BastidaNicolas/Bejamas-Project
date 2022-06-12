import AddToCartBtn from "../../Cart/AddToCartBtn/AddToCartBtn"

const ProductCard = ({
  title,
  price,
  currency,
  category,
  image,
  alt,
  bestSeller,
  cartItems,
  addToCart
}) => {
  return (
    <div className="w-full">
      <div className="group relative h-128 w-full overflow-hidden mb-5 md:mb-2 last:bg-red">
        {bestSeller &&
          <div className="absolute z-10 bg-white px-8 py-1 text-xl">
            Best Seller
          </div>
        }
        <img
          loading="lazy"
          className="block absolute object-center object-cover align-middle h-full w-full"
          src={image} alt={alt}
        />
        <div className="absolute bottom-0 invisible group-hover:visible w-full">
          <AddToCartBtn
            twStyles={'w-full py-3'}
            cartItems={cartItems}
            addToCart={addToCart}
            name={title}
            image={image}
            price={price}
            currency={currency}
          />
        </div>
      </div>
      <span className="block font-bold text-xl text-slate-700 mb-2 capitalize" >{category}</span>
      <h2 className="font-bold text-3xl mb-2 capitalize" >{title}</h2>
      <span className="block text-3xl text-slate-700" >
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: currency,
          maximumFractionDigits: 2,
          roundingIncrement: 5
        }).format(price)}
      </span>

    </div>
  )
}

export default ProductCard