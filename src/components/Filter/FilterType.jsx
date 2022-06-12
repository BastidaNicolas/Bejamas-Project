import CheckBox from "./CheckBox"

const FilterType = ({ 
  filterData, 
  filterTypes,
  setFilterTypes,
  mob 
}) => {
  return (
    <div className='block w-full lg:w-64 lg:mr-12'>
      {filterData.map((filter, index) => (
        <div className={`${index < filterData.length-1 && 'border-b'} mb-8`} key={index} >
          <span className='block font-bold text-3xl lg:text-xl mb-10 lg:mb-11' >{filter.category}</span>
          {mob ?
            filter.type.map(type => (
              <CheckBox 
                key={type.name + '-mob'}
                name={filter.category}
                title={type.name}
                value={type.value}
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                action
                mob
              />
            ))
            :
            filter.type.map(type => (
              <CheckBox 
                key={type.name}
                name={filter.category}
                title={type.name}
                value={type.value}
                filterTypes={filterTypes}
                setFilterTypes={setFilterTypes}
                action
              />
            ))
          }
        </div>
      ))}
    </div>
  )
}

export default FilterType