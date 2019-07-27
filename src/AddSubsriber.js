import React,{Component} from 'react';
import Header from './Header';
import './AddSubsriber.css';
class AddSubsriber extends Component {

    constructor(){

        super();
        //default state object of the class, with its members. With, onChange event,we have re-initializing of state variables
        this.state={

            id:0,
            name:'',
            phone:''

        }

    }

    inputChangedHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(state);
    }
    render(){
        

        return (
            <div>
           <Header heading="Add Subsriber" /> {/* passing properties to referred child component  */}
           <div className='component-body-container'>
               <button className='custom-btn'>Back</button>
           </div>
           <form className="subscriber-form">
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

        )
    }
}
export default AddSubsriber;