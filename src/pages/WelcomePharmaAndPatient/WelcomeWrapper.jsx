import React from 'react'
import WelcomePatient from './WelcomePatient'
import WelcomePharma from './WelcomePharma'

const WelcomeWrapper = (props) => {
  if (props.user === 'patient') {
    return <WelcomePatient/>
  }
  
  if (props.user === 'pharma') {
    return <WelcomePharma/>
  }
}

export default WelcomeWrapper