import React from 'react'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postAdded} from "./postsSlice";
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onUserIdChanged = e => setUserId(e.target.value);


  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  }

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postUserId">Author:</label>
        <select id="postUserId" value={userId} onChange={onUserIdChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}>
            Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
