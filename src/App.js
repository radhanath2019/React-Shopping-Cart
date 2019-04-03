import React, { Component } from 'react';
import Header from './Product/Header';
import ProductList from './Product/ProductList'
import Search from './Search'
class App extends Component {
  constructor(props){
    super();
    this.state={
      
      searchQuery:''

    }
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }
  handleOnChangeText(data){
    
       let currentstate = this.state;
       
       
       currentstate.searchQuery = data;
       
       this.setState(currentstate);
       
     }
  render() {
    return (
      <div className="App">
       <Header/>
       <Search textbox={this.handleOnChangeText}/>
       <ProductList search={this.state.searchQuery}/>
      </div>
    );
  }
}

export default App;
//importing Header from child
//importing Card from child