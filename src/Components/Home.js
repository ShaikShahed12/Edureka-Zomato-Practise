import React, { Component } from "react";
import "../Styles/home.css";
import Wallpaper from "./Wallpaper";
import QuickSearch from "./QuickSearch";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchLocations();
  }

  fetchLocations = () => {
    axios.get("http://localhost:8900/api/locations/getAllLocations")
      .then(response => {
        this.setState({ locations: response.data.locations, loading: false });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.setState({ error: "Error fetching data", loading: false });
      });
  }

  render() {
    const { locations, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <Wallpaper locationsData={locations}/>
        <QuickSearch/>
      </div>
    );
  }
}
