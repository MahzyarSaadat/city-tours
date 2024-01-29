import React, { useEffect } from 'react'
import Loading from './components/Loading'
import Main from './components/Main'
import styled from 'styled-components'

const url = "https://course-api.com/react-tours-project"



const App = () => {
  const [loading , setLoading] = React.useState(false)
  const [tours , setTours] = React.useState([])

  const removeBtn = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])

  if(loading){
    return <main><Loading /></main>
  } 
  if(tours.length == 0){
    return (
      <MainElement>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </MainElement>
    )
  }
  return (
    
    <main>
      <Main tours={tours} removeBtn={removeBtn} />
    </main>
  )
}

export default App

const MainElement = styled.main`
    font-size: 3em;
    font-weight: 500;
    width: 100%;
    text-align: center;
    margin-top: 2em;

    .btn{

      cursor: pointer;
      background-color: green;
      padding: .8em 1em;
      font-size: 1em;
      color: #fff;
    }
`