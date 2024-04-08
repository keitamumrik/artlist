import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const title = request.query.title;
    const artist = request.query.artist;
    // if (!title || !artist) throw new Error('title and artist names required');
    await sql`INSERT INTO artwork (title,artist,year,description,image_url,purchase_date,owner) VALUES (${title}, ${artist},2024,'test','/images/1.jpg','2024-04-09 00:00:00','test');`;
    // await sql`DELETE FROM artwork where title= (${title});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const artwork = await sql`SELECT * FROM artwork;`;
  return response.status(200).json({ artwork });
}