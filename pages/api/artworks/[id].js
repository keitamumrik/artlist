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
    const { title, artist, year, description, purchaseDate, owner } = req.body;
    let formattedPurchaseDate = null;
    if (purchaseDate) {
      formattedPurchaseDate = new Date(purchaseDate).toISOString();
    }
    const updatedArtwork = await prisma.artwork.update({
      where: { id: Number(id) },
      data: {
        title,
        artist,
        year,
        description,
        purchaseDate: formattedPurchaseDate,
        owner,
      },
    });
    res.status(200).json(updatedArtwork);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}