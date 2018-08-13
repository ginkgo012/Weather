import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
         renderWeather(cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp)=>{return temp-273.15});
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // console.log(temps);
        const {lon ,lat} = cityData.city.coord;

        return(
            <tr key={name}>
                <td>
                    {name}
                    {/* <button onClick={this.onClickCity.bind(this)}>x</button> */}
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

export default connect(mapStatetoProps)(WeatherList);