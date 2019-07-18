import React from 'react';
import Header from './Header';  /*  Header refers to constant within ./Header.js */



function App() {
  return (
    <div>
    <Header/>                       {/* tag refers to component */}
     <button>Add</button>
     <div>
       <span>Name</span><br/>
       <span>Phone</span>
     </div> 
  
    </div>
  );
}

export default App;
