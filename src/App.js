import React, {Component} from 'react';
//import './App.css';
import Layout from './component/layout/layout';
import Burgerbuilder from './container/burgerbuilder/burgerbuilder'

class App extends Component {
  state={

  }
  render(){
      return(
        <>
        <Layout>
          <Burgerbuilder />
        </Layout>
          <div className="App">
            
          </div>
          </>
      );
  }
}

export default App;
