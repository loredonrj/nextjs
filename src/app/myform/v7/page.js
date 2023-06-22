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
    { id: 1, checked: false, label: 'Row 1', particularValue: '' },
    { id: 2, checked: false, label: 'Row 2', particularValue: '' },
    { id: 3, checked: false, label: 'Row 3', particularValue: '' },
    { id: 4, checked: false, label: 'Row 4', particularValue: '' }
  ]);

  useEffect(() => {
    if (radioBtn[0].selected) {
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          particularValue: sameForAllInput
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

    if (value === 2) {
      setSameForAllInput('');
    }
  };

  const handleInput3Change = (event) => {
    setSameForAllInput(event.target.value);
    if (radioBtn[0].selected) {
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          particularValue: event.target.value
        }))
      );
    }
  };

  const handleCheckboxChange = (event, rowId) => {
    const checked = event.target.checked;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, checked } : row
      )
    );
  };

  const handleInputChange = (event, rowId) => {
    const value = event.target.value;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, particularValue: value } : row
      )
    );
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setRows((prevRows) =>
      prevRows.map((row) => ({ ...row, checked }))
    );
  };

  const handleRowCheckboxChange = (event, row) => {
    const checked = event.target.checked;
    setRows((prevRows) =>
      prevRows.map((r) => (r.id === row.id ? { ...r, checked } : r))
    );
  };

  const handleRowInputChange = (event, row) => {
    const value = event.target.value;
    setRows((prevRows) =>
      prevRows.map((r) =>
        r.id === row.id ? { ...r, particularValue: value } : r
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
                disabled={!row.checked}
                value={row.checked ? row.particularValue : ''}
                onChange={(event) => handleRowInputChange(event, row)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}


