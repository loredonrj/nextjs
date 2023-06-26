'use client'
import React, { useState } from "react";

import CustomCheckbox from "src/app/components/forms/checkbox_custom.js";
import CustomInput from "src/app/components/forms/input_custom.js";
export default function Form() {

  const [selectAll, setSelectAll] = useState(true);
  const [isFlatPayout, setIsFlatPayout] = useState(true);
  const [flatValue, setFlatValue] = useState('');

  const [subProducts, setSubProducts] = useState([
    {
      sub_product_name: "a",
      sub_product_id: 1,
      threshold: 12,
    },
    {
      sub_product_name: "b",
      sub_product_id: 2,
      threshold: 12,
    },
    {
      sub_product_name: "c",
      sub_product_id: 3,
      threshold: 12,
    },
    // Add other subProducts here
  ]);

  let [selectedSubProducts, setSelectedSubProducts] = useState([]);

  // select all
  const handleBulkSelect = () => {
    if (selectAll) {
      const newdata = subProducts.map((el) => {
        const findIndex = selectedSubProducts.findIndex(
          (e) => e.sub_product_id === el?.id
        );
        return {
          sub_product_id: el?.id,
          percentage: flatValue
            ? Number(flatValue)
            : selectedSubProducts[findIndex]?.percentage,
        };
      });
      setSelectedSubProducts(newdata);
    } else {
      setSelectedSubProducts([]);
    }
  };


  // this is to manager for particulars

  const handleParticularProduct = (e, id) => {
    if (e.detail.checked) {
      const findProduct = subProducts?.filter((el) => el.id === id);
      const newProductData = [];
      newProductData.push(...selectedSubProducts, {
        sub_product_id: findProduct[0]?.id,
        percentage: flatValue ? Number(flatValue) : '',
      });
      setSelectedSubProducts(newProductData);
    } else {
      const data = selectedSubProducts?.filter(
        (i) => i.sub_product_id !== id
      );
      setSelectedSubProducts(data);
    }
  };




  const handleParticalProductPayout = (e, id) => {
    if (selectedSubProducts.length <= 0) {
      console.log('error msg');
    }
    for (let i = 0; i < subProducts?.length; i++) {
      if (e.target.value > subProducts[i].threshold) {
        console.log('error msg');
        break;
      }
    }
    const findIndex = selectedSubProducts.findIndex(
      (el) => el.sub_product_id === id
    );
    const data = selectedSubProducts;
    const row = data[findIndex];
    row.percentage = Number(e.target.value);
    setSelectedSubProducts([...data]);
  };
  console.log(selectedSubProducts);



  //jsx part


  return (
      
    subProducts &&
    subProducts?.map((item, index) => {
      const findIndex = selectedSubProducts.findIndex(
        (el) => el.sub_product_id === item?.id
      );
      const constant = isFlatPayout
        ? flatValue
        : selectedSubProducts[findIndex]?.percentage;
      return (
        
      <div
        key={index}
        className='d-flex gap-3 align-items-center'
      >
        <div className='d-flex w-75 gap-3 align-items-cente'>
          <CustomCheckbox
            isChecked={selectedSubProducts.some(
              (el) => el.sub_product_id === item?.id
            )}
            onChange={(e) => {
              handleParticularProduct(e, item?.id);
            }}
          />
          {item?.sub_product_name}
        </div>
        <CustomInput
          className='w-auto my-0'
          value={constant}
          disabled={
            !isFlatPayout &&
              selectedSubProducts.some(
                (el) => el.sub_product_id === item?.id
              ) === true
              ? false
              : isFlatPayout
                ? true
                : true
          }
          needSuffixIcon={true}
          onChange={(e) => {
            handleParticalProductPayout(e, item?.id);
          }}
          suffixText={'%'}
        />
      </div>
    )}
      )  )
};
