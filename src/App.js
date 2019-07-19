import React,{Component} from 'react';
import Header from './Header';  /*  Header refers to constant within ./Header.js */
import './App.css';


class App extends Component{

  render(){
    let subsriberArray=[

      {
        name:'Harshal',
      phone:'494844494'
    },
      {
        name:'Shilpa',
        phone:'6464646464'
      },
      {
          name:'Varun',
        phone:'464989844'
      }
    ]
  return (
    <div>
    <Header />
    <div className="component-body-container">
      <button className="custom-btn add-btn">Add</button>

      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
subsriberArray.map(sub=>{
return <div className="grid-container">
  <span className="grid-item">{sub.name}</span>
  <span className="grid-item">{sub.phone}</span>
  </div>

})
      } 
    </div>
    </div>
 );
}
}

export default App;
