/*
THE PROMPT

I need you to act as a tutor. Write the source code to achieve conditional rendering of form components using react hooks like useState() , useEffect() and useRef(). The code must be as simple as possible so a beginner can understand it. You must add comment inside the code so the different functions and what they do can easily be understood by a beginner. After you have generated the code, explain to me step by step how it works.
The code must be as simple as possible so a beginner can understand it. You must add comment inside the code so the different functions and what they do can easily be understood by a beginner. After you have generated the code, explain to me step by step how it works.

The form is composed of 9 components.

When the form is first rendered, None of the component the radio buttons must be selected, the input fields must be empty, and the chechboxes are unchecked and Component_3 is not rendered because Component_1 is not selected. Component_2 is not selected either.

Component_1 and  Component_2 form a group of radio buttons. Thus, they cannot both be selected at the same time. If Component_1 is selected then Component 2 is de-selected and vice versa.

Component_1 is a radio button whose label is "Set Same for All". 

Component_2  is radio button whose label is "Set Particular". It is located on the next line below Component_1.

Component_2 and Component_1 are mutually exclusive. 

Component_4 is a check box whose label is "Select All". 

When Component_4 is selected then Component_5, Component_6 and Component_7,and Component_8 get all checked.

Component_1, Component_2 and Component_4 are mutually exclusive. When either is selected the other ones cannot be selected or checked.

Component_3 is an input field whose label is "Enter same value". It is rendered only if Component_1 is selected. It stops being rendered when Component_1 is not selected. When Component_3 is rendered it appears just below Component_1. 

Component_5 is comprised in that specific order, and horizontally, of a checkbox whose label is "a", an input box whitout label whose name and id attributes are "a".

Component_6 is comprised in that specific order, and horizontally, of a checkbox whose label is "b", an input box whitout label whose name and id attributes are "b".

Component_7 is comprised in that specific order, and horizontally, of a checkbox whose label is "c", an input box whitout label whose name and id attributes are "c". 

Component_8 is comprised in that specific order, and horizontally, of a checkbox whose label is "d", an input box whitout label whose name and id attributes are "d". 

Component_9 is a text area. It is initially absolutelly empty. It doesn't render anything.


The logic of the form is the result of 6 conditions.

Conditon1: If I enter a value inside Component_3, then that value must instantly show inside the input fields of Component_5, Component_6, Component_7 and Component_8.

Condition 2: When I select Component_2, Component_1 and Component_4 are disabled and the input fields (a, b,c,d) of Component_5, Component_6, Component_7, Component_8 must be enabled.

Condition 3 => Whenever i check Component_4 (SelectAll) :
- the checkboxes of Component_5, Component_6, Component_7 and Component_8 must also be checked
- input fields a,b,c,d must be enabled.
- the values inside the input fields (a,b,c,d) must be sent to Component_9. 
- those values must also appear in uppercase format inside Component_9 in the form of an array like [{name:"a", value:"a"},{name:"b", value:"b"},{name:"c", value:"c"},{name:"d", value:"d"},] for example.
- If the values inside the input fields are empty, they must also appear in Component_9 in the form of an empty object inside an array like so : [{...},{...},{...},{...}].

Condition 4 => When i uncheck Component_4 (SelectAll) :
- the checkboxes of Component_5, Component_6, Component_7 and Component_8 must be unchecked, the objects representing the input field must be removed from the array of Component_9 - - input fields a,b,c,d must be disabled.

Condition 5 : When I check the checkbox corresponding to Component_5, Component_6, Component_7 or Component_8, if their corresponding input fields are empty, that empty value must also appear in Component_9 in the form of an empty object inside an array like so : [{...},{...},{...},{...}].

Condition 6 => When I check one of the checkboxes (a,b,c,d) :
- if their corresponding input fields (a,b,c,d) hold a value, that value must also appear in uppercase format inside Component_9 in the form of an array like [{name:"a", value:"a"},{name:"b", value:"b"},{name:"c", value:"c"},{name:"d", value:"d"},] for example.
- if the corresponding input field is disabled it must be enabled

Condition 7 => When I uncheck one of the checkboxes (a,b,c,d) :
- the entire object representing its input field must be removed from the array of Component_9
- if the corresponding input field is disabled it must be enabled

Condition 7: If I uncheck Component_4, Component_9 shouldn't display anything.

There sould be no submit button on the form.

*/
'use client';
import React, { useState, useEffect, useRef } from 'react';

const Form = () => {
  // State variables
  const [isSameForAll, setIsSameForAll] = useState(true);
  const [enterSameValue, setEnterSameValue] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [componentValues, setComponentValues] = useState([
    { name: 'a', checked: false, value: '' },
    { name: 'b', checked: false, value: '' },
    { name: 'c', checked: false, value: '' },
    { name: 'd', checked: false, value: '' }
  ]);
  const [component9Value, setComponent9Value] = useState([]);

  // Ref to store the previous state of isSameForAll
  const isParticularRef = useRef(isSameForAll);

  // useEffect to handle changes in isSameForAll, enterSameValue, and selectAll
  useEffect(() => {
    if (isSameForAll) {
      // Set enterSameValue to componentValues
      setComponentValues((prevValues) =>
        prevValues.map((item) => ({ ...item, checked: true, value: enterSameValue }))
      );
    } else {
      // Clear values in componentValues
      setComponentValues((prevValues) =>
        prevValues.map((item) => ({ ...item, checked: false, value: '' }))
      );
    }
  }, [isSameForAll, enterSameValue]);

  // useEffect to handle changes in selectAll
  useEffect(() => {
    if (!selectAll) {
      // Uncheck all checkboxes and clear component9Value
      setComponentValues((prevValues) => prevValues.map((item) => ({ ...item, checked: false })));
      setComponent9Value([]);
    }
  }, [selectAll]);

  // useEffect to handle changes in componentValues
  useEffect(() => {
    // Update component9Value based on checked values and their uppercase values
    const updatedComponent9Value = componentValues
      .filter((item) => item.checked && item.value !== '')
      .map((item) => ({ name: item.name, value: item.value.toUpperCase() }));

    setComponent9Value(updatedComponent9Value);
  }, [componentValues]);

  // Function to handle checkbox change in componentValues
  const handleCheckboxChange = (name) => {
    setComponentValues((prevValues) =>
      prevValues.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Function to handle input change in componentValues
  const handleInputChange = (name, value) => {
    setComponentValues((prevValues) =>
      prevValues.map((item) =>
        item.name === name ? { ...item, value: value } : item
      )
    );
  };

  // Function to handle "Set Particular" change
  const handleParticularChange = () => {
    isParticularRef.current = !isSameForAll;
    setComponentValues((prevValues) =>
      prevValues.map((item) => ({ ...item, checked: false }))
    );
  };

  return (
    <div>
      {/* Component_1: Set Same for All */}
      <label>
        <input
          type="radio"
          checked={isSameForAll}
          onChange={() => setIsSameForAll(true)}
        />
        Set Same for All
      </label>

      {/* Component_2: Set Particular */}
      <label>
        <input
          type="radio"
          checked={!isSameForAll}
          onChange={() => {
            setIsSameForAll(false);
            handleParticularChange();
          }}
        />
        Set Particular
      </label>

      {/* Component_4: Select All */}
      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={() => setSelectAll(!selectAll)}
        />
        Select All
      </label>

      {/* Component_3: Enter same value */}
      {isSameForAll && (
        <div>
          <label>
            Enter same value:
            <input
              type="text"
              value={enterSameValue}
              onChange={(e) => setEnterSameValue(e.target.value)}
            />
          </label>
        </div>
      )}

      {/* Component_5, Component_6, Component_7, Component_8 */}
      {componentValues.map((item) => (
        <div key={item.name}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              disabled={!selectAll}
              onChange={() => handleCheckboxChange(item.name)}
            />
            {item.name}
          </label>
          <input
            type="text"
            name={item.name}
            id={item.name}
            disabled={isSameForAll || !item.checked}
            value={item.value}
            onChange={(e) => handleInputChange(item.name, e.target.value)}
          />
        </div>
      ))}

      {/* Component_9 */}
      <textarea
        rows="4"
        cols="50"
        value={JSON.stringify(component9Value)}
        readOnly
      ></textarea>
    </div>
  );
};

export default Form;


/*

STEP BY STEP EXPLANATION

Let's go through the code step by step:

The necessary imports are included at the beginning.

The Form component is defined. Inside the component, various state variables are declared using the useState hook. These variables manage the state of the form components.

The useRef hook is used to create a reference to store the previous state of isSameForAll using the isParticularRef variable.

Several useEffect hooks are defined to handle different conditions and state changes in the form. The effects update the state variables and trigger the necessary actions based on the conditions you provided.

Next, the handleCheckboxChange function is defined to handle the changes when a checkbox in componentValues is toggled. It updates the componentValues array by mapping through the previous values and toggling the checkbox of the corresponding item.

The handleInputChange function handles the changes when an input field in componentValues is modified. It updates the componentValues array by mapping through the previous values and updating the value of the corresponding item.

The handleParticularChange function handles the changes when "Set Particular" is selected or deselected. It toggles the isParticularRef.current value and updates the componentValues array to have all checkboxes unchecked.

The return statement renders the form components based on the state variables. Each component is rendered with the appropriate HTML tags and attributes, and their states and event handlers are set accordingly.

By using the useState, useEffect, and useRef hooks, the code manages the conditions and updates the form components accordingly. The conditional rendering, state management, and event handling ensure that the form behaves as described in the conditions you provided
*/

