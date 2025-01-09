import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About us',
  keywords: 'about, us',
}

const AboutPage = () => {
  return (
    <div>
        <p>AboutPage</p>
    </div>
  )
}

export default AboutPage