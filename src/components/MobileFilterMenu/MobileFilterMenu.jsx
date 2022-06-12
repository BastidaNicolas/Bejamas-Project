import Button from "../Button/Button"
import FilterType from "../Filter/FilterType"
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";

const MobileFilterMenu = ({
  open, 
  setOpen, 
  filterData,
  filterTypes,
  setFilterTypes,
}) => {

  const [tempFilterTypes, setTempFilterTypes] = useState(filterTypes)


  const handleClear = () => {
    setTempFilterTypes([{ type: 'Category', value: [] }, { type: 'Price range', value: []}])
    setFilterTypes([{ type: 'Category', value: [] }, { type: 'Price range', value: []}])
    setOpen(false)
  }
  const handleSave = () => {
    setFilterTypes(tempFilterTypes)
    setOpen(false)
  }

  const handleClose = () => {
    setTempFilterTypes(filterTypes)
    setOpen(false)
  }

  useEffect(() => {
    setTempFilterTypes(filterTypes)
  }, [filterTypes])
  

  return (
    <>
        <div className={`fixed bottom-0 z-40 bg-black/20 -translate-x-3.5 h-full w-full ${!open && 'hidden' }`}></div>
        <div 
          className={`h-5/6 lg:hidden bg-white w-full fixed bottom-0 z-40 duration-200 pt-5 pb-24 px-9 -translate-x-3.5 ${!open && 'translate-y-full' } flex`}
        >
          <div className="grow overflow-y-auto">
            <FilterType
              filterData={filterData}
              filterTypes={tempFilterTypes}
              setFilterTypes={setTempFilterTypes}
              mob
            />
          </div>
          <button className="h-fit text-lg mt-2 mr-0.5 ml-10" aria-label="close filter menu" onClick={handleClose}>
            <ImCross className="block"/>
          </button>
        </div>
        <div 
          className={`lg:hidden border-t-4 bg-white w-full fixed bottom-0 z-50 -translate-x-3.5 ${!open && 'translate-y-full' } flex justify-evenly py-6`}
        >
            <Button 
              text={'clear'} 
              action={handleClear}
              colorStyle={'border-black border-2 '} 
            />
            <Button 
              text={'save'} 
              action={handleSave}
              colorStyle={'border-black border-2 text-white bg-black'} 
            />
        </div>
    </>
  )
}

export default MobileFilterMenu