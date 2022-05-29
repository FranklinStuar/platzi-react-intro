import React from 'react'
import "./TodoSearch.css"

function TodoSearch({searchValue,onSearchValueSearch}){
  // const [estado,setEstado] = React.useState("valor por defecto")
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