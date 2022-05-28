import React from 'react'
import "./TodoSearch.css"
function TodoSearch(){
  const [searchValue,setSearchValue] = React.useState("")
  // const [estado,setEstado] = React.useState("valor por defecto")
  const onSearchValueSearch = (evt) => {
    console.log(evt.target.value)
    setSearchValue(evt.target.value)
  }
  return(
    <>
      <input
        className='TodoSearch' 
        placeholder='Buscar' 
        onChange={onSearchValueSearch} 
        value={searchValue}
      />
    </>
  )
}

export {TodoSearch}