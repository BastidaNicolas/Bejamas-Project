import { useEffect, useRef } from "react"

const CheckBox = ({
    name,
    title,
    value,
    action,
    filterTypes,
    setFilterTypes,
    mob,
}) => {

    const check = useRef()

    const checkIfIsChecked = (input) => {
        filterTypes.map((type) => {
            if(type.type === input.name && input.name === 'Category'){
                if(type.value.find(type => type === input.value)){
                    input.checked = true
                }else{
                    input.checked = false
                }
            }else if(type.type === input.name && input.name === 'Price range'){
                if (type.value[0] === value[0] && type.value[1] === value[1]){
                    input.checked = true
                }else{
                    input.checked = false
                }
            }
        })
    }

    const handleChecked = (input) => {
        if (input.checked) {
            setFilterTypes(filterTypes.map((type) => {
                if(type.type === input.name && input.name === 'Category'){
                    return {...type, value: [...type.value, input.value]}
                }else if(type.type === input.name && input.name === 'Price range'){
                    return {...type, value: [...value]}
                }
                return {...type}
            }))
        }else if (!input.checked){
            setFilterTypes(filterTypes.map((type) => {
                if(type.type === input.name && input.name === 'Category'){
                    return {...type, value: [...type.value.filter(value => {
                        return value !== input.value
                    })]}
                }else if(type.type === input.name && input.name === 'Price range'){
                    return {...type, value: []}
                }
                return {...type}
            }))
        }
    }

    useEffect(() => {
      checkIfIsChecked(check.current)
    }, [filterTypes])

    return (
        <div className='flex items-center mb-9 lg:mb-10' >
            <input
                ref={check}
                className='appearance-none mr-5 lg:mr-6 w-9 lg:w-5 h-9 lg:h-5 border-4 lg:border-2 border-black hover:cursor-pointer checked:bg-check bg-center bg-no-repeat bg-cover'
                type={"checkbox"}
                name={name}
                value={value}
                id={mob ? title + '-mob' : title}
                onChange={(e) => handleChecked(e.target)}
            />
            <label className='text-2xl lg:text-xl hover:cursor-pointer select-none' htmlFor={mob ? title + '-mob' : title}>{title}</label>
        </div>
    )
}

export default CheckBox