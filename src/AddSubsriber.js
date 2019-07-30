import React,{Component} from 'react';
import Header from './Header';
import './AddSubsriber.css';
import { Link } from 'react-router-dom';
class AddSubsriber extends Component {

    constructor(){

        super();
        //default state object of the class, with its members. With, onChange event,we have re-initializing of state variables
        this.state={

            id:0,
            name:'',
            phone:''
         

        }
        console.log("inside constrcuter");
    }

    //note the different representation of a function, using arrow expressions
    
    inputChangedHandler=(e)=>{
        //change the state of state object
        const state=this.state;
        state[e.target.name]=e.target.value;
        state[e.target.phone]=e.target.value;
        this.setState(state);
        console.log(state);
    }

    onFormSubmitted=(f)=>{
        //prevent default action
f.preventDefault();
console.log(f.target.name.value);
this.props.addSubscriberHandler(this.state);                 //accessing properties objects which has the function
//re-initializing the state. But why is this required ?
this.setState({    id:0,
    name:'',
    phone:''})
    this.props.history.push("/");
    }
 


    componentDidMount(){
        console.log("component mounted");
        //here if state object mutated, render() shall get recalled
    }
    render(){
        console.log("inside render method");

        return (
            <div className="component-container">
           <Header heading="Add Subsriber" /> {/* passing properties to referred child component  */}
           <div className="component-body-container">
               <Link to="/"> <button className='custom-btn'>Back</button> </Link> 
           <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>      {/* // how is form DOM binded using this ? */}
<label htmlFor="name" className="label-control">Name: </label><br/>
<input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br/><br/>

<label htmlFor="phone" className="label-control">Phone: </label><br/>
<input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br/><br/>

<div className="subscriber-info-container">
<span className="subscriber-to-add-heading"> Subscriber to be added :</span><br/>
<span className="subscriber-info">Name:{this.state.name} </span><br/>
<span className="subscriber-info">Phone:{this.state.phone} </span>
</div>

<button className="custom-btn add-btn"  type="submit">Add</button>
           </form>
           </div>
            </div>


        )
    }
}
export default AddSubsriber;