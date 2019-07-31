//this would be our smart component which would acts as controller ,and provide logic to all other dumb componenets
//dumb components include: showSubscriber.js , AddSubscriber.js,header.js

import React, {Component} from 'react';
import AddSubsriber from './AddSubsriber';
import ShowSubscriber from'./ShowSubscriber';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor(){
        super();
        this.state={
           subScriberList:[/* {
id:1,
name:'Shilpa Bhat',
phone:'08080808080'
        },
{
    id:2,
    name:'Harshal N',
    phone:'0989789809'   
},
{
    id:1,
    name:'Archana Singh',
    phone:'08080800909'
    
} */]
        }
    }

     //addsubscriber is method name, and newSubscriber is parameter being passed to method
    addSubscriberHandler=(newSubscriber) =>{
let list=this.state.subScriberList;

if(list.lenght>0){
    newSubscriber.id=list[list.lenght-1].id +1;
}
else{
    newSubscriber.id=1;
}
list.push(newSubscriber);
this.setState({subScriberList:list});


    } 

    deleteSubscriberHandler=(subscriberId)=>{
        let subscribersList=this.state.subScriberList;
let subscriberIndex=0;
subscribersList.forEach(function (subscriber, index){

    if(subscriber.id===subscriberId){
        subscriberIndex=index;
    }


    },this);

    let newSubscriberList=subscribersList;
    newSubscriberList.splice(subscriberIndex,1);
    this.setState({subScribers:newSubscriberList});
}
    
    
render(){
    // return(<AddSubsriber  addSubscriberHandler= {this.addSubscriberHandler}/>);
   // return (<ShowSubscriber subscriberList={this.state.subScriberList}/>)

     return(
         <Router>
            <div className="main-container">
            <Route exact path="/" render={(props)=><ShowSubscriber {...props} subscriberList={this.state.subScriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
            <Route exact path="/add" render={({history},props)=><AddSubsriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
            </div>
         </Router>
     )
}


}
export default PhoneDirectory;