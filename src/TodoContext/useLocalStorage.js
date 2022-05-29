import React from 'react';


//Create new hook fot localstorage
function useLocalStorage(itemName,initialValue){

  // Se simula los estados de carga de la web
  const[loading, setLoading] = React.useState(true)
  const[error, setError] = React.useState(false)
  const [item,setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    setTimeout(() => { // nos permite retrasar el código para simular que la web está cargando desde internet
      try { // conveniente para llamadas de API y verificar si funciona correctamente o algo pasó
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
      
        if(localStorageItem){
          //transform to object
          parsedItem = JSON.parse(localStorageItem)
        }
        else{
          localStorage.setItem(itemName,JSON.stringify(initialValue))
          parsedItem= JSON.parse(localStorage.getItem(itemName))
        }
  
        setItem(parsedItem)
        setLoading(false)
        
      } catch (error) {
        setError(error)
      }
    }, 1500);
  })



  const saveItem = (newItem) => {
    try {
      const itemTemp = JSON.stringify(newItem)
      localStorage.setItem(itemName,itemTemp)
      setItem(newItem) // reder with new information
      
    } catch (error) {
      setError(error)
    }
  }

  // Si se están enviando solo dos estados, se puede usar array, 3 estados o más usar llaves
  return{
    item,
    saveItem,
    loading,
    error
  }
 
}

export {useLocalStorage}