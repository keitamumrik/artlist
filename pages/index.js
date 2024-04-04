// pages/index.js
import { useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Art Collection</h1>
      <div className={styles.artworkList}>
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Home;