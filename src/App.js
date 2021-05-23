import React from 'react';
import './App.css';
import Nav from "./Nav";
import Menu from "./Menu";
import Body from "./Body"
import Widgets from "./Widgets"
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {
        !user?(
          <Login/>
        ):(
          <>
            <Nav className="nav"/>
            <div className="body_comp">
              <Menu/>
              <Body/>
              <Widgets/>
            </div>  
          </>
        )
      }
    </div>
  );
}

export default App;
