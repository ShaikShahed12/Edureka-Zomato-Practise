import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: "",
            display: "none"
        }

    }

    componentDidMount() {
        const path = this.path.history.location.pathname;
        this.setBackground(path);
    }

    setAttributes = (path) => {
        let bg, display;
        if (path == "/") {
            bg = '#000000';
        }
        else {
            bg = '#ff0000';
            display = 'inline-block';
        }
        this.setState({ backgroundColor: bg, display: display });

    }

  render() {
    const { backgroundColor, display} = this.state;

    return (
      <div className='header' style={{backgroundColor: backgroundColor}}>
        <div className='header-logo' style={{display: display}}>
            <p>e!</p>
        </div>

        <div className='user-account'>
            <div className='login'>Login</div>
            <div className='signup'>Create an account</div>
        </div>
      </div>
    )
  }
}
