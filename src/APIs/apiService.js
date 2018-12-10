import { get, create } from '../Services/dbService';

const userCollection = {
  Users: 'User'
}

const userCreate = async (item) => {
  await create(userCollection.Users, item);
}

export {
  userCreate
}
