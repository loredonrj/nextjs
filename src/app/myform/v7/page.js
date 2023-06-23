'use client'
import React, { useState, useEffect } from 'react';

export default function Form() {
  const [radioBtn, setRadioBtn] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false }
  ]);

  const [sameForAllInput, setSameForAllInput] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, checked: false, label: 'Row 1', disabled: false, value: '' },
    { id: 2, checked: false, label: 'Row 2', disabled: false, value: '' },
    { id: 3, checked: false, label: 'Row 3', disabled: false, value: '' },
    { id: 4, checked: false, label: 'Row 4', disabled: false, value: '' }
  ]);

  let [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    if (radioBtn[0].selected) {
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          value: sameForAllInput
        }))
      );
    }
  }, [sameForAllInput, radioBtn]);

  const handleRadioBtnChange = (event) => {
    const value = parseInt(event.target.value);
    const updatedRadioBtn = radioBtn.map((btn) => ({
      ...btn,
      selected: btn.id === value
    }));
    setRadioBtn(updatedRadioBtn);

  };

  const handleInput3Change = (event) => {
    setSameForAllInput(event.target.value);
    if (radioBtn[0].selected) {
      setRows((prevRows) =>
        prevRows.map((row) => ({ ...row, value: event.target.value}))
      );
    }
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setRows((prevRows) =>
      prevRows.map((row) => ({ ...row, checked }))
    );
  };

const handleParticular = (event, id) =>{
  if ((radioBtn[1].selected)){
    const findRow = rows?.filter((el) => el.id === id);
    const newRowData = [];
    /*
    
    */
    setRows((prevRows) =>
    prevRows.map((row) => ({ ...row, disabled: false}))
      );
    };
  }

  const handleRowCheckboxChange = (event, row) => {
    const checked = event.target.checked;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === row.id ? { ...row, checked } : row))
    );
  };

  const handleRowInputChange = (event, row) => {
    const value = event.target.value;
    setRows((prevRows) =>
      prevRows.map((r) =>
        r.id === row.id ? { ...r, value: value } : r
      )
    );
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            checked={radioBtn[0].selected}
            onChange={handleRadioBtnChange}
            value={radioBtn[0].id}
          />
          Set Same for All
        </label>
        <label>
          <input
            type="radio"
            checked={radioBtn[1].selected}
            onChange={handleRadioBtnChange}
            value={radioBtn[1].id}
          />
          Set Different for Each
        </label>
      </div>
      {radioBtn[0].selected && (
        <div>
          <label>
            Input 3:
            <input
              type="text"
              value={sameForAllInput}
              onChange={handleInput3Change}
            />
          </label>
        </div>
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          Select All
        </label>
      </div>
      <div>
        {rows.map((row) => (
          <div key={row.id}>
            <label>
              <input
                type="checkbox"
                checked={row.checked}
                onChange={(event) => handleRowCheckboxChange(event, row)}
              />
              {row.label}:
              <input
                type="text"
                disabled={row.disabled}
                value={row.checked ? row.value : sameForAllInput}
                onChange={(event) => {handleParticular(event, item?.id);
                }}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}


