import React from "react";

const AddNotes = (props) => {


const deleteNote=()=>{
  props.deleteItem(props.id)
}

  return (
    <>
   

       
            <div className="card shadow add-note-card ">
              <div className="card-body add-note-body">
                <h5 className="card-title font-weight-bold add-note-title ">{props.title}</h5>
                <p className="card-text  add-note-text">
                 {props.content}
                </p>
                <button className=" note-space-btn  " onClick={deleteNote}>
                    <i className="fas fa-trash-alt note-space-btn-icon fa-2x  text-success d-block"></i>
                </button>
              </div>
            </div>
        

      
    </>
  );
};
export default AddNotes;
