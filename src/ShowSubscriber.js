import React,{Component} from 'react';
import Header from './Header';  /*  Header refers to constant within ./Header.js */
import './ShowSubscriber.css';
import {Link} from 'react-router-dom';
class ShowSubscriber extends Component{
  
/* constructor(){
console.log("inside constructer");
super();
this.state={
  subscribersListToShow:[]
}

}

componentDidMount(){
  console.log("inside componenetDidMount method")
  let subscriber={
    id:1,
    name:'Harshal',
    phone:'08080318301'
  };
  let subscriber1={
id:2,
name:'Padma',
phone: '1410414801'
  };
  let subscriberList=this.state.subscribersListToShow;
  subscriberList.push(subscriber);
  subscriberList.push(subscriber1);
  //note constrcuter is the only place where state variables can be initialised using this.state. After evewhere , setState method has to be mandatorily used
  this.setState({
    subscribersListToShow:subscriberList
  });
}
*/
  deleteHandler(id){
//now use the function that has been passed through the props, from PhoneDirectory
this.props.deleteSubscriberHandler(id);

  } 

  render(){
    console.log("inside render");
   /*  let subsriberArray=[

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
    ] */ 

  return (
    <div className="component-container">
    <Header heading="Phone Directory" />
    <div className="component-body-container">
        <Link to="/add"> <button className="custom-btn add-btn">Add</button> </Link> 

      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
        //works like for each
      //  this.state.subscribersListToShow.map(sub=>{
        this.props.subscriberList.map(sub=>{
return <div key={sub.id}className="grid-container">                                           
  <span className="grid-item">{sub.name}</span>
  <span className="grid-item">{sub.phone}</span>
  <span className="grid-item"> <button className="custom-btn del-btn" onClick={this.deleteHandler.bind(this,sub.id)}>Delete</button>
</span>
  </div>

})
      } 
    </div>
    </div>
 );
}
}

export default ShowSubscriber;
