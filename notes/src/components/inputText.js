import React from 'react';
import uuid from 'uuid/dist/v1';
import NoteList from './NoteList'
// let i = 0;

class inputText extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: uuid(),
             title: "",
             text: "",
             
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.update = this.update.bind(this);
         this.delete = this.delete.bind(this);
    }

    handleChange(e){
        const {value, name} = e.target;
        this.setState({

            [name]: value
        });
    }

    addNote(e){
         e.preventDefault();
         const {newNote} = this.props;
         const note = {
             ...this.state
         };
         
        this.setState({
            id: uuid(),
            title: "",
            text: "",
            
        });
        newNote(note);   
    }

    delete(id){
        const {deleted} = this.props;
        console.log(id);
        deleted(id);
    }

    update(id){

        // console.log(typeof(id));
        

       const editedNote = this.props.notes.filter(note=> note.id===id);
       const [num1] = editedNote;
       console.log(num1);
        this.setState({
            title: num1.title,
            text: num1.text
        });

        this.delete(id);
     }



    render(){
    const {title,text} = this.state;
    //console.log(this.props.notes);
    // console.log(this.props);
    return (
        <>
        <div className = "Input">
            
            <input name = "title" type ="text" placeholder = "Title" onChange = {this.handleChange} value = {this.state.title}></input>
            <br/>
            <textarea name = "text" type ="text" placeholder = "Description" onChange = {this.handleChange} value = {this.state.text}></textarea>
            <br />
            {/* <button onClick = {() => this.props.newNote(this.state)} >Create</button> */}
            <button onClick = {this.addNote} >Create</button>

        </div>
        <div className = "Note-List">
        <NoteList list = {this.props.notes} update = {this.update} delete = {this.delete}  />
        </div>
            
        </>
    )
    }
    
}

export default inputText

