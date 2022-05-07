import React, { useState, useEffect } from 'react';
import FileUploadScreen from './screens/FileUploadScreen';
import { getSingleFiles } from './data/api';

function App() {
  const [singleFiles, setSingleFiles] = useState([]);

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleFileslist();
  }, []);
  return (
    <>
      <div className="container">
        <h3 className="text-danger font-weight-bolder border-bottom text-center">Single & Multiple File Upload Using MERN Stack </h3>
        <FileUploadScreen getsingle={() => getSingleFileslist()} />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="text-success font-weight-bold">Single Files List</h4>
            <div className="row">
              {singleFiles.map((file, index) =>
                <div className="col-6">
                  <div className="card mb-2 border-0 p-0">
                    <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
