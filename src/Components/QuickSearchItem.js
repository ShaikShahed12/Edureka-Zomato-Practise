import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/QuickSearch.css";

export default class QuickSearchItem extends Component {
  render() {
    const { name, content, image } = this.props;

    return (
      <Link to="/filter" className="box" style={{color:"black"}}>
        <div className="innerB1">
          <img src={image} alt={name} className="qs-image" />
        </div>
        <div className="innerB2">
          <h4 className="qs-item-heading">{name}</h4>
          <p className="qs-item-description">
            {content}
          </p>
        </div>
      </Link>
    );
  }
}
