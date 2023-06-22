'use client'
import React, { useState } from 'react';

export default function Form() {
  const [radioBtn1Selected, setRadioBtn1Selected] = useState(false);
  const [radioBtn2Selected, setRadioBtn2Selected] = useState(false);
  const [input3Value, setInput3Value] = useState('');
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { label: 'a', checked: false },
    { label: 'b', checked: false },
    { label: 'c', checked: false },
    { label: 'd', checked: false },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

  // "Set Same for All" Handler
  const handleRadioBtn1Change = () => {
    setRadioBtn1Selected(true);
    setRadioBtn2Selected(false);
  };

  // "Set Particular" Handler
  const handleRadioBtn2Change = () => {
    setRadioBtn1Selected(false);
    setRadioBtn2Selected(true);
  };

  // Input3 Value Change Handler
  const handleInput3Change = (e) => {
    const inputValue = e.target.value;
    setInput3Value(inputValue);
  };

  // Checkbox4 Change Handler
  const handleCheckbox4Change = (e) => {
    const checked = e.target.checked;
    setCheckbox4Checked(checked);

    if (checked) {
      setSelectedRows(checkboxes);
      const selectedRowValues = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => ({ name: checkbox.label, value: input3Value.toUpperCase() }));
      console.log(selectedRowValues);
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
      const selectedRow = checkboxes.find((row) => row.label === label);
      setSelectedRows((prevRows) => [...prevRows, selectedRow]);
  
      if (input3Value) {
        console.log({ name: selectedRow.label, value: input3Value.toUpperCase() });
      }
    } else {
      setSelectedRows((prevRows) => prevRows.filter((row) => row.label !== label));
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

      {checkboxes.map((checkbox) => (
        <div key={checkbox.label}>
          <label>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={handleCheckboxChange(checkbox.label)}
            />
            {checkbox.label}
            <input
              type="text"
              disabled={!checkbox.checked}
              value={checkbox.checked ? input3Value : ''}
              onChange={handleInput3Change}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
