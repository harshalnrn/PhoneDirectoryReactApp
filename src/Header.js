import React/* ,{Component} */ from 'react';
//components have to mandatorily return react element
 const Header=function(){                                  //constant name should be same as that of component.js
return(  
<div className="header">
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