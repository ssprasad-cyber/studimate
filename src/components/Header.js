import React from 'react'
import SMicon from './assects/studimate-icon.png'

function Header() {
  return (
    <div className=''>
        <div className='leftHead'>
            <img src={SMicon} width={200} alt='STUDIMATE' className='mx-auto'/>
        </div>
        <div className='rightHead'>
            <div>
                <a>ab</a>
                <a>bc</a>
                <a>cd</a>
                <a>de</a>
                <a>feo</a>
            </div>
        </div>
    </div>
  )
}
export default Header;
