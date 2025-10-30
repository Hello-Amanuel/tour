import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ExperiencesSection from './components/ExperiencesSection'
import CitiesSection from './components/CitiesSection'
import HotelsSection from './components/HotelsSection'
import CarRentalsSection from './components/CarRentalsSection'
import TripInspirationSection from './components/TripInspirationSection'
import TravelTipsSection from './components/TravelTipsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <CitiesSection />
        <HotelsSection />
        <CarRentalsSection />
        <TripInspirationSection />
        <TravelTipsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
