import React, { Component } from 'react';
class Search extends Component {
    constructor(props)
      {
        super(props);
      }
    render() {
      return (
        <div className="row">
        <input type="text" onChange={(e)=>{
            this.props.textbox(e.target.value)
        }} placeholder="Search" 
        className="col-md-4 from-control"/>
            <button className="ml-1 btn-primary" 
            onClick={()=>{this.props.search("clickevent")}}>
            Search
            </button>
        </div>
        
      )
    }
  }
  export default Search;