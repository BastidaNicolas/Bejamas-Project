import React, { useEffect, useState, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import FeaturedCard from './components/Cards/FeaturedCard/FeaturedCard';
const PhotoGallery = React.lazy(() => import("./components/PhotoGallery/PhotoGallery"));

function App() {

  const data = {
    products: [
      {
        name: "Family Time",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/7K2SGDu.jpg",
          alt: "kid learning to ride a bike with father and mother"
        },
        bestseller: true,
        featured: false
      },
      {
        name: "This Globe",
        category: "items",
        price: 100.00,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/otWofzm.jpg",
          alt: "Guy fingering a small toy globe"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Rocking in Mumbai",
        category: "people",
        price: 246.00,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/hlNFRdB.jpg",
          alt: "couple rocking it out on a balcony looking out to a lake"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Nice Wall",
        category: "people",
        price: 73.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/IMsv7nV.jpg",
          alt: "guy walking a bike passing an urban artistick wall"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Living The Room",
        category: "items",
        price: 38.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/AZBlt4w.jpg",
          alt: "generic pintrest living room"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Inspire",
        category: "items",
        price: 42.46,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/5eT0ZJg.jpg",
          alt: "someone holding a smoothie and chearing to a motivational fraze poster"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Laying The Bed",
        category: "people",
        price: 5.80,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/UKTeUM9.jpg",
          alt: "generic pintrest bed"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Waiting Room",
        category: "items",
        price: 478.67,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/Wj7Xqn4.jpg",
          alt: "cup on top of a magazine that is siting on a couch"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Cow Town",
        category: "nature",
        price: 33333.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/jmNqEvv.jpg",
          alt: "magestic cows on a field with lots of hills"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Shy Mornings",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/OpFOnP1.jpg",
          alt: "woman on a bed covering her face with a book"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Chilling and Working",
        category: "people",
        price: 2.49,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/Euotffm.jpg",
          alt: "woman using laptop on a small sofa"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Cutting",
        category: "people",
        price: 34.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/q1TykwH.jpg",
          alt: "fitness girl cutting fruits, seems like she's enjoying it"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Lake View",
        category: "nature",
        price: 376.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/fPIhmeG.jpg",
          alt: "a hooded rascal enjoying the view of a lake"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Creative Time",
        category: "people",
        price: 83.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/etJ9ggS.jpg",
          alt: "a designer denigning, and in tumblr"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Working And Drinking",
        category: "people",
        price: 533.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/rNabSXw.jpg",
          alt: "someone taling notes, working. I don't know, could be any"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Nice Farm",
        category: "nature",
        price: 93.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/yMHWs6P.jpg",
          alt: "a nice farm field"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Just Do It",
        category: "people",
        price: 33.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/SBIHt4D.jpg",
          alt: "dude running on a street in the middle of nowhere"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Bike Wal",
        category: "items",
        price: 763.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/OPHb8t2.jpg",
          alt: "a bike infront of a white wall"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Fly Away",
        category: "people",
        price: 53.89,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/aZbpc0b.jpg",
          alt: "dude in the beach trying to fly like a seagle"
        },
        bestseller: false,
        featured: false
      },
      {
        name: "Best Cow",
        category: "nature",
        price: 1010000,
        currency: "USD",
        image: {
          src: "https://i.imgur.com/LANAaYd.jpg",
          alt: "A Highlander cow just chilling"
        },
        bestseller: false,
        featured: true,
        details: {
          dimmentions: {
            width: 1020,
            height: 1020
          },
          size: 15000,
          description:
            "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
          recommendations: [
            {
              src: "https://i.imgur.com/SBIHt4D.jpg",
              alt: "dude running on a street in the middle of nowhere"
            },
            {
              src: "https://i.imgur.com/fPIhmeG.jpg",
              alt: "a hooded rascal enjoying the view of a lake"
            },
            {
              src: "https://i.imgur.com/IMsv7nV.jpg",
              alt: "guy walking a bike passing an urban artistick wall"
            }
          ]
        }
      }
    ]
  }
  const products = data.products

  const filterData = [
    {
      category: 'Category',
      type: [
        {
          name: 'Nature',
          value: 'nature',
        },
        {
          name: 'People',
          value: 'people',
        },
        {
          name: 'Items',
          value: 'items',
        },
      ]
    },
    {
      category: 'Price range',
      type: [
        {
          name: 'Less than 100',
          value: ['<', 100],
        },
        {
          name: 'More than 100',
          value: ['>', 100],
        },
      ]
    }
  ]

  const [itemsList, setItemsList] = useState()
  const [filteredItemsList, setFilteredItemsList] = useState()
  const [filterTypes, setFilterTypes] = useState([{ type: 'Category', value: [] }, { type: 'Price range', value: []}])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)
  const [currentPageItems, setCurrentPageItems] = useState()
  const [featuredItem, setFeaturedItem] = useState()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  // TURN THIS INTO ONE STATE 
  const [sortType, setSortType] = useState('price')
  const [sortOrder, setSortOrder] = useState('decending')

  const filterFeaturedItem = (product) => {
    if (product.featured) {
      setFeaturedItem(product)
    }
  }

  //CLEAN THIS FUNCTION
  const handleFiltering = (filters) => {
    let toFilter = itemsList
    let filtered = []
    let filteredCategories = false

    const priceFilter = (filter) => {
      if(filter.value == false){
        return
      }
      if (filter.value[0] === '>') {
        filtered = [...[...filtered].filter((product) => {
          return product.price > filter.value[1]
        })]
      } else if (filter.value[0] === '<') {
        filtered = [...[...filtered].filter((product) => {
          return product.price < filter.value[1]
        })]
      } else if (!isNaN(filter.value[0])) {
        filtered = [...[...filtered].filter((product) => {
          return product.price >= filter.value[0] && product.price <= filter.value[1]
        })]
      } else {
        filtered = [...[...filtered].filter((product) => {
          return product.price === filter.value[1]
        })]
      }
    }

    filters.map((filter) => {
      switch (filter.type) {
        case 'Category':
          if (filter.value == false) {
            filtered = toFilter
            filteredCategories = false;
          } else {
            filter.value.map((filter) => {
              filtered = [...filtered, ...[...toFilter].filter((product) => {
                return product.category === filter
              })]
            })
            filteredCategories = true
          }
          break
        case 'Price range':
          if (filteredCategories) {
            priceFilter(filter)
          } else {
            filtered = toFilter
            priceFilter(filter)
          }
          break
        default:
          filtered = itemsList
          break
      }
    })
    handleSorting(filtered)
  }

  const handleSorting = (itemsList) => {
    let sorted
    if (sortType === 'price') {
      if (sortOrder === 'decending') {
        sorted = [...itemsList].sort((a, b) => b.price - a.price)
      } else {
        sorted = [...itemsList].sort((a, b) => a.price - b.price)
      }
    }
    else if (sortType === 'alphabetically') {
      if (sortOrder === 'decending') {
        sorted = [...itemsList].sort((a, b) => {
          if (a.name < b.name) return -1
          return 1
        })
      } else {
        sorted = [...itemsList].sort((a, b) => {
          if (a.name > b.name) return -1
          return 1
        })
      }
    }
    setCurrentPage(1)
    setFilteredItemsList(sorted)
  }

  const lastItemIndex = currentPage * postPerPage
  const firstItemIndex = lastItemIndex - postPerPage

  useEffect(() => {
    setItemsList(products)
    products.filter(filterFeaturedItem)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    itemsList && handleFiltering(filterTypes)
  }, [itemsList, sortType, sortOrder, filterTypes])

  useEffect(() => {
    filteredItemsList && setCurrentPageItems(filteredItemsList.slice(firstItemIndex, lastItemIndex))
  }, [filteredItemsList, currentPage])

  return (
    <div className="App max-w-7xl mx-auto" style={{ minHeight: '200vh' }}>
      <Navbar cartList={cart} clearCart={setCart} />
      <main>
        {featuredItem &&
          <FeaturedCard
            name={featuredItem.name}
            image={featuredItem.image.src}
            alt={featuredItem.image.alt}
            category={featuredItem.category}
            about={featuredItem.details.description}
            recommendations={featuredItem.details.recommendations}
            dimmentions={featuredItem.details.dimmentions}
            size={featuredItem.details.size}
            price={featuredItem.price}
            currency={featuredItem.currency}
            cartItems={cart}
            addToCart={setCart}
          />
        }
        <div className='border-b-4 w-full mb-12 lg:mb-16'></div>
        <Suspense fallback={<div>Loading...</div>}>
          {currentPageItems &&
            <PhotoGallery
              filterData={filterData}
              itemData={currentPageItems}
              cartItems={cart}
              addToCart={setCart}
              sortType={sortType}
              setSortType={setSortType}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              totalPosts={filteredItemsList.length}
              postsPerPage={postPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filterTypes={filterTypes}
              setFilterTypes={setFilterTypes}
            />
          }
        </Suspense>
      </main>
    </div>
  );
}

export default App;
