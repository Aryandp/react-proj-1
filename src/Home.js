import React, { Component } from 'react';


import Header from './Header';
import Figure from './HomePage/Figure';
import Section from './HomePage/Section';
import Footer from './Footer';
import ContactForm from './ContactForm';



import './css/App.css';
import './css/submenu.css';
class Home extends Component {


  render() {
  var  address = {
       name:"Bangalore",
       head: "LinkCXO Global Private Limited,",
       first:"#131/1, 4th Floor,Yashkesh Tower,",
       second:"10th Main, 14th Cross, 6th Sector, HSR layout,",
       third:"Bengaluru- 560102.",

    };
    var header = {
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
<Figure/>
<Section/>
<Footer contact={"Contact us to know more:"} email={"info@linkcxo.com"} address={address}/>
</div>


 );
}
}

export default Home;
