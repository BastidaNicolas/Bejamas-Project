import { BsArrowDownUp } from "react-icons/bs";

const SortingOption = ({sortType, setSortType, sortOrder, setSortOrder}) => {

    const handleSortingOrder = () => {
        if(sortOrder === 'ascending'){
            setSortOrder('decending')
            return
        }
        setSortOrder('ascending')
    }

    const handleSortingType = (e) => {
        if(sortType === e.target.value){
            return
        }
        setSortType(e.target.value)
    }

    return (
        <div className="hidden w-full lg:w-fit lg:flex items-center">
            <BsArrowDownUp className="block" />
            <span className="block text-xl ml-1.5 mr-3.5 text-slate-700" >Sort By</span>
            <select 
                className="appearance-none mr-3 hover:cursor-pointer focus-visible:outline-none bg-white text-xl p-0 relative bg-none" 
                name="" 
                id=""
                onChange={handleSortingType}
            >
                <option className="p-0 absolute" value="price">Price</option>
                <option className="p-0 absolute" value="alphabetically">Name</option>
            </select>
            <button aria-label="select ascending or decending" onClick={handleSortingOrder}>
                <svg className={`${sortOrder === 'ascending' && 'rotate-180' }`} width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L10 10L18 2" stroke="black" stroke-width="3" />
                </svg>
            </button>
        </div>
    )
}

export default SortingOption