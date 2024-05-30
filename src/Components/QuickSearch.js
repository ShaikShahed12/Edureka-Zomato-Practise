import React, { Component } from 'react';
import axios from 'axios';
import QuickSearchItem from './QuickSearchItem';

export default class QuickSearch extends Component {
  state = {
    mealTypes: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios.get('/MealTypes.json') 
      .then(response => {
        this.setState({ mealTypes: response.data.locations, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ error: 'Error fetching data', loading: false });
      });
  }

  render() {
    const { mealTypes, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <div className="myBottom">
          <h1 className="BottomHead">Quick Searches</h1>
          <h3 className="BottomSubHead">
            Discover restaurants by type of meal
          </h3>
          <div className="cards">
            {mealTypes.map((mealType) => (
              <QuickSearchItem
                key={mealType.meal_type}
                name={mealType.name}
                content={mealType.content}
                image={mealType.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
