import CreatableSelect from "react-select/creatable";

export const ComponenteCotacao = () => {


    const handleChange = (selectedOption, actionMeta) => {
        // Call the callback function with the selected options
        props.onLanguageChange(selectedOption);
        console.log("handleChange", selectedOption, actionMeta);
      };
    
      
      
  const options = [
    { value: "alemão", label: "Alemão", color: "#FF8B00" },
    { value: "português", label: "Português", color: "#36B37E" },
    { value: "inglês", label: "Inglês", color: "#0052CC" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (
    <CreatableSelect
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
    />
  );
}