import React from 'react'
import "./TodoSearch.css"
import {TodoContext} from "./../TodoContext"

function TodoSearch(){
  // const [estado,setEstado] = React.useState("valor por defecto")
  const {searchValue,onSearchValueSearch} = React.useContext(TodoContext)
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