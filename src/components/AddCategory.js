import React, {useState} from 'react';
import PropTypes from 'prop-types';


// Se hace una destructuracion en el argumento de nuestra variable, para ahorrarnos el props.setCategories()
export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if(inputValue.trim().length > 2) {
      setCategories(cats => [ inputValue, ...cats ]);
      setInputValue('');
    }
  }

  return (
    // <>
      // <h1> {inputValue} </h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
    // </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
