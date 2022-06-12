
const AddToCartBtn = ({
  addToCart,
  cartItems,
  twStyles,
  name,
  image,
  price,
  currency
}) => {

  const handleAddToCart = () => {
    const inCart = cartItems?.find((item) => item.name === name)

    if(inCart){
      addToCart(cartItems.map((itemsInCart) => {
        if(itemsInCart.name === name){
          return {...inCart, price: inCart.price+price, amount: inCart.amount+1 }
        }
        return itemsInCart
      }))
      return 
    }
    return addToCart(cart => [...cart, {name: name, image: image, price: price, currency: currency, amount: 1}])
  }

  return (
    <button className={`${twStyles} text-white bg-black flex justify-center`} onClick={handleAddToCart}>
      ADD TO CART
    </button>
  )
}

export default AddToCartBtn