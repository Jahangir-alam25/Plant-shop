

import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import SubNavbar from './Components/Navbar/SubNavbar'
import Plants from './Components/Plants/Plants'

const plantsPromise = fetch('Plant.json').then(res=>res.json())

function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <SubNavbar></SubNavbar>
     <Banner></Banner>
     <Plants plantsPromise={plantsPromise}></Plants>
    </>
  )
}

export default App
