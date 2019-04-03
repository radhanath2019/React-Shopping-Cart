import React, { Component } from 'react';


class Card extends Component {
    constructor(props){
        
        super(props);
        
        
 }
  render() {
      
    return (
      <div className="App">
                <div className="card">
            <div className="card-body">
                <h3 className="card-title" >{this.props.details.name}</h3>
                <h4 className="card-title" >Sale Price = $ {this.props.details.salePrice}</h4>
                <img className="card-img-top" src={this.props.details.mediumImage} alt="Card image cap"/>
                <p className="card-text">Description :{this.props.details.shortDescription}</p>

                <button type="button" className="btn btn-primary">Add</button>
            </div>
            </div>
      </div>
    );
  }
}

export default Card;
