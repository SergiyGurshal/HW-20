import React, { useState } from 'react'
import { connect } from 'react-redux'
import './AddPost.css'
import createPost from '../../redux/actions'

const AddPost = (props) => {
  const [dropDownState, setDropDownState] = useState(false)
  const [imgURL, setImgURL] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [author, setAuthor] = useState('')

  const showDropDown = () => {
    const dropDown = document.getElementById('dropdown-menu')

    if (dropDownState) {
      dropDown.style = 'display: block'
      setDropDownState((prev) => !prev)
    } else {
      dropDown.style = 'display: none'
      setDropDownState((prev) => !prev)
    }
  }

  const submitHendler = (e) => {
    e.preventDefault()

    const newPost = {
      name: author,
      content: postDescription,
      image: imgURL,
      id: Date.now().toString(),
    }

    props.createPost(newPost)

    setAuthor('')
    setImgURL('')
    setPostDescription('')
  }

  return (
    <div>
      <form className="add-panel addPostForm" onSubmit={submitHendler}>
        <div className="dropdown mb-3">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            onClick={showDropDown}
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" id="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setAuthor('Mikaela Carroll')
                  showDropDown()
                }}
              >
                Mikaela Carroll
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setAuthor('Jesse Gibbons')
                  showDropDown()
                }}
              >
                Jesse Gibbons
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setAuthor('Kalum Branch')
                  showDropDown()
                }}
              >
                Kalum Branch
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <label htmlFor="imgURL" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imgURL"
            aria-describedby="emailHelp"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postDescription" className="form-label">
            Post description
          </label>
          <input
            type="text"
            className="form-control"
            id="postDescription"
            aria-describedby="emailHelp"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(null, { createPost })(AddPost)
