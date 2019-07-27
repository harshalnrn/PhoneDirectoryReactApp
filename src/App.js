import React,{Component} from 'react';
import Header from './Header';  /*  Header refers to constant within ./Header.js */
import './App.css';


class App extends Component{

  render(){
    let subsriberArray=[

      {
        id:1,
        name:'Harshal',
      phone:'494844494'
    },
      {
        id:2,
        name:'Shilpa',
        phone:'6464646464'
      },
      {
        id:3,
          name:'Varun',
        phone:'464989844'
      }
    ]
  return (
    <div>
    <Header heading="Phone Directory" />
    <div className="component-body-container">
      <button className="custom-btn add-btn">Add</button>

      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
        //works like for each
subsriberArray.map(sub=>{
return <div key={sub.id}className="grid-container">
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
