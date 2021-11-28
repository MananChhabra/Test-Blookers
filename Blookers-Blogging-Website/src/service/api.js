import axios from 'axios';

const postsUrl = 'http://localhost:3001/posts';
const usersUrl = 'http://localhost:3001/users';
// const PostsUrl = 'http://localhost:8080/Posts';

// export const getPosts = async (id) => {
//     id = id || '';
//     return await axios.get(`${PostsUrl}`);
// }

export const addPost = async (initialPostVal) => {
    return await axios.post(`${postsUrl}/add`, initialPostVal);
}


// export const deletePost = async (id) => {
//     return await axios.delete(`${PostsUrl}/${id}`);
// }

// export const editPost = async (id, Post) => {
//     return await axios.put(`${PostsUrl}/${id}`, Post)
// }

export const addUser= async (initialPostVal) => {
    return await axios.post(`${usersUrl}/add`, initialPostVal);
}