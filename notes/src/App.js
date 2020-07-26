import React, { Component } from 'react'
import InputText from './components/inputText';
import NoteList from './components/NoteList';
import './Views/style.css'
import Navbar from './components/navbar';

export class App extends Component {
  
 constructor(props) {
   super(props)
 
   this.state = {
      notes:[

      ],
      
   }
   this.newNote = this.newNote.bind(this);
  //  this.update = this.update.bind(this);
  //  this.delete = this.delete.bind(this);
 }
 
 newNote(obj){
  this.setState(prevState => {
    return (
      {
        notes: [obj, ...prevState.notes]
      }
    )
  });
 }

 
  render() {
    // console.log(this.state)
    return (
      <>
       <Navbar />
        <div className = "main-container">
          <InputText newNote = {this.newNote} notes = {this.state.notes}/>
        </div>
     </>
    
      
    );
  }
}

export default App;
