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
  render() {
    // { notes } = this.props;
    return (
      <PopupSubscribe
        text= {'Subscribe'}
        delayShow= {5}
      />
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
