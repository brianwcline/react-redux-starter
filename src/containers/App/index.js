import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../../routes/Home/containers/HomeContainer'


const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />

    </main>
  </div>
)

export default App