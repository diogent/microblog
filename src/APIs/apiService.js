import { get, create, getAllData } from '../Services/dbService';

const collections = {
  Users: 'User',
  Posts: 'Posts'
}

const userCreate = async (user) => {
  const checkIfExists = await get(collections.Users, user.userName);
  if (!checkIfExists) {
    await create(collections.Users, user);
    const registeredUser = await get(collections.Users, user.userName);
    return registeredUser;
  }
}

const userLogin = async (user) => {
  const existingUser = await get(collections.Users, user.userName);
  if (existingUser && existingUser.password === user.password) {
    return existingUser;
  }
}

const postCreate = async (post) => {
  const newPost = await create(collections.Posts, post);
  return post;
}

const getPostsByUserName = async (userName) => {
  const posts = await getAllData(collections.Posts);
  return posts.filter(post => post.userName === userName).reverse();
}

const getPosts = async () => {
  const posts = await getAllData(collections.Posts);
  return posts.reverse();
}

export {
  userCreate,
  userLogin,
  postCreate,
  getPostsByUserName,
  getPosts
}
