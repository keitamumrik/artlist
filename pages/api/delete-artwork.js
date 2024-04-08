import { sql } from '@vercel/postgres';

export default async function handler(request,response){
    try{
        const id = request.query.id;
        if(!id) throw new Error('id requires');
        await sql`DELETE FROM artwork WHERE id=(${id});`;
    }catch(error){
        return response.status(500).json({error})
    }

    const artworks = await sql`SELECT * FROM artwork;`;
    return response.status(200).json({artworks});
}