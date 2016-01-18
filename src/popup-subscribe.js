/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";

import './css/index.css';
import './css/animate.css';

import React from 'react'

class PopupSubscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      delay: this.props.delay,
      onSubscribe: this.props.onSubscribe,
    };
  }

  componentDidMount () {
    setTimeout(function(){
      this.setState({showPopup: true});
    }.bind(this), this.props.delay);
  }

  componentWillUnmount () {

  }

  onClose() {
    this.setState({ showPopup: false });
  }

  render() {
    const { btnText } = this.props;
    return (
      <div>
      {this.state.showPopup ?
        <div><div className="card animated bounceIn">
        <a className="close-button" onClick={this.onClose.bind(this)}>&#10006;</a>
        <p>Get updated newsletter <br/><span className="important">collect your 15% off coupon</span></p>
        <input type="email" className="email-input" placeholder="Enter your email adress"/>
        <input type="submit" className="submit-input button-outline" onClick={this.state.onSubscribe} value={btnText} />
      </div>
      <div className="overlay"/></div> : null}
      </div>
    )
  }
}

export default PopupSubscribe
