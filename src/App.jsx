import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CharactersList from './Components/CharactersList'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  return (
  <div className="App">
   <Router>
     <NavBar />
     <Switch>
      <Route exact path='/' component={CharactersList} />
      <Route path='/about' component={About} />
    </Switch>
    <Footer />
   </Router>
  </div>
  );

export default App;
