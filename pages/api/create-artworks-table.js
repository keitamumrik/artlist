import { sql } from '@vercel/postgres';
 

export default async function handler(request, response) {
  console.log({
      POSTGRES_URL: process.env.artlist_URL,
      POSTGRES_URL_NON_POOLING: process.env.artlist_URL_NON_POOLING
    });
  try {
    const result =
      await sql`CREATE TABLE artwork (id serial NOT NULL, title varchar(255), artist varchar(255), year INTEGER, description text, image_url varchar(255), purchase_date date, owner varchar(255) );`;
      // await sql`DROP TABLE artwork;`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}