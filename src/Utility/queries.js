import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();


export const CreateUser = async (user) => {
    const { errors, data: newUser } = await client.models.User.create(user)

      if(errors){
        alert(JSON.stringify(errors));
      }

      return newUser;
};