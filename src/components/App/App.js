import React from 'react';
import './App.scss';
import Popup from '../Popup/Popup';
import '../Popup/media.scss'

class App extends React.Component {
  state ={
    showPopup: false,
  }

  onclickShowPopup=()=>{
    this.setState({
      showPopup: true
    })
  }
  closePopup=(e)=>{
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
 
  render() {
    return (
        <header className="App">
        <button onClick={this.onclickShowPopup} className="App_button">Show details</button>
        {this.state.showPopup ? 
          <Popup
          close={this.closePopup}
          />
          : null
  }
        </header>
        
    );
  }

}

export default App;
