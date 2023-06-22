//THIS THE MOST UNDESTANBLE IMPLEMENTATION KEEP IT AT ALL COST,JUST FIX WHAT IS NOT WORKING

'use client'

import React, { useState, useEffect } from 'react';

export default function Form() {

  const [radioBtn, setRadioBtn] = useState([
    { id:1, selected: false},
    { id:2, selected: false}
  ]);

  const [sameForAllInput, setSameForAllInput] =  useState([
    { isRendered: false, hasValue:false, value :''},
  ]);

  const [selectAll, setSelectAll] =  useState([
    { checked: false},
  ]);

  const [rows, setRows] = useState([
    { id:1, checked: false, label: 'a', sameForAllValue: sameForAllInput.value, particularValue:'' },
    { id:2, checked: false, label: 'b', sameForAllValue: sameForAllInput.value, particularValue:'' },
    { id:3, checked: false, label: 'c', sameForAllValue: sameForAllInput.value, particularValue:'' },
    { id:4, checked: false, label: 'd', sameForAllValue: sameForAllInput.value, particularValue:'' }
  ]);

  let [selectedRows, setSelectedRows] = useState([]);

  // Handlers

  /* Return JSX Example

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            checked={radioBtn1Selected}
            onChange={handleRadioBtn1Change}
          />
          Set Same for All
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={radioBtn2Selected}
            onChange={handleRadioBtn2Change}
          />
          Set Particular
        </label>
      </div>

      {radioBtn1Selected && (
        <div>
          <label>Enter same value:</label>
          <input
            type="text"
            value={input3Value}
            onChange={handleInput3Change}
          />
        </div>
      )}

      <div>
        <label>
          <input
            type="checkbox"
            checked={}
            onChange={}
          />
          Select All
        </label>
      </div>

      {rows.map((row) => (
  <div key={row.id}>
    <label>
      <input
        type="checkbox"
        checked={}
        onChange={}
      />
      {row.label}
      <input
          type="text"
          disabled= {}
          value={}
          onChange={}
        />
    </label>
  </div>
))}
    </div>
);
*/