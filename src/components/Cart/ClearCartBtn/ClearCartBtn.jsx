
const ClearCartBtn = ({
    setOpen,
    clearCart
}) => {

  const handleClearCart = () =>{
    setOpen(false)
    clearCart([])
  }

  return (
    <button className="w-full py-3 font-medium border-4 border-black text-center text-lg xl:text-2xl" onClick={handleClearCart}>
        CLEAR
    </button>
  )
}

export default ClearCartBtn