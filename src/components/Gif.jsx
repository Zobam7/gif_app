import React from 'react'
import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import GifInfo from './GifInfo'

const Gif = ({image}) => {
  
  // const route = `https://api.giphy.com/v1/gifs/${gif_id}`

  return (
    // <BrowserRouter>
    // <Link to={"/gifInfo/" + id}>
    // <img src={image} alt=""/>
    // </Link>
    // <Routes>
    // <Route path="/gifInfo/:id" component={GifInfo} />
    // </Routes>
    // </BrowserRouter>
    <img src={image} alt=""/>

  )
}

export default Gif