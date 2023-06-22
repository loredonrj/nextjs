//THIS THE MOST UNDESTANBLE IMPLEMENTATION KEEP IT AT ALL COST,JUST FIX WHAT IS NOT WORKING

'use client'

import React, { useState } from 'react';

export default function Form() {
  const [radioBtn1Selected, setRadioBtn1Selected] = useState(false);
  const [radioBtn2Selected, setRadioBtn2Selected] = useState(false);
  const [hasInputValue, setHasInputValue] = useState(true);
  const [input3Value, setInput3Value] = useState('');
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { label: 'a', input: '', checked: false },
    { label: 'b', input: '', checked: false },
    { label: 'c', input: '', checked: false },
    { label: 'd', input: '', checked: false },
  ]);

  const [rows, setRows] = useState([
    { name: 'A', id: 1, input: '' },
    { name: 'B', id: 2, input: '' },
    { name: 'C', id: 3, input: '' },
    { name: 'D', id: 4, input: '' },
  ]);

  let [selectedRows, setSelectedRows] = useState([]);

  // "Set Same for All" Handler
  const handleRadioBtn1Change = () => {
    setRadioBtn1Selected(true);
    setRadioBtn2Selected(false);
    setHasInputValue(true);
    setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: true })));
    setSelectedRows(rows);
  };

  // "Set Particular" Handler
  const handleRadioBtn2Change = () => {
    setRadioBtn1Selected(false);
    setRadioBtn2Selected(true);
    setHasInputValue(false);
    setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: false })));
    setSelectedRows([]);
  };

  // Input3 Value Change Handler
  const handleInput3Change = (e) => {
    setInput3Value(e.target.value);
    setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, input: e.target.value })));
    setRows(rows.map((row) => ({ ...row, input: e.target.value })));
  };

  // Checkbox4 Change Handler
  const handleCheckbox4Change = (e) => {
    const checked = e.target.checked;
    setCheckbox4Checked(checked);
    setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: checked })));
    if (checked) {
      setSelectedRows(rows);
      console.log(
        selectedRows.map((row) => ({ name: row.name, value: row.input.toUpperCase() }))
      );
    } else {
      setSelectedRows([]);
      console.clear();
    }
  };

  // Checkbox Change Handler for Row_1, Row_2, Row_3, Row_4
  const handleCheckboxChange = (label) => (e) => {
    const checked = e.target.checked;
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.label === label ? { ...checkbox, checked: checked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);

    if (checked) {
      const selectedRow = rows.find((row) => row.name === label);
      setSelectedRows([...selectedRows, selectedRow]);
      if (selectedRow.input) {
        console.log({ name: selectedRow.name, value: selectedRow.input.toUpperCase() });
      }
    } else {
      setSelectedRows(selectedRows.filter((row) => row.name !== label));
      console.clear();
    }
  };

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
            checked={checkbox4Checked}
            onChange={handleCheckbox4Change}
          />
          Select All
        </label>
      </div>

      {rows.map((row) => (
  <div key={row.id}>
    <label>
      <input
        type="checkbox"
        checked={checkboxes.find((checkbox) => checkbox.label === row.name)?.checked || false}
        onChange={handleCheckboxChange(row.name)}
      />
      {row.name}
    </label>
  </div>
))}
    </div>
  );
}
