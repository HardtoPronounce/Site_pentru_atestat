import React from 'react'
import '../styles/about.css'

export default function About() {
  return (
    <>
    <div className='about-stuff'>
      <h1 className='about-header'>About Us</h1>
      <p>Welcome to our pet adoption service based in Romania! Our mission is to help pets find loving and caring homes, while also promoting responsible pet ownership in our community.</p>
      <p>Our organization was founded in 2010 by a group of passionate animal lovers who saw a need for a better system for pet adoption in Romania. Since then, we have worked tirelessly to provide a safe and nurturing environment for pets in need and to educate our community on the importance of pet adoption and proper pet care.</p>
      <p>We believe that every pet deserves a loving home, regardless of their breed or background. That's why we work with local shelters and rescue groups to help connect pets with their forever families. Whether you're looking for a furry friend to share your life with, or simply want to support our cause, we invite you to explore our website and learn more about what we do.</p>
      <p>At our adoption center, you'll find a variety of pets waiting to be adopted, from playful puppies and kittens to loving adult dogs and cats. Our experienced staff and volunteers are dedicated to helping you find the perfect pet for your family, and will provide you with all the resources you need to ensure a successful adoption.</p>
      <p>Thank you for considering pet adoption and for supporting our organization. Together, we can make a difference in the lives of pets in Romania and beyond.</p>

      <div className='about-image'>
        <img src="/visuals/png-transparent-romania-country-map.png" alt = 'romania' />
      </div>
      <p>We offer our services in five counties in the Oltenia region.</p>
    </div>
    </>
  )
}
