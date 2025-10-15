import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import Device from '../components/About/Device'
import Aims from '../components/About/Aims'
import Video from '../components/About/Video'

const AboutPage:React.FC = () => {
  return (
    <div>
      <AboutBanner />
      <Device />
      <Aims />
      <Video />
    </div>
  )
}

export default AboutPage
