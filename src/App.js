import React from 'react';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import axios from 'axios';
import {originals,action,trending} from './url'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={originals} title='Netflix Originals'/>
     <Rowpost url={action} title='Action'/>
     <Rowpost url={trending} title='trending'/>




    </div>
  );
}

export default App;
