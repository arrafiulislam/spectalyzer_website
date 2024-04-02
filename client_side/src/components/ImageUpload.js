import React, { useState } from 'react';
import './ImageUpload.css'
const ImageUpload = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div className="img-container">
            <div>
            <p className='img-title'>Upload Profile Image</p>
            <input type="file" onChange={handleChange} />
            <img src={file} />
            <p className='img-tail'>Accepted file types: jpg, jpeg, png, gif.</p>
            </div>
            <div>
            <p className='img-title'>Prescription upload</p>
            <input type="file" onChange={handleChange} />
            <img src={file} />
            <p className='img-tail'>Max. file size: 8 MB.</p>
            </div>
           
        </div>
    );
};

export default ImageUpload;