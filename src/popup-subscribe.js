/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";

import './css/index.css';

import React from 'react'

class PopupSubscribe extends React.Component {
  render() {
    const { text, delayShow } = this.props;
    return (
      <div>
        <div className="card" style={
          {
            position: 'fixed',
            width: '600px',
            height: '400px',
            backgroundColor: '#ecf0f1',
            zIndex: 999,
          }}>
          <a href="javascript:void(0)"><i className="fa fa-times"></i></a>
          <input type="email" style={{width: '400px', height: '40px'}}/>
          <input type="submit" value={text} />
        </div>
        <div style={
        {
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 998,
        }} />
      </div>
    )
  }
}

export default PopupSubscribe
