/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import PopupSubscribe from './popup-subscribe'

class Main extends React.Component {
  Subscribe() {
    alert(13221);
  }

  render() {
    return (
      <PopupSubscribe
        btnText= {'Subscribe'}
        delay= {3000}
        onSubscribe= {this.Subscribe}
      />
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
