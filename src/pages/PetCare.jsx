import React from 'react'
import '../styles/petcare.css'

export default function PetCare() {
  return (
    <div>
      <h2 style={{textAlign: 'center', color: 'purple', paddingLeft: 200, paddingRight: 200}}>We understand that pets are an important part of your life, and we want to help you keep them happy, healthy, and well-cared for. As such, here are some
        tips on pet care:
      </h2>
      <div className="pet-care-container">
        <div className="pet-care-text">
          <p>Basic Pet Care:</p>
          <p>It's essential to provide proper care for your pet to ensure their health and happiness. This includes feeding them a healthy and balanced diet, grooming them regularly to maintain their coat and prevent skin issues, and providing plenty of opportunities for exercise and play.</p>
        </div>
        <div className="pet-care-image">
          <img src="/visuals/pet1.jpg" alt="pet1" />
        </div>
      </div>

      <div className="pet-care-container">
        <div className="pet-care-image">
          <img src="/visuals/pet2.jpg" alt="pet2" />
        </div>
        <div className="pet-care-text">
          <p style={{paddingLeft: 20, textAlign: 'right'}}>Health and Wellness:</p>
          <p style={{paddingLeft: 20, textAlign: 'right'}}>Preventing health issues in pets is crucial, and regular checkups with a veterinarian are essential to keeping your pet healthy. We recommend vaccinating your pets and keeping them up-to-date with routine preventative care such as flea and tick prevention. It's also important to be aware of common health issues such as dental problems, obesity, and allergies and take steps to prevent them.</p>
        </div>
      </div>

      <div className="pet-care-container">
        <div className="pet-care-text">
          <p>Training and Behavior:</p>
          <p>Training your pets is essential to ensure they are well-behaved and happy. It's important to establish a routine and clear expectations for your pets. Addressing behavior issues such as separation anxiety, aggression, and destructive behavior can help maintain a happy and peaceful home.</p>
        </div>
        <div className="pet-care-image">
          <img src="/visuals/pet3.jpg" alt="pet3" />
        </div>
      </div>

      <div className="pet-care-container">
        <div className="pet-care-image">
          <img src="/visuals/pet4.jpg" alt="pet4" />
        </div>
        <div className="pet-care-text">
          <p style={{paddingLeft: 20, textAlign: 'right'}}>Choosing the Right Pet:</p>
          <p style={{paddingLeft: 20, textAlign: 'right'}}>It's essential to choose the right pet based on your lifestyle and living arrangements. Consider factors such as size, breed, energy level, and personality to ensure a good match.</p>
        </div>
      </div>
    </div>
  )
}
