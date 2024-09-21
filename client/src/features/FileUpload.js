import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import classes from './FileUpload.module.css'
import { getList } from '../helpers/getList.js'

const FileUpload = ({
  file,
  setFile,
  uploadPath,
  setFiles,
  setFolders,
  folderPath
}) => {
  //added loading state
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('1', file)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('customerFolder', uploadPath.customerFolder)
    formData.append('subFolder', uploadPath.subFolder)
    console.log('2', formData)
    try {
      const response = await axios.post(
        'http://localhost:3500/files/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      toast.success('File uploaded successfuly')
      setLoading(false)
      console.log('4', response.data)
    } catch (error) {
      setLoading(false)
      console.error('Error uploading file:', error)
      console.log('5')
      toast.error(error)
    }
    setTimeout(() => {
      getList(
        setFiles,
        setFolders,
        folderPath.customerFolder,
        folderPath.subFolder
      )
      console.log('6')
    }, 1000)
    setFile([])
  }

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Choose a file from your computer, then click 'Upload'
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={classes.button}>
            Choose file
            <input
              type="file"
              id="file"
              onChange={(e) => setFile((prev) => e.target.files[0])}
            />
          </label>
          <h4 className={classes.label}>
            {!file.name ? 'Waiting for file' : file.name}
          </h4>
          <button
            className={classes.button}
            type="submit"
            disabled={loading || !file}
          >
            {loading ? 'Please Wait...' : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FileUpload
