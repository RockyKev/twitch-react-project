import React from 'react';
import './App.css';

import Header from './components/HeaderComponent';
import Sidebar from './components/SidebarComponent';
import Main from './components/MainComponent';


function App() {
  return (

    <div className="App"> 
    <Header title="Twitch Game Search" /> 
      
      <div className="flexbox">
        <Main />
        
        <Sidebar className="sidebar" 
        title="World Of WarCraft" 
        img="https://images-na.ssl-images-amazon.com/images/I/81bYbCOqeiL._SY679_.jpg" 
        viewers={57719}/> 

      </div>

    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
