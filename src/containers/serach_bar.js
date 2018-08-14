import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // console.log(event.target.value);
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    
    render(){
        return(
            <div className="mb-3 mt-3">
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                 placeholder="Please type your interested cities, for example 'Copenhagen' or 'Copenhagen,DK'"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
            </div>
        )
    }

}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchtoProps)(SearchBar);