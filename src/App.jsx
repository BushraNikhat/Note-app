import React, { useState } from "react";
import Writenote from "./Components/Writenote.jsx";
import Nav from "./Components/Nav.jsx";
import AddNotes from "./Components/AddNotes.jsx"
import Footer from "./Components/Footer.jsx";

function App() {
  const[newContent,setNewContent]=useState([])


  // on clicking add button ,the function below will update the new content state
  const addContent=(notes)=>{
    
      setNewContent((preVal)=>{
          return [...preVal,notes]
      })
  }


  // on pressing the delete button ,the functio  below get called and filters out all the remaining notes
  const deleteItem=(id)=>{

     setNewContent((olddata)=>
       olddata.filter((value,index)=>{
        
         return(index!==id)
        
       })
     )
  }

  return (
    <>

    <div className="page-container">
      <Nav />
      <Writenote passNote={addContent}/>

       {/*each time on the addition of newcontent ,map function will render addnotes component with content details.  */}
      <div className=" d-flex justify-content-xl-start justify-content-center flex-wrap  add-note-container"> 
          { newContent.map((value,index)=>{
            
            return (<AddNotes 
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              deleteItem={deleteItem}
            />  
            )
          })
          }
          
          </div>  
      <Footer />
      </div>
    </>
  );
}

export default App;
