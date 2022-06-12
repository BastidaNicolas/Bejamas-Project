import React from 'react'
import ProductCard from '../Cards/ProductCard/ProductCard'
import FilterType from '../Filter/FilterType'
import Pagination from '../Pagination/Pagination'
import GalleryHeader from './GalleryHeader'

const PhotoGallery = ({
  filterData,
  itemData,
  cartItems,
  addToCart,
  sortType,
  setSortType,
  sortOrder,
  setSortOrder,
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
  filterTypes,
  setFilterTypes,
}) => {
  return (
    <div className='px-3.5 xl:px-0 w-full'>
      <GalleryHeader
        filterData={filterData}
        sortType={sortType}
        setSortType={setSortType}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
      />
      <div className='relative flex w-full'>
        <div className='hidden lg:block'>
          <FilterType 
            filterData={filterData} 
            filterTypes={filterTypes}
            setFilterTypes={setFilterTypes}
          />
        </div>
        <div className='w-full' >
          <div className='grid lg:gap-x-12 lg:gap-y-12 gap-y-8 md:gap-x-3.5 md:grid-cols-2 w-full mb-20 md:mb-24'>
            {itemData.map((product, index) => (
              <ProductCard
                key={product.name + index}
                title={product.name}
                price={product.price}
                currency={product.currency}
                category={product.category}
                image={product.image.src}
                alt={product.image.alt}
                bestSeller={product.bestseller}
                cartItems={cartItems}
                addToCart={addToCart}
              />
            ))}
          </div>
          <Pagination
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

    </div>
  )
}

export default PhotoGallery