import React from 'react'
import '../Views/style.css'

function NoteList(props) {
    const list = props.list;
    const arr = list.map((note)=>{
        return(
            <div className = "Note-container" key = {note.id}>
               <div id = "textPart">

                <div>{note.title}</div>
                <p>{note.text}</p>
                
                </div>  
                <div id = "buttons">
                <button className="edit" onClick = {()=>props.update(note.id)}>Edit</button>
                <button className = "delete" onClick = {()=>props.delete(note.id)}>Delete</button>
                </div>
               
            </div>
        )
    });
    // console.log(arr);
    return (
        <>
          {arr}  
        </>
    )
}

export default NoteList
