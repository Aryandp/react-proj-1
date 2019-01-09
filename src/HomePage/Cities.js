import React, { Component } from 'react';

class Cities extends Component {
  constructor(props) {
		super(props);
		this.state = {
shown: true,
hidden:false,
block:true,
none:false
		};
	}
  none() {
      this.setState({
        block:false,
      });
    }
 block() {
      		this.setState({
            block:true,
      		});
      	}
  hide() {
  		this.setState({
  			shown: false,
  		});
  	}
    show() {
    		this.setState({
    			shown:true,
    		});
    	}


  render() {
    var shown = {
      visibility:this.state.shown ? "visible" : "hidden",

    };

    var hidden = {
      visibility:this.state.shown ? "hidden" : "visible",
    };
    var block = {
      visibility:this.state.block ? "visible" : "hidden"

    };
    var none = {
      visibility:this.state.block ? "hidden" : "visible"

    };

    return(

      <aside>
      <button style={{float:'left', margin:'2px'}} onClick={this.show.bind(this)}>show</button>
      <button style={{float:'left',margin:'2px'}} onClick={this.hide.bind(this)}>hide</button><br/>
      <div className="cities" style={shown}>
      <h2>{this.props.cities.head1}</h2>
      <p>{this.props.cities.para1}</p>
      </div>


      <button style={{float:'left',margin:'2px'}} onClick={this.block.bind(this)}>show</button>
      <button style={{float:'left', margin:'2px'}} onClick={this.none.bind(this)}>hide</button><br/>
      <div className="cities" style={block}>
      <h2>{this.props.cities.head2}</h2>
      <p>{this.props.cities.para2}</p>
      </div>
         </aside>
    );

  }
}
export default Cities;
