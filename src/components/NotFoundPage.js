// components/NotFoundPage.js
import React from 'react';
import {useState,useEffect} from 'react';
import icon1 from './assects/404-img/icon1.png'
import icon2 from './assects/404-img/icon2.png'
import icon3 from './assects/404-img/icon3.png'
import icon4 from './assects/404-img/icon4.png'
import icon5 from './assects/404-img/icon5.png'
import icon6 from './assects/404-img/icon6.png'
import icon7 from './assects/404-img/icon7.png'
import icon8 from './assects/404-img/icon8.png'

function NotFoundPage() {
  const [randicon , setRandIcon] = useState('')
  useEffect(()=>{
    const icons = [icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8]
    const rnd = Math.floor(Math.random() * icons.length)
    setRandIcon(icons[rnd]);
  },[]);
  return (
    <div>
      
      <h1><img src={randicon} width={250}/><br/>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
