import React from "react";

const FilterPrice = ({setObjFilterPrice}) => {

    const submit = e => {
        e.preventDefault();
        const obj = {
            from: +e.target.fromPrice.value,
            to: +e.target.toPrice.value
        }
        setObjFilterPrice(obj)
    }


  return (
    <form onSubmit={submit}>
      <ul>
        <li>
          <label htmlFor="fromPrice">From</label>
          <input type="number" id="fromPrice" name="fromPrice"/>
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="toPrice">To</label>
          <input type="number" id="toPrice" name="toPrice"/>
        </li>
      </ul>
      <button>Filter Price</button>
    </form>
  );
};

export default FilterPrice;
