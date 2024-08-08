import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropzone: React.FC = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Handle the uploaded files here
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            style={{
                border: '2px dashed #cccccc',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer'
            }}
        >
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag and drop some files here, or click to select files</p>
            }
        </div>
    );
};

export default FileDropzone;