
'use client'
import React, { useState, useEffect, useRef } from "react";
import './styles.css'

export default function App() {

    return(
    <div>
    <ToggleSameForAll/>
    <EnterSameValue />
    </div>
  )};
  
  function ToggleSameForAll(){

  const [selected, setSelected] = useState("");
  const changeHandler = (event) => {
  setSelected(event.target.value)}
  
  return (
    <>
      <h3>Homework</h3>
      <section>
      <input type="radio" name="choice" value="same-for-all" checked={selected === "same-for-all"}
        onChange={changeHandler}
      />
      <label for="same-for-all">Set Same for All</label>
      </section>
  
      <section>
      <div aria-hidden={selected !== "same-for-all" ? true : false}>
      <label for="same-value">Enter Same Value</label>  
      <input type="text" id="same-value" name="same-value" onChange={changeHandler}/>
      </div>
      </section>
  
      <section>
      <input
        type="radio"
        name="choice"
        value="set-particular"
        id="set-particular"
        checked={selected === "set-particular"}    
        onChange={changeHandler}
      />
      <label for="set-particular">Set Particular</label>
    
      <div aria-hidden={selected !== "set-particular" ? true : false}>
      </div>
      </section>

      
  </>
  )}


  

  // SET INPUT FIELDS_________________________________________________
  function EnterSameValue() {
 
    const [text, setText] = useState("");

  // UPDATE INPUT TEXT FIELDS AFTER ENTERED TEXT EVENT______________________________________
  
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
 
    return (
      <div >
        <input onChange={handleInputChange} />
        <A text={text} />
        <B text={text} />
        <C text={text} />
        <D text={text} />
      </div>
    );
  }
  
  //Row A
  function A(props) {
    const { text } = props;
    return <div><input type="checkbox" id="a" name="a" value="" label="a"/><input name="value-a" label=" " placeholder={text}/> </div>;
  }
  
  //Row B
  function B(props) {
    const { text } = props;
    return <div><input type="checkbox" id="b" name="b" value="b" label="b"/><input name="value-b" label=" " placeholder={text}/> </div>;
  }
  
  //Row C
  function C(props) {
    const { text } = props;
    return <div><input type="checkbox" id="c" name="c" value="c" label="c"/><input name="value-c" label=" " placeholder={text}/> </div>;
  }
  //Row D
  function D(props) {
    const { text } = props;
    return <div><input type="checkbox" id="d" name="d" value="d" label="d"/><input name="value-d" label=" " placeholder={text}/> </div>;
  }
  
  