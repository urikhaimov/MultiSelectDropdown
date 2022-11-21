import React, { useState, useEffect } from 'react';
import Input from '../Input';
import RenderList from './RenderList';
import './style.css';

const MultiSelectDropdown = ({ options, isMulti = false, onChange, placeHolder, noItemsText }) => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([])

  useEffect(() => {
    setSelectedOptions(options.map((a) => a.label).reduce((acc, curr) => (acc[curr] = false, acc), {}))
  }, [options]);

  useEffect(() => {
    onChange(selectedOptions)
  }, [selectedOptions]);

  const onCheck = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions((state) => {
      state[name] = checked;
      return { ...state }
    })
  }

  const onSelect = (name) => {
    setSelectedOptions((state) => {
      let newState = {};
      for (const property in state) {
        newState[property] = property === name ? true : false;
      }
      return newState;
    }, setToggle(false))
  }
  const SelectAll = () => {
    setSelectedOptions((state) => {
      let newState = {};
      for (const property in state) {
        newState[property] = true;
      }
      return newState;
    })
  }

  const DeselectAll = () => {
    setSelectedOptions((state) => {
      let newState = {};
      for (const property in state) {
        newState[property] = false;
      }
      return newState;
    })
  }


  const selected = Object.keys(selectedOptions).filter((x) => selectedOptions[x]);

  return (
    <>
      <div className='multi-select-drop-down'>
        <div className='flex'><Input
          onChange={(inputValue) => { setValue(inputValue); setToggle(true) }}
          onClick={() => { setToggle(true) }}
          value={value}
          placeHolder={placeHolder}
        /><a className='arrow' onClick={() => { setToggle(!toggle) }}></a></div>
        <RenderList
          value={value}
          options={options}
          toggle={toggle}
          onCheck={onCheck}
          onSelect={onSelect}
          SelectAll={SelectAll}
          DeselectAll={DeselectAll}
          selectedOptions={selectedOptions}
          isMulti={isMulti}
          noItemsText={noItemsText}
        />

      </div>
    </>
  );
}
export default MultiSelectDropdown;  