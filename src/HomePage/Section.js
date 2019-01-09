import React, { Component } from 'react';

import List from './List';
import Cities from './Cities';
import Article from './Article';

var list = {
   article: "Articles",
   london:"London",
   paris:"Paris",
   tokyo:"Tokyo",
   britain:"Britain",
   japan:"Japan",
   france:"France",
};
var cities = {
  head1:'London',
  head2:'Paris',
  para1:'London is the capital of England.',
  para2:'Paris is the capital of England.',
};


class Section extends Component {
constructor(props){
  super(props);
  this.state={
    color1:"",
    colorp1:"",
    colort1:"",

    color2:"red",
    color3:"red",
    color4:"red",
    head:"",
    london:"London",
    para:"",
    capital:"London is the capital of Britain.",
    paris:"Paris",
    france:"Paris is the capital of France.",
    tokyo:"Tokyo",
    japan:"Tokyo is the capital of Japan"
  };
  this.utc=this.utc.bind(this);
  this.utc2=this.utc2.bind(this);
  this.utc3=this.utc3.bind(this);

}
utc(){
  this.setState({
    colort1:"",
    color1:this.state.color2,
    head:this.state.london,
    para:this.state.capital,


  });}
  utc2(){
    this.setState({
      color1:"",
      colorp1:this.state.color3,
      head:this.state.paris,
      para:this.state.france,


    });}
    utc3(){
      this.setState({
        colorp1:"",
        colort1:this.state.color4,
        head:this.state.tokyo,
        para:this.state.japan,


      });
}
  render() {
    return(
      <div>
    <section className="App-section">
    <List list={list} cutc={this.utc} cutc2={this.utc2} cutc3={this.utc3} color1={this.state.color1} color2={this.state.colorp1} color3={this.state.colort1}/>
<Cities cities={cities}/>
<Article  london={this.state.head} para={this.state.para}/>
    </section>

       </div>

    );
  }
}
export default Section;
