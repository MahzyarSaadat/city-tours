import React from 'react'
import styled from 'styled-components'

const Tour = ({id , image , info , name , price , removeBtn}) => {
  const [readMore , setreadMore] = React.useState(false)
  return (
    <TourCard>
      <div className='img-container'>
        <img src={image} alt={`${name}`} />
      </div>
      <div className='card-info'>
        <p className='price-tag'>${price}</p>
        <h4>{name}</h4>
        <p className='info-paragraph'>
          {readMore ? info : `${info.substring(0 , 200)}...`}
        </p>
        <button onClick={() => setreadMore(!readMore)} className='show-btn'>{readMore ? "show more..." : "show less..."}</button>
        <button onClick={() => removeBtn(id)} className='remove-btn'>Not Interested</button>
      </div>
    </TourCard>
  )
}

export default Tour

const TourCard = styled.article`
  position: relative;
  width: 360px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h4{
    margin: 20px 0;
    font-size: 1.75em;
    font-weight: 400;
    text-align: center;
  }

  .img-container{
    width: 100%;
    height: 60% !important;
  }

  img{
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .price-tag{
    position: absolute;
    top: 0;
    right: 0;
    background-color: green;
    font-size: 1.125em;
    font-weight: 300;
    color: #fff;
    padding: .8em 1em;
  }

  .card-info{
    padding: 1em;
  }

  .remove-btn{
    cursor: pointer;
    width: 100%;
    margin: 20px auto;
    background-color: #fff;
    color: #000;
    font-size: 1.125em;
    font-weight: 500px;
    padding: .8em 1em;
    transition: all .4s;
  }

  .remove-btn:hover{
    background-color: #1f1f1f;
    color: #fff;
  }

  .info-paragraph{
    display: inline;
  }

  .show-btn{
    cursor: pointer;
    display: inline-block;
    padding: .8em 1em;
    background:none;
    border: none;
    color: green;
  }

`