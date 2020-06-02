import React from 'react';
import './Popup.scss';
import './media.scss'
import Modal from '../Modal/Modal';
class Popup extends React.Component {
  state = {
    showInform: false
  }
  onclickShowInform = () => {
    this.setState({
      showInform: !this.state.showInform
    })
  }
  render() {
    return (
      <div className='popup' >
        <div className="popup_button">
          <button onClick={this.props.close} className='button-close'>
            <img src={require("../Popup/img/X.png")} alt="button close"/>
            </button>
        </div>
        <div className="button_back">
          <button onClick={this.props.close} className='back'>
          <i className="arrow left icon"></i>Back to Memorial
            </button>
            </div>
        <div className='popup_inner' >
          <div className='popup_pic'>
            <Modal
             contact={this.state.showInform} 
             showInf={this.onclickShowInform}/>
         </div>
          <h1 className="popup_heading">Celebration of life </h1>
          <div className='popup_inform'>
            <div className="popup_inform_detail">
              <div className="popup_inform_date">
              <div className="calendar">
                <img src={require("../Popup/img/calendar icon.png")} alt="calendar"></img>
              </div>
              <div className="popup_inform_date_text">
                <p className="text">Friday, October 20</p>
                <p className="text">9:00 AM - 2:00 PM</p>
                <a href="!#" className="text_link">Add to Calendar</a>
                </div>
              </div>
              <div className="popup_inform_date">
              <div className="map">
              <img src={require("../Popup/img/pin icon.png")} alt="map"></img>
              </div>
              <div className="popup_inform_date_text map_text">
                <p className="text">St. Marry Church</p>
                <p className="text">2475 Ericsson Str.IL 60169</p>
                <a href="!#" className="text_link">Show on map</a>
                </div>
              </div>
            </div>
            <div className="popup_inform_about">
              <h2 className="popup_inform_about_heading">About</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu </p>
            </div>
          </div>
          <div className="wrap_button">
          <button className="App_button">Attending </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;