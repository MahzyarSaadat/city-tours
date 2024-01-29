import React from 'react'
import styled from 'styled-components'
import Tour from './Tour'

const Main = ({tours , removeBtn}) => {
  return (
    <MainElement>
        <h1>our tours</h1>
        <section className='card-container'>
            {tours.map(tour => <Tour key={tour.id} {...tour} removeBtn={removeBtn}/>)}
        </section>
    </MainElement>
  )
}

export default Main

const MainElement = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 200px;


    h1{
        font-size: 3em;
        font-weight: 500;
        text-align: center;
        margin-top: 2em;
        border-bottom: 5px solid green;
    }

    .card-container{
        margin-top: 2em;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;

    }
`