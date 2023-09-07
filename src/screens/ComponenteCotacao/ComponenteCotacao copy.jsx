import React from 'react';
import CreatableSelect from "react-select/creatable";
import "./style.css";

export const ComponenteCotacao = ({ onLanguageChange }) => {
  const options = [
    { value: "alemão", label: "Alemão", color: "#FF8B00" },
    { value: "português", label: "Português", color: "#36B37E" },
    { value: "inglês", label: "Inglês", color: "#0052CC" },
  ];

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: data.color,
      color: "#fff",
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#fff",
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    }),
  };

  const handleChange = (selectedOption, actionMeta) => {
    // Call the callback function with the selected options
    onLanguageChange(selectedOption);
    console.log("handleChange", selectedOption, actionMeta);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  return (

    <CreatableSelect
    className="cotationn"
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
    />


  );
};
