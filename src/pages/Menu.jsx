import React, {useState, useEffect} from 'react'
import MenuPizza from '../components/MenuPizza'

const Menu = () => {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <MenuPizza data={data}/>
    </div>
  )
}

export default Menu
