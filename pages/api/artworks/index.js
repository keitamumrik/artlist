import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { artist, owner, sort } = req.query;
    const where = {};
    if (artist) {
      where.artist = artist;
    }
    if (owner) {
      where.owner = owner;
    }
    const orderBy = {};
    if (sort === 'purchaseDate') {
      orderBy.purchaseDate = 'desc';
    }
    const artworks = await prisma.artwork.findMany({ where, orderBy });
    res.status(200).json(artworks);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}