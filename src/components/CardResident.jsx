import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({url}) => {

  //la url es un endpoint

  const [resident, setresident] = useState()

  useEffect(() => {
    axios.get(url)
        .then(res => setresident(res.data))
        .catch(err => console.log(err))
  
    
  }, [])
  
  return (
    <article>Componet 2
        <header>
            <img src={resident?.image} alt="" />
            <div>
                <div className='circule'></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <ul>
                <li>
                    <span>Species: </span>{resident?.species}
                </li>
                <li>
                    <span>Origin: </span>{resident?.origin.name}
                </li>
                <li>
                    <span>Episodes where appear: </span>{resident?.episode.length}
                </li>
            </ul>
        </section>

    </article>
  )
}

export default CardResident