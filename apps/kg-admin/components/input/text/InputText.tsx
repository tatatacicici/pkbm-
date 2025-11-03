import { TextInput } from '../../../types';
import React from 'react';

const InputText = ({ id, placeholder, title, name, value, readonly, hidden, required }: TextInput) => {
  return (
    <div>
      <label htmlFor="tags" hidden={hidden}>
        {title}
        <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="text"
        id={id}
        className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md mt-"
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readonly}
        hidden={hidden}
        required={required}
      />
    </div>
  );
};

export default InputText;
