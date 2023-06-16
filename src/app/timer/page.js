'use client'
import React, {useState, useEffect} from 'react';

export default function Timer() {
    const [counter, setCounter] = useState(20);
  
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  
    return <div> Countdown: {counter}</div>;
  }