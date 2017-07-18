import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderCityData() {
    return this.props.weatherData.map( cityData => {
      return (
        <tr key={cityData.city.name}>
         <td>{cityData.city.name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className='table table-hover'>
       <thead>
         <tr>
           <th> City </th>
           <th> Temprature </th>
           <th> Pressure </th>
           <th> Humidity </th>
         </tr>
       </thead>
       <tbody>
          {this.renderCityData()}
       </tbody>
      </table>
    );
  }
};

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData
  }
};

export default connect(mapStateToProps)(WeatherList);
