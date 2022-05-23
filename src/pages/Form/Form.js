import React from 'react';
import { useLocation } from "react-router-dom";

const Form = () => {
    const { name, fields } = useLocation().state;

    return (
        <form className='container mt-5'>
            <h2>{name}</h2>

            {fields.map(item => (
                <div className="form-group">
                    <label htmlFor={item.name}>Email address</label>
                    <input
                        type={item.dataType}
                        required={item.required}
                        className="form-control"
                        placeholder={`${item.name}ınızı giriniz.`}
                    />
                </div>
            ))}

            <button className="btn btn-primary">Gönder</button>
        </form>
    );
};

export default Form;