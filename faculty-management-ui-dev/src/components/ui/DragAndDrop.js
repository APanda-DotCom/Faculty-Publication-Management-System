import React, { useEffect, useState } from "react";
import "./DragAndDrop.css";

const DragAndDrop = ({
    onFilesSelected
}) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files[0];
        setFiles(selectedFiles)
        onFilesSelected(selectedFiles)
    };
    const handleDrop = (event) => {
        event.preventDefault();
        console.log('inside drop zone: ', event.dataTransfer.files[0])
        const droppedFiles = event.dataTransfer.files[0];
        setFiles(droppedFiles)
        onFilesSelected(droppedFiles)
    };

    return (
        <section className="drag-drop" style={{ marginTop: "35px" }}>
            <div
                className={`document-uploader ${files.length > 0 ? "upload-box active" : "upload-box"
                    }`}
                onDrop={handleDrop}
                onDragOver={(event) => {
                    event.preventDefault()
                    console.log('drag-over')
                }}
            >
                <>
                    <div className="upload-info">
                        <div>
                            <p>Drag and drop your files here</p> <h6>or Click on</h6> <span>
                                <input
                                    type="file"
                                    hidden
                                    id="browse"
                                    onChange={handleFileChange}
                                    accept=".xlsx"
                                    multiple={false}
                                />
                                <label htmlFor="browse" className="browse-btn">
                                    Browse files
                                </label>
                            </span>
                            <h5>
                                Supported file: .XLSX
                            </h5>
                        </div>
                    </div>
                </>

                {files.length > 0 && (
                    <div className="file-list">
                        <div className="file-list__container">
                            {files.map((file, index) => (
                                <div className="file-item" key={index}>
                                    <div className="file-info">
                                        <h5>{file.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DragAndDrop;
