import React, { useState } from 'react'
import FolderTree from './FolderTree'
import FileUpload from '../features/FileUpload'

//Main app display window. Parent to upload & navigation features
//Controls all file related states and passes to both features the ones they need

const Main = ({ showUpload, showFolders }) => {
  const [folderPath, setFolderPath] = useState({
    customerFolder: 'Denis',
    subFolder: ''
  })
  const [files, setFiles] = useState([])
  const [folders, setFolders] = useState([])
  const [file, setFile] = useState('')
  const [uploadPath, setUploadPath] = useState({
    customerFolder: 'Denis',
    subFolder: 'Dec'
  })

  return (
    <div>
      {showUpload && (
        <FileUpload
          file={file}
          setFile={setFile}
          uploadPath={uploadPath}
          setFiles={setFiles}
          setFolders={setFolders}
          folderPath={folderPath}
        />
      )}
      {showFolders && (
        <FolderTree
          files={files}
          setFiles={setFiles}
          folders={folders}
          setFolders={setFolders}
          folderPath={folderPath}
          setFolderPath={setFolderPath}
        />
      )}
    </div>
  )
}

export default Main
