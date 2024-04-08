import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const artwork = await prisma.artwork.findUnique({
      where: { id: Number(id) },
    });
    if (artwork) {
      res.status(200).json(artwork);
    } else {
      res.status(404).json({ message: 'Artwork not found' });
    }
  } else if (req.method === 'PUT') {
    const { title, artist, year, description, imageUrl, purchaseDate, owner } = req.body;
    const updatedArtwork = await prisma.artwork.update({
      where: { id: Number(id) },
      data: {
        title,
        artist,
        year,
        description,
        imageUrl,
        purchaseDate,
        owner,
      },
    });
    res.status(200).json(updatedArtwork);
  } else if (req.method === 'DELETE') {
    await prisma.artwork.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}