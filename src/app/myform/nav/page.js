'use client'
import React, { useEffect, useState } from "react";

import CustomCheckbox from "src/app/components/forms/checkbox_custom.js";
import CustomInput from "src/app/components/forms/input_custom.js";
export default function Form() {
  const [selectAll, setSelectAll] = useState(true);
  const [isFlatPayout, setIsFlatPayout] = useState(true); //isFlatPayout = isSameValueForAll (bool) - payout= particular percentage = value
  const [flatValue, setFlatValue] = useState(""); //flatValue = sameValueforall (number or string)

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

  //Get subproducts list

  useEffect(() => {
    getSubProductsList();
  }, []);

  const getSubProductsList = () => {
    //define function to get subproducts list
    return;
  };

  // select all
  const handleBulkSelect = () => {
    if (selectAll) {
      const newdata = subProducts.map((el) => {
        const findIndex = selectedSubProducts.findIndex(
          (e) => e.sub_product_id === el?.id
        );
        return {
          sub_product_id: el?.id,
          percentage: flatValue //percentage = payout = value entered in individual row input field
            ? Number(flatValue)
            : selectedSubProducts[findIndex]?.percentage,
        };
      });
      setSelectedSubProducts(newdata);
    } else {
      setSelectedSubProducts([]);
    }
  };

  // Handles the value (percentage, payout) the user will enter inside the input field. it some requirement on the value entered if necessary)

  const setTresholdValue = (val) => { //
    if (selectedSubProducts.length <= 0) {
      console.log("error msg: Please select Subproducts first");
    }
    for (let i = 0; i < subProducts?.length; i++) {
      if (val > subProducts[i].threshold) {
        console.log(
          "error msg: Threshold value should be less than subproduct threshold"
        );
        break;
      }
    }
    selectedSubProducts.forEach((item, index) => {
      selectedSubProducts[index].percentage = val ? Number(val) : flatValue;
    });
  };

  // this is to manage particular rows (subproduct) (a, b, c, d)

  const handleParticularProduct = (e, id) => {
    //actually handleParticularSubProduct!
    if (e.detail.checked) {
      const findProduct = subProducts?.filter((el) => el.id === id);
      const newProductData = [];
      newProductData.push(...selectedSubProducts, {
        sub_product_id: findProduct[0]?.id,
        percentage: flatValue ? Number(flatValue) : "",
      });
      setSelectedSubProducts(newProductData);
    } else {
      const data = selectedSubProducts?.filter((i) => i.sub_product_id !== id);
      setSelectedSubProducts(data);
    }
  };

  const handleParticalProductPayout = (e, id) => {
    // this handles the individual row(subproduct)'s value (payout) of the input fields a, b, c, d
    if (selectedSubProducts.length <= 0) {
      console.log("error msg");
    }
    for (let i = 0; i < subProducts?.length; i++) {
      if (e.target.value > subProducts[i].threshold) {
        console.log("error msg");
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
        <div key={index}>
          <div>
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
            onChange={(e) => {
              handleParticalProductPayout(e, item?.id);
            }}
          />
        </div>
      );
    })
  );
};
