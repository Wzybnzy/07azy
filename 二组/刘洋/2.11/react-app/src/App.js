import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import router from './router/routerConfig'
import RouterView from './router/router'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RouterView router={router}></RouterView>
      </BrowserRouter>
    </div>
  );
}

export default App;
