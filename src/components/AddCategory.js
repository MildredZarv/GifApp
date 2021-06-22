import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( props ) => {
    const { setCategory } = props;
    const [inputValue, setinputValue] = useState('');
    const handleInputValue = (e) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 1 ) {
            setCategory( cats => [ inputValue, ...cats]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                placeholder = 'Add a new category'
                onChange = { handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = { 
    setCategory: PropTypes.func.isRequired,
}
