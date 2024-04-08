import {sql} from '@vercel/postgres';

export default async function handler(request,response){
    try{
        await sql`DROP TABLE artwork;`;
    }catch(error){
        return response.status(500).json({error})
    }

    return response.status(200).json("DROP success");
}