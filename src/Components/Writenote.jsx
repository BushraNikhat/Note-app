import React, { useState } from "react";

const Writenote = (props) => {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });


  // The function below changes the state of notes.when ever something is written to title and textarea.
  const Write = (event) => {
    const { name, value } = event.target;

    setNotes((preVal) => {
   
      return {
        ...preVal,
        [name]: value,
      };
      }
 
    );
  };


  // addButton function get called whenever add btn is pressed.Which further calls the addContent funtion in App component.
  const addButtuon = (e) => {
  if (notes.title !=="" && notes.content !==""){
    props.passNote(notes);
  }
 
    setNotes((preVal)=>{
      return({
        title:"",
        content:""
      })
    })
  

  };

  return (
    <>
      <div className=" d-flex justify-content-center  note-space">
        <div className="card shadow note-space-card ">
          <div className="card-body note-space-body">
            <h5 className="card-title note-space-title">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={notes.title}
                onChange={Write}
                autoComplete="off"
              />
            </h5>
            <p className="card-text note-space-text">
              <textarea
              
                placeholder="Write your notes..."
                name="content"
                value={notes.content}
                onChange={Write}
                
              ></textarea>
            </p>

            <button className="  note-space-btn " onClick={addButtuon}>
              <i className="fas fa-folder-plus note-space-btn-icon fa-4x  text-success d-block"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Writenote;
