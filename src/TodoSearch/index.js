import React from 'react'
import "./TodoSearch.css"

function TodoSearch({searchValue,setSearchValue}){
  // const [estado,setEstado] = React.useState("valor por defecto")
  const onSearchValueSearch = (evt) => {
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