import React, { Component } from 'react';
// import Article from './Article';

class List extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <nav>
      <ul style={{float:'left'}}>
      <li><a style={{color:'red'}}>{this.props.list.article}</a></li><br/>
      <li><a  style={{color:this.props.color1}} href="#link1" id="link1"  onClick={this.props.cutc}>{this.props.list.london}</a></li><br/>
      <li><a style={{color:this.props.color2}} href="#link2" id="link2"  onClick={this.props.cutc2}>{this.props.list.paris}</a></li><br/>
      <li><a  style={{color:this.props.color3}} href="#link3" id="link3"  onClick={this.props.cutc3}>{this.props.list.tokyo}</a></li>
      </ul>
        </nav>

    );
  }
}
export default List;
