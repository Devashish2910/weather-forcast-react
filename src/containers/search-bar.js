import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { searchBtnClick } from './../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}>

        <input
         className="form-control"
         value = {this.state.term}
         placeholder = 'Enter City Name For 5 Days Weather Data'
         onChange = {this.search} />

       <span className="input-group-btn">
         <button type="submit"
           className="btn btn-secondary">
           Submit
          </button>
       </span>
      </form>
    );

  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchBtnClick(this.state.term);
    this.setState({term:''});
  }

  search(event) {
    this.setState({term: event.target.value});
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({searchBtnClick},dispatch)
};

export default connect(null ,mapDispatchToProps)(SearchBar);
