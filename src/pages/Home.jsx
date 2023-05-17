import React from 'react'
import Homepic from '../components/Homepic'
import '../styles/homepic.css'

export default function Home() {
  return (
    <><Homepic />
    <div>
      <h1 className='center-header'>Pets available for adoption</h1>
      <div className="image-container">
        <div class="image">
          <img src="/visuals/animal1.jpg" alt="an1"/>
          <div class="text">Lolo</div>
        </div>
        <div class="image">
          <img src="/visuals/animal2.jpg" alt="an2"/>
          <div class="text">Mickey</div>
        </div>
        <div class="image">
          <img src="/visuals/animal3.jpg" alt="an3"/>
          <div class="text">Arthur</div>
        </div>
        <div class="image">
          <img src="/visuals/animal4.jpg" alt="an4"/>
          <div class="text">Rudi</div>
        </div>
      </div>
      

      <h1 className='center-header'>The benefits of adopting a pet</h1>
      <div className='usual-paragraph'>Adopting a pet can bring numerous benefits to your life. Not only do pets provide unconditional love and companionship, but they can also help reduce stress, anxiety, and depression. Adopting a pet can also improve your physical health by encouraging you to exercise more and by lowering blood pressure and cholesterol levels. Additionally, adopting a pet from a shelter can save a life and help reduce pet overpopulation. By adopting a pet, you not only gain a loyal friend, but you also contribute to a more compassionate and humane society.</div>
    </div></>
  )
}
