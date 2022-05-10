import React, { useState } from 'react';
import { singleFileUpload } from '../data/api';

const FileUploadScreen = (props) => {
  const [singleFile, setSingleFile] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  }

  const onAnswerOne = (e) => {
    setAnswerOne(e.target.value);
  }

  const onAnswerTwo = (e) => {
    setAnswerTwo(e.target.value);
  }

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append('file', singleFile);
    formData.append('answerOne', answerOne);
    formData.append('answerTwo', answerTwo);
    await singleFileUpload(formData);
    props.getsingle();
    setAnswerOne('');
    setAnswerTwo('');
  }

  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label>Select Single File</label>
          <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
        </div>
        <div className="form-group">
          <label>Answer One</label>
          <input type="text" className="form-control" onChange={onAnswerOne} />
        </div>
        <div className="form-group">
          <label>Answer Two</label>
          <input type="text" className="form-control" onChange={onAnswerTwo} />
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