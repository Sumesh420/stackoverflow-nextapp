import { Client, Account, Avatars,Databases,Storage} from 'appwrite';
import env from '@/env';
 const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId); 

 const account = new Account(client);
 const databases=new Databases(client);
 const avatars=new Avatars(client);
 const storage=new Storage(client);
 export {account,databases,avatars,storage,client}
export { ID } from 'appwrite';
