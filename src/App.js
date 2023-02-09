import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatChatGPT3 } from './containers'
import { CTA, Brand, NavBar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatChatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
