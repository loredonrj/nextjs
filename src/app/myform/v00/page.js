import React, { useState, useEffect, useRef } from "react";

const Form = () => {
  
  // State for radio buttons
  const [rbSameForAllSelected, SetRbSameForAllSelected] = useState(false);
  const [rbSetParticularSelected, SetRbSetParticularSelected] = useState(false);

  // State for SetSame Input field
  const [ibSetSameValue, SetibSetSameValue] = useState('');

  // State for cbSelectAll Checkbox
  const [cbSelectAllChecked, SetCbSelectAllChecked] = useState(false);

  // State for RowA input and checkbox fields
  const [checkBoxA, SetCheckboxA] = useState({ input_type:'checkbox', name: "a",  label:'a', checked: false, value: '' });
  const [textBoxA, SettextBoxA] = useState({ input_type: 'textbox', name: "a", value: '' });


  // State for Textarea
  const [textAreaValues, SeTextAreaValues] = useState([]);



  useEffect(() => {
    if (isParticular) {
      setEnterSameValue("");
    }
  }, [isParticular]);

  useEffect(() => {
    if (enterSameValue !== "") {
      const updatedComponentValues = componentValues.map((componentValue) => {
        return {
          ...componentValue,
          value: enterSameValue,
        };
      });
      setComponentValues(updatedComponentValues);
    }
  }, [enterSameValue]);

  useEffect(() => {
    if (selectAll) {
      setIsSameForAll(true);
      setIsParticular(false);
      setEnterSameValue("");
    }
  }, [selectAll]);

  const handleCheckboxChange = (event, name) => {
    const isChecked = event.target.checked;
    const updatedComponentValues = componentValues.map((componentValue) => {
      if (componentValue.name === name) {
        return {
          ...componentValue,
          checked: isChecked,
        };
      }
      return componentValue;
    });
    setComponentValues(updatedComponentValues);
  };

  const handleInputChange = (event, name) => {
    const updatedComponentValues = componentValues.map((componentValue) => {
      if (componentValue.name === name) {
        return {
          ...componentValue,
          value: event.target.value.toUpperCase(),
        };
      }
      return componentValue;
    });
    setComponentValues(updatedComponentValues);
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
  };

  const handleComponent5CheckboxChange = (event) => {
    handleCheckboxChange(event, "a");
  };

  const handleComponent6CheckboxChange = (event) => {
    handleCheckboxChange(event, "b");
  };

  const handleComponent7CheckboxChange = (event) => {
    handleCheckboxChange(event, "c");
  };

  const handleComponent8CheckboxChange = (event) => {
    handleCheckboxChange(event, "d");
  };

  const handleComponent5InputChange = (event) => {
    handleInputChange(event, "a");
  };

  const handleComponent6InputChange = (event) => {
    handleInputChange(event, "b");
  };

  const handleComponent7InputChange = (event) => {
    handleInputChange(event, "c");
  };

  const handleComponent8InputChange = (event) => {
    handleInputChange(event, "d");
  };

  useEffect(() => {
    if (!isSameForAll) {
      setComponentValues([]);
    }
  }, [isSameForAll]);

  useEffect(() => {
    if (isSameForAll) {
      setComponentValues([
        { name: "a", checked: false, value: enterSameValue.toUpperCase() },
        { name: "b", checked: false, value: enterSameValue.toUpperCase() },
        { name: "c", checked: false, value: enterSameValue.toUpperCase() },
        { name: "d", checked: false, value: enterSameValue.toUpperCase() },
      ]);
    }
  }, [isSameForAll, enterSameValue]);



  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          <input
            type="radio"
            checked={isSameForAll}
            onChange={() => setIsSameForAll(true)}
          />
          Set Same for All
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            checked={isParticular}
            onChange={() => setIsParticular(true)}
          />
          Set Particular
        </label>
      </div>
      {isSameForAll && (
        <div>
          <label>
            Enter same value:
            <input
              type="text"
              value={enterSameValue}
              onChange={(event) => setEnterSameValue(event.target.value)}
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
        <label>
          <input
            type="checkbox"
            checked={
              componentValues.find((c) => c.name === "a")?.checked || false
            }
            onChange={handleComponent5CheckboxChange}
          />
          a
        </label>
        <input
          type="text"
          disabled={!componentValues.find((c) => c.name === "a")?.checked}
          value={componentValues.find((c) => c.name === "a")?.value || ""}
          onChange={handleComponent5InputChange}
          ref={component5Ref}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={
              componentValues.find((c) => c.name === "b")?.checked || false
            }
            onChange={handleComponent6CheckboxChange}
          />
          b
        </label>
        <input
          type="text"
          disabled={!componentValues.find((c) => c.name === "b")?.checked}
          value={componentValues.find((c) => c.name === "b")?.value || ""}
          onChange={handleComponent6InputChange}
          ref={component6Ref}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={
              componentValues.find((c) => c.name === "c")?.checked || false
            }
            onChange={handleComponent7CheckboxChange}
          />
          c
        </label>
        <input
          type="text"
          disabled={!componentValues.find((c) => c.name === "c")?.checked}
          value={componentValues.find((c) => c.name === "c")?.value || ""}
          onChange={handleComponent7InputChange}
          ref={component7Ref}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={
              componentValues.find((c) => c.name === "d")?.checked || false
            }
            onChange={handleComponent8CheckboxChange}
          />
          d
        </label>
        <input
          type="text"
          disabled={!componentValues.find((c) => c.name === "d")?.checked}
          value={componentValues.find((c) => c.name === "d")?.value || ""}
          onChange={handleComponent8InputChange}
          ref={component8Ref}
        />
      </div>
      <div>
        <textarea value={JSON.stringify(componentValues)} readOnly />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;