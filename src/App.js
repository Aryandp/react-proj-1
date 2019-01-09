import React, { Component } from 'react';
import { BrowserRouter,Route,Link,Router} from 'react-router-dom';


import Header from './Header';
import Figure from './HomePage/Figure';
import Section from './HomePage/Section';
import Footer from './Footer';
import ContactForm from './ContactForm';
// import TodoList from './TodoList';



import './css/App.css';
import './css/submenu.css';


class App extends Component {


  render() {
  var  address = {
       name:"Bangalore",
       head: "LinkCXO Global Private Limited,",
       first:"#131/1, 4th Floor,Yashkesh Tower,",
       second:"10th Main, 14th Cross, 6th Sector, HSR layout,",
       third:"Bengaluru- 560102.",

    };
    var header = {
      linkhome:"/home",
       header: "8590865153",
       home:"Home",
       london:"London",
       paris:"Paris",
       tokyo:"Tokyo",
       contact:"Contact Us",
       todo:"To Do List",
    };

    return (
      <div className="App">
<Header header={header}/>


      {/*  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h3><img src ={mobile} className="App-mobile"/>8590865153</h3>
		   <ul id="nav">
  <li><a href="#">Home</a>
    <ul>
      <li><a href="#link1">London</a></li>
      <li><a href="#link2">Paris</a></li>
      <li><a href="#link3">Tokyo</a>
        <ul style={{float:'left'}}>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">To Do List</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</header>*/}
<Figure/>



<div>

  <Route  path="/home" component={Section} />
    <Route  path="/contact" component={ContactForm} />
    // <Route  path="/TodoList" component={ContactForm} />

    </div>

	{/*// 	<div className="App-figure">
  // <img src={img} alt="Trulli"/>
  // </div>*/}
  {/*<div>
<section className="App-section">
<nav>
<ul id="myDIV" style={{float:'left',display:'inline'}}>
<li>Articles</li><br/>
<li>London</li><br/>
<li>Paris </li><br/>
<li>Tokyo</li>
</ul>
  </nav>

<aside>
<button style={{float:'left'}} >show</button>
<button style={{float:'left'}}>hide</button><br/>

<div className="cities">
<h2>London</h2>
<p>London is the capital of England.</p>
</div>
<button style={{float:'left'}}>show</button>
<button style={{float:'left'}}>hide</button><br/>
<div className="cities" id="view2">
<h2>Paris</h2>
<p>Paris is the capital of France.</p>
</div>
   </aside>
   <article>
<p id="demo">check articles</p>
<div className="img1">
   <img src={img1} alt="Norway" width="300" height="200"/>
<div className="dropup">
 <div className="desc">London</div>
 <div className="dropup-content">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
 </div>
</div>
</div>
<div className="img1">
<img src={img2} alt="Paris" width="200" height="200" />

 <div className="dropup">
 <div className="desc">Paris</div>
 <div className="dropup-content">
<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
 </div>
 </div>
</div>
<div className="img1">
<img src={img3} alt="Paris" width="200" height="200" />

   <div className="dropup">
 <div className="desc">tokyo</div>
 <div className="dropup-content">
<p>It has survived not only five centuries, but also the leap into electronic typesetting,</p>
 </div>
 </div>
</div>

 </article>

</section>

   </div>*/}
  {/* <div>
 <footer>
 <p><img src={home} className="App-home" style={{color:'white'}}/><a style={{margin:'5px'}}><strong>BENGALURU</strong></a><br/>
 <br/>LinkCXO Global Private Limited,<br/>
 #131/1, 4th Floor, "Yashkesh Tower",<br/>
 10th Main, 14th Cross, 6th Sector, HSR layout,<br/>Bengaluru- 560102.</p>

 <p><strong>Contact us to know more:</strong> info@linkcxo.com</p>
 </footer>
</div>*/}
<Footer contact={"Contact us to know more:"} email={"info@linkcxo.com"} address={address}/>

   </div>


    );
  }
}

export default App;
