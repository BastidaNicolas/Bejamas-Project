import { useEffect, useState } from "react"
import { ImCross } from "react-icons/im";
import CartCard from "../../Cards/CartCard/CartCard"
import ClearCartBtn from "../ClearCartBtn/ClearCartBtn"

const CartMenu = ({
    open,
    setOpen,
    cartList,
    setCartList,
    clearCart
}) => {

    const getCartAmount = () => {
        let qty = 0
        cartList?.map((item) => {
            qty += item.amount
        })
        return qty
    }

    
    return (
        <>
            <div className={`absolute -right-2 -bottom-3 xl:-right-2 xl:-bottom-4 bg-black h-4 w-4 xl:h-5 xl:w-5`} >
                <div className={`relative h-full w-full`}>
                    <span className="absolute inset-0 flex justify-center items-center font-bold text-xs xl:text-lg text-white" >{getCartAmount()}</span>
                </div>
            </div>
            <div className={`z-50 box-border ${open ? 'flex' : 'hidden'} flex-col items-end bg-white absolute top-14 xl:top-20 -right-4 xl:right-0 max-w-xs md:max-w-md w-screen border-4 py-2.5 px-2 md:py-5 md:px-6`}>
                <button className="mb-7" onClick={() => setOpen(false)}><ImCross /></button>
                <div className="border-b w-full mb-4 xl:mb-6 max-h-96 overflow-y-auto ">
                    {cartList?.map((item, i) => (
                        <CartCard
                            key={i}
                            title={item.name}
                            value={item.price}
                            image={item.image}
                            currency1={item.currency}
                        />
                    ))}
                </div>
                <ClearCartBtn setOpen={setOpen} clearCart={clearCart} />
            </div>
        </>
    )
}

export default CartMenu