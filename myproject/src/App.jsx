import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Header from './Header'
import avatar from './avatar.png'
import Counter from './counter'
import Myref from './Myref'

function Logo(props){
  const userPic = <img src={avatar}/>;
  return userPic;
}

function App(props) {

  return (
    <>
     {/* <div id='tushar'>My Name is tushar</div> */}
     <h1>{props.title}</h1>
     {/* <Name /> */}
     <Header name="Anna" color="purple"/>
     <Logo/>
     <Counter/>
     <Myref/>
    </>
  )
}

export default App


