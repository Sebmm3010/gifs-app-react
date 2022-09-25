import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit=(e)=>{
        const cateValue = inputValue.trim() 
        e.preventDefault();
        if( cateValue.length <1 ) return;
        onNewCategory(cateValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
