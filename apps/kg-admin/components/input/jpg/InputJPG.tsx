'use client';

import { JPGInput } from '../../../types';
import React, { useState } from 'react';

const InputJPG = ({ id, title, htmlfor }: JPGInput) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.toLowerCase();
      const typeOfFile = fileType;
      console.log(typeOfFile);

      if (fileType === 'image/jpeg' || fileType === 'image/jpg') {
        // Valid JPG file selected
        setSelectedFile(file);
      } else {
        // Invalid file type selected
        alert('Please select a valid JPG file.');
        event.target.value = null; // Reset the input
      }
    }
  };

  return (
    <div>
      <label htmlFor={htmlfor}>
        {title}
        <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="file"
        id={id}
        className="relative w-full overflow-hidden pl-[120px] border-2 border-[#e5e5e5] py-2 rounded-md file:bg-primary-base file:text-white file:border-0 file:absolute file:left-0 file:bottom-0 file:top-0 file:hover:bg-primary-500"
        onChange={handleFileChange}
        accept=".jpg, .jpeg"
      />
    </div>
  );
};

export default InputJPG;
