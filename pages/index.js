import { useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks';
import useSort from '../hooks/useSort';
import styles from '../styles/Home.module.css';

const getUniqueValues = (key) => {
  const values = new Set(artworks.map((artwork) => artwork[key]));
  return ['', ...values];
};

const Home = () => {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [filterByArtist, setFilterByArtist] = useState('');
  const [filterByOwner, setFilterByOwner] = useState('');

  const { sortOrder, toggleSortOrder, sortData } = useSort();

  const handleFilterByArtist = (e) => {
    const value = e.target.value;
    setFilterByArtist(value);
    const filtered = value === '' ? artworks : artworks.filter((artwork) => artwork.artist === value);
    setFilteredArtworks(filtered);
  };
  

  const handleFilterByOwner = (e) => {
    const value = e.target.value;
    setFilterByOwner(value);
    const filtered = value === '' ? artworks : artworks.filter((artwork) => artwork.owner === value);
    setFilteredArtworks(filtered);
  };

  const filteredAndSortedArtworks = sortData(filteredArtworks, 'purchaseDate');

  const artists = getUniqueValues('artist');
  const owners = getUniqueValues('owner');

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Art Collection</h1>
      <div className={styles.filters}>
        <div>
          <label htmlFor="filterByArtist">Filter By Artist:</label>
          <select id="filterByArtist" value={filterByArtist} onChange={handleFilterByArtist}>
            {artists.map((artist) => (
              <option key={artist} value={artist}>
                {artist || 'All'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filterByOwner">Filter By Owner:</label>
          <select id="filterByOwner" value={filterByOwner} onChange={handleFilterByOwner}>
            {owners.map((owner) => (
              <option key={owner} value={owner}>
                {owner || 'All'}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.sortContainer}>
        <button className={styles.sortButton} onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? '⬆️ Ascending' : sortOrder === 'desc' ? '⬇️ Descending' : 'Sort by Purchase Date'}
        </button>
      </div>
      <div className={styles.artworkList}>
        {filteredAndSortedArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Home;