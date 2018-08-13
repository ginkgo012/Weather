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
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp)=>{return temp-273.15});
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon ,lat} = cityData.city.coord;
                
        return(
            <tr key={name}>
                <td>
                    {name}
                    <button onClick={()=>this.removeCity(name)}>x</button>
                </td>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="&#8451;"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        )
    }
    
    render(){
        return(
            <table className="table table-hover ">
                <thead>             
                    <tr>
                        <th>City</th>
                        <th>Map</th>
                        <th>Temperature (&#8451;)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
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