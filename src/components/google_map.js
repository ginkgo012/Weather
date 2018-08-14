import React, { Component } from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        const google = window.google;
        
        new google.maps.Map(this.refs.map, {
            zoom:10,
            center:{
                lat:this.props.lat,
                lng:this.props.lon,
            },
            fullscreenControl: false,
        })
    }
    
    render(){
        return <div ref="map" />;
    }
}

export default GoogleMap;