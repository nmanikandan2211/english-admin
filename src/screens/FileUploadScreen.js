import React, { useState } from 'react';
import { singleFileUpload } from '../data/api';

const FileUploadScreen = (props) => {
  const [singleFile, setSingleFile] = useState('');
  const [text, setText] = useState('');


  console.log("text", text);

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  }

  const Text = (e) => {
    setText(e.target.value);
  }

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append('file', singleFile);
    formData.append('text', text);
    await singleFileUpload(formData);
    props.getsingle();
  }

  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label>Select Single File</label>
          <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
        </div>
        <div className="form-group">
          <label>Select Single File</label>
          <input type="text" className="form-control" onChange={(e) => Text(e)} />
        </div>
        <div className="row">
          <div className="col-10">
            <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUploadScreen;