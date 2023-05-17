import React from 'react'
import '../styles/homepic.css'

export default function Homepic() {
  return (
    <div className='container'>
      <img src="/visuals/home_pic.jpg"  alt='dogs' style={{width: '100%', height: '20rem'}}/>
      <div className='centered'>Find your new best friend!</div>
    </div>
  )
}
