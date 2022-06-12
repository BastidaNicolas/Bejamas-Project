import React from 'react'
import AddToCartBtn from '../../Cart/AddToCartBtn/AddToCartBtn'

const FeaturedCard = ({
    name,
    image,
    alt,
    category,
    about,
    recommendations,
    dimmentions,
    size,
    price,
    currency,
    cartItems,
    addToCart
}) => {

    function formatBytes(bytes, decimals) {
        if (bytes == 0) return '0 bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }


    return (
        <div className='w-full pt-8 lg:pt-14 px-3.5 xl:px-0 mb-12 md:mb-16'>
            <div className='flex items-center justify-between mb-9 lg:mb-7'>
                <h2 className='font-bold text-3xl capitalize'>{name}</h2>
                <AddToCartBtn
                    twStyles='font-medium text-2xl py-2 px-10 hidden lg:block'
                    cartItems={cartItems}
                    addToCart={addToCart}
                    name={name}
                    image={image}
                    price={price}
                    currency={currency}
                />
            </div>
            <div
                className='w-full min-h-small md:min-h-big bg-center bg-no-repeat bg-cover relative overflow-hidden mb-7 lg:mb-11'
            >
                <img
                    loading='lazy'
                    fetchpriority="high"
                    className="block absolute object-center object-cover align-middle h-full w-full"
                    src={image} alt={alt}
                />
                <div className='absolute bottom-0 left-0 bg-white font-bold py-4 lg:py-5 px-14 lg:px-16 text-base lg:text-xl'>
                    Photo of the day
                </div>
            </div>
            <AddToCartBtn
                twStyles='mb-7 font-medium w-full lg:hidden text-2xl py-3'
                cartItems={cartItems}
                addToCart={addToCart}
                name={name}
                image={image}
                price={price}
                currency={currency}
            />
            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='max-w-2xl mb-7 md:mb-0'>
                    <h2 className='font-bold text-xl mb-2 capitalize'>
                        About {name}
                    </h2>
                    <h3 className='font-bold text-xl mb-3 text-slate-600 capitalize'>
                        {category}
                    </h3>
                    <p
                        className='text-lg text-slate-600 font-normal'
                    >{about}</p>
                </div>
                <div className='flex flex-col md:items-end md:text-right'>
                    <div className='mb-10 lg:mb-12' >
                        <h4 className='font-bold text-xl mb-2'>People also buy</h4>
                        <div className='flex md:justify-end'>
                            {recommendations.map(recomended => (
                                <div
                                    key={recomended.alt}
                                    className='relative overflow-hidden w-24 h-32 md:w-28 md:h-36 bg-center bg-no-repeat bg-cover mr-6 md:mr-0 ml-0 md:ml-7'
                                >
                                    <img
                                        loading='lazy'
                                        className="block absolute object-center object-cover align-middle h-full w-full"
                                        src={recomended.src} alt={recomended.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold text-xl mb-2'>Details</h5>
                        <span className='block text-slate-600 mb-2' >Size: {dimmentions.width} x {dimmentions.height} pixel</span>
                        {/* <span className='block text-slate-600' >Size: {new Intl.NumberFormat('en-US', {style: 'unit', unit: 'megabite'}).format(size)} mb</span> */}
                        <span className='block text-slate-600' >Size: {formatBytes(size, 0)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard