import React from 'react';
import '../loader.js'
import '../common/template/dependencies'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

import Routes from './routes'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
