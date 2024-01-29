import React from 'react'
import styled from "styled-components"

const Loading = () => {
  return (
    <LoadingElement>Loading...</LoadingElement>
  )
}

export default Loading

const LoadingElement = styled.div`
    font-size: 3em;
    font-weight: 500;
    width: 100%;
    text-align: center;
    margin-top: 2em;
`