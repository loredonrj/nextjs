'use client'
import React, {useState} from 'react';
import Checkbox from "./components/forms/checkbox";
import Input from "./components/forms/input";
import Radio from "./components/forms/radio";


export default function Home(){
return (
<fieldset>

<Radio name="same-for-all" label='Set Same for All'/>
<br/> 
<Radio name="set-particular" label='Set Particular'/> 
<p></p>
<Input name="same-value" label='Enter Same Value'/> 
<p></p>
<Checkbox id="select-all" name="choice" value="select-all" label="Select all"/>
<div><Checkbox id="a" name="a" value="a" label="a"/><Input name="value-a" label=" " placeholder="value"/> </div>
<div><Checkbox id="b" name="b" value="b" label="b"/><Input name="value-b" label=" " placeholder="value"/> </div>
<div><Checkbox id="c" name="c" value="c" label="c"/><Input name="value-c" label=" " placeholder="value"/> </div>
<div><Checkbox id="c" name="c" value="c" label="d"/><Input name="value-d" label=" " placeholder="value"/> </div>
</fieldset>
);
}

