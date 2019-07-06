import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './js/components/navbar';
import Main from './js/container/main';
import './css/main.css';
import 'animate.css';

class App extends React.Component {

  state={
    page:"Home"
  }

  handlePageChange = (val)=>{
    this.setState({
      page: val
    })
  }

  render = ()=>{
    return (
      <div className="maindiv">
        <NavBar changePage={this.handlePageChange}/>
        <Main 
          page={this.state.page}
          changePage={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
