import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleSimple from './Components/Page'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App" style={{fontFamily:'Times New Roman'}}>
          <MuiThemeProvider>
            <div>
              <Header/>
              <Navbar/>
            </div>

          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
