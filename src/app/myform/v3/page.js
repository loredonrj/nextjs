'use client';
import React, { useState, useEffect, useRef } from "react";

const Form = () => {
  const [component1Selected, setComponent1Selected] = useState(false);
  const [component2Selected, setComponent2Selected] = useState(false);
  const [component3Value, setComponent3Value] = useState("");
  const [component4Selected, setComponent4Selected] = useState(false);
  const [component5Checked, setComponent5Checked] = useState(false);
  const [component5Value, setComponent5Value] = useState("");
  const [component6Checked, setComponent6Checked] = useState(false);
  const [component6Value, setComponent6Value] = useState("");
  const [component7Checked, setComponent7Checked] = useState(false);
  const [component7Value, setComponent7Value] = useState("");
  const [component8Checked, setComponent8Checked] = useState(false);
  const [component8Value, setComponent8Value] = useState("");
  const [component9Value, setComponent9Value] = useState([]);

  const component5Ref = useRef(null);
  const component6Ref = useRef(null);
  const component7Ref = useRef(null);
  const component8Ref = useRef(null);

  useEffect(() => {
    // Condition 1: Update Component 5, 6, 7, and 8 values when Component 3 changes
    if (component3Value !== "") {
      setComponent5Value(component3Value);
      setComponent6Value(component3Value);
      setComponent7Value(component3Value);
      setComponent8Value(component3Value);
    }
  }, [component3Value]);

  useEffect(() => {
    // Condition 2: Disable Component 2 when Component 1 is selected
    if (component1Selected) {
      setComponent2Selected(false);
    }
  }, [component1Selected]);

  useEffect(() => {
    // Condition 3: Enable/disable Component 5, 6, 7, 8 based on Component 2 selection
    if (component2Selected) {
      component5Ref.current.disabled = false;
      component6Ref.current.disabled = false;
      component7Ref.current.disabled = false;
      component8Ref.current.disabled = false;
    } else {
      component5Ref.current.disabled = true;
      component6Ref.current.disabled = true;
      component7Ref.current.disabled = true;
      component8Ref.current.disabled = true;
    }
  }, [component2Selected]);

  useEffect(() => {
    // Condition 4: Update Component 9 when Component 4 is checked/unchecked
    if (component4Selected) {
      setComponent5Checked(true);
      setComponent6Checked(true);
      setComponent7Checked(true);
      setComponent8Checked(true);

      const updatedComponent9Value = [];

      if (component5Value !== "") {
        updatedComponent9Value.push({ name: "a", value: component5Value.toUpperCase() });
      }
      if (component6Value !== "") {
        updatedComponent9Value.push({ name: "b", value: component6Value.toUpperCase() });
      }
      if (component7Value !== "") {
        updatedComponent9Value.push({ name: "c", value: component7Value.toUpperCase() });
      }
      if (component8Value !== "") {
        updatedComponent9Value.push({ name: "d", value: component8Value.toUpperCase() });
      }

      setComponent9Value(updatedComponent9Value);
    } else {
      setComponent5Checked(false);
      setComponent6Checked(false);
      setComponent7Checked(false);
      setComponent8Checked(false);
      setComponent9Value([]);
    }
  }, [component4Selected, component5Value, component6Value, component7Value, component8Value]);

  useEffect(() => {
    // Condition 5: Update Component 9 when Component 5, 6, 7, or 8 is checked/unchecked
    const updatedComponent9Value = [];

    if (component5Checked && component5Value !== "") {
      updatedComponent9Value.push({ name: "a", value: component5Value.toUpperCase() });
    }
    if (component6Checked && component6Value !== "") {
      updatedComponent9Value.push({ name: "b", value: component6Value.toUpperCase() });
    }
    if (component7Checked && component7Value !== "") {
      updatedComponent9Value.push({ name: "c", value: component7Value.toUpperCase() });
    }
    if (component8Checked && component8Value !== "") {
      updatedComponent9Value.push({ name: "d", value: component8Value.toUpperCase() });
    }

    setComponent9Value(updatedComponent9Value);
  }, [component5Checked, component5Value, component6Checked, component6Value, component7Checked, component7Value, component8Checked, component8Value]);

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="component1"
            checked={component1Selected}
            onChange={() => {
              setComponent1Selected(true);
              setComponent2Selected(false);
            }}
          />
          Component 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="component1"
            checked={component2Selected}
            onChange={() => {
              setComponent1Selected(false);
              setComponent2Selected(true);
            }}
          />
          Component 2
        </label>
      </div>
      {component1Selected && (
        <div>
          <label>Enter same value:</label>
          <input
            type="text"
            value={component3Value}
            onChange={(e) => setComponent3Value(e.target.value)}
          />
        </div>
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={component4Selected}
            onChange={(e) => setComponent4Selected(e.target.checked)}
            disabled={component2Selected}
          />
          Select All
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={component5Checked}
            onChange={(e) => setComponent5Checked(e.target.checked)}
            disabled={!component4Selected}
          />
          a
        </label>
        <input
          type="text"
          ref={component5Ref}
          value={component5Value}
          onChange={(e) => setComponent5Value(e.target.value)}
          disabled={!component5Checked}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={component6Checked}
            onChange={(e) => setComponent6Checked(e.target.checked)}
            disabled={!component4Selected}
          />
          b
        </label>
        <input
          type="text"
          ref={component6Ref}
          value={component6Value}
          onChange={(e) => setComponent6Value(e.target.value)}
          disabled={!component6Checked}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={component7Checked}
            onChange={(e) => setComponent7Checked(e.target.checked)}
            disabled={!component4Selected}
          />
          c
        </label>
        <input
          type="text"
          ref={component7Ref}
          value={component7Value}
          onChange={(e) => setComponent7Value(e.target.value)}
          disabled={!component7Checked}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={component8Checked}
            onChange={(e) => setComponent8Checked(e.target.checked)}
            disabled={!component4Selected}
          />
          d
        </label>
        <input
          type="text"
          ref={component8Ref}
          value={component8Value}
          onChange={(e) => setComponent8Value(e.target.value)}
          disabled={!component8Checked}
        />
      </div>
      <div>
        <textarea rows="4" cols="50" readOnly value={JSON.stringify(component9Value)} />
      </div>
    </div>
  );
};

export default Form;
