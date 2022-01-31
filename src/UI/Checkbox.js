import React from "react";

const Checkbox = props => {
    
    const onChangeHandler = (event) => {
        props.onChange(event.target.value, event.target.checked)
    }


    return <div className={props.className}>
        <label>
            {props.label}
            <input value={props.label} type="checkbox" onChange={onChangeHandler} />
        </label>
    </div>
};

export default Checkbox;