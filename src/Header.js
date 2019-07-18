import React/* ,{Component} */ from 'react';
import './Header.css' ;
//components have to mandatorily return react element

//note the difference in css properties syntax in JSX as compared to raw css. in JSX, CSS properties are perceived as JS properties
/* const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
  }; */
 const Header=function(){                                  //constant name should be same as that of component.js
return(  
<div className='header'>
Phone Directory
 </div>
 )
} 
//now reference this functional component in App.js

// class Header extends Component{

//     render(){

//         return(
//             <div className="header">Phone Directory</div>
//         )
//     }
// }
export default Header;