import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { removeCity } from '../actions/index';
import { bindActionCreators } from 'redux';

class WeatherList extends Component {
    constructor(props){
        super(props);
        this.removeCity = this.props.removeCity.bind(this);
        this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather(cityData){
        const id = cityData.city.id;
        const name = cityData.city.name;
        const country = cityData.city.country;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp)=>{return temp-273.15});
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const windspeeds = cityData.list.map(weather => weather.wind.speed);
        const {lon ,lat} = cityData.city.coord;
                
        return(
            <tr key={id}>
                <td>
                    {name}<br/>{country}
                    <button className="close" aria-label="Close" onClick={()=>this.removeCity(id)}><span aria-hidden="true">&times;</span></button>
                </td>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="&#8451;"/></td>
                <td><Chart data={pressures} color="#56b45d" units="hPa"/></td>
                <td><Chart data={humidities} color="blue" units="%"/></td>
                <td><Chart data={windspeeds} color="#41c3f9" units="m/s"/></td>
            </tr>
        )
    }
    
    render(){
        return(
            <div className="table-responsive">

            <table className="table table-hover">
                <caption>The table shows charts and average value of weather trends for the following 5 days including data every 3 hours.</caption>
                <thead className="thead-light">             
                    <tr>
                        <th >City</th>
                        <th >Map</th>
                        <th >Temperature (&#8451;)</th>
                        <th >Pressure (hPa)</th>
                        <th >Humidity (%)</th>
                        <th >Wind speed (m/s)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
            </div>
        )
    }
}

// function mapStatetoProps(state){
//     return { weather: state.weather };
// }

function mapStatetoProps({ weather }){
    return { weather };
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ removeCity }, dispatch);
}

export default connect(mapStatetoProps,mapDispatchtoProps)(WeatherList);