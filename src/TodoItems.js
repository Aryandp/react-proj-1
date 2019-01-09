import React, { Component } from 'react';
import './todolist.css';
import './checkbox.css';



class TodoItems extends Component {
  constructor(props) {
    super(props);
this.state={
   condition:false,


};

    this.createTasks = this.createTasks.bind(this);
    // this.toggle=this.toggle.bind(this);
  }
  createTasks(item) {
    return (

    <div>
    <li data={item} key={item.key} className={this.state.condition ? "checked" : ""} ><p  onClick={()=>this.complete(item.key,item.done,item)}>{item.text} <span className="close" onClick={() => this.delete(item.key)}>&#215;</span>
    </p></li>
  </div>
);
  }
    //<label className="container" key={item.key}>
  //<input type="checkbox" checked={this.state.condition ? "checked" : ""} onClick={()=>this.complete(item.key)}/>
  //<span className="checkmark"></span>



//https://codepen.io/Retzudo/pen/PNKEYv?editors=0010 className={this.state.condition ? "checked" : ""} onClick={()=>this.show(item.key)}
  delete(key) {
     this.props.delete(key);

    }
// show(){
//     this.setState({
//       condition:!this.state.condition,
//     });
//
// }
complete(key,done,data){
  // var count=0;
   var flag=0;
var arr=[
				{"key":key,"text":data.text,"done":done},
			];
// var arr=this.props.entries;

// console.log(arr[0]);
// for(var i=0;i<=1;i++){
//   if(arr[i].key==key){
//     console.log(arr[0]);

    this.setState({
     condition:!this.state.condition,

    });

// }
// }

// this.setState({
//  condition:!this.state.condition,
//
// });
}


  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }

    return (

<div><ul id="myUL" >

      <div>
      {listItems}{msg}
      </div>
</ul>
<ul id="myUL" >



</ul>
</div>


    );
  }
};

export default TodoItems;
