import { get, create } from '../Services/dbService';

const userCollection = {
  Users: 'User'
}

const userCreate = async (user) => {
  const checkIfExists = await get(userCollection.Users, user.userName);
  if(!checkIfExists) {
    await create(userCollection.Users, user);
    const registeredUser = await get(userCollection.Users, user.userName);
    return registeredUser;
  }
  else {
    alert("User is already exists");
  }
}

const userLogin = async (user) => {
  const existingUser = await get(userCollection.Users, user.userName);
  if (existingUser && existingUser.password === user.password) {
    return existingUser;
  }
}

export {
  userCreate,
  userLogin
}
