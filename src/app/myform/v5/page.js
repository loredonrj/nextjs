
////myform/v5 (from Navdeep's implementation)

'use client'
import React, { useState} from 'react';

import CustomCheckbox from '@/app/components/forms/checkbox';

import CustomInput from '@/app/components/forms/input';

export default function Form() {

  const [rows, setRows] = useState([
    {
        "name": "A",
        "id": 1,
        "input": 0
    },
    {
        "name": "B",
        "id": 2,
        "input": 0
    },
    {
        "name": "C",
        "id": 3,
        "input": 0
    },
    {
        "name": "D",
        "id": 4,
        "input": 0
    },
    
]);

let [selectedRows, setSelectedRows] = useState([]);

// select all
const handleSetSameForAll = () => {
    if (selectAll) {
        const newRowData = rows.map((el) => {
            const findIndex = selectedRows.findIndex(
                (e) => e.id === el?.id
            );
            return {
                id: el?.id,
                input: inputValue
                    ? Number(inputValue)
                    : selectedRows[findIndex]?.input,
            };
        });
        setSelectedRows(newRowData);
    } else {
        setSelectedRows([]);
    }
};


// select particular

const handleParticularRow = (e, id) => {
    if (e.detail.checked) {
        const findRow = rows?.filter((el) => el.id === id);
        const newRowData = [];
        newRowData.push(...selectedRows, {
            id: findRow[0]?.id,
            input: inputValue ? Number(inputValue) : '',
        });
        setSelectedRows(newRowData);
    } else {
        const data = selectedRows?.filter(
            (i) => i.id !== id
        );
        setSelectedRows(data);
    }
};


const handleParticularRowValue = (e, id) => {
    if (selectedRows.length <= 0) {

    for (let i = 0; i < rows?.length; i++) {

        const findIndex = selectedRows.findIndex(
            (el) => el.id === id
        );
        
        const data = selectedRows;

        const row = data[findIndex];

        row.input = Number(e.target.value);

        setSelectedRows([...data]);


        console.log(selectedRows);

//JSX PART

    {rows &&
        rows?.map((item, index) => {
            const findIndex = selectedRows.findIndex(
                (el) => el.id === item?.id
            );
            const constant = hasInputValue
                ? inputValue
                : selectedRows[findIndex]?.input;)


    return (
        <div key={index}>

            <div>
                <CustomCheckbox
                    isChecked={selectedRows.some(
                        (el) => el.id === item?.id
                    )}
                    onChange={(e) => {
                        handleParticularRow(e, item?.id);
                    }}
                />
            {item?.name}
            <CustomInput
                value={constant}
                disabled={
                    !hasInputValue &&
                    selectedRows.some(
                        (el) => el.id === item?.id
                    ) === true
                        ? false
                        : hasInputValue
                        ? true
                        : true
                }
                onChange={(e) => {
                    handleParticularRowValue(e, item?.id);
                }}
            />
            </div>
        </div>
    );
}
