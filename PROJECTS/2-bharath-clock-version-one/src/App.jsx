import ClockHeading from './components/ClockHeading'
import ClockSlogon from './components/ClockSlogon'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogon></ClockSlogon>
    <CurrentTime></CurrentTime>
  </center>
}

export default App
