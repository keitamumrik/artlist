import { useState } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks';
import useSort from '../hooks/useSort';
import FilterAccordion from '../components/FilterAccordion';
import styles from '../styles/Home.module.css';

const getUniqueValues = (key) => {
  const values = new Set(artworks.map((artwork) => artwork[key]));
  return ['', ...values];
};

const ArtworkCount = ({ count }) => (
  <div className={styles.artworkCount}>Total Artworks: {count}</div>
);

const Home = () => {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [filterByArtist, setFilterByArtist] = useState('');
  const [filterByOwner, setFilterByOwner] = useState('');

  const { sortOrder, toggleSortOrder, sortData } = useSort();

  const handleFilterByArtist = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setFilterByArtist(value);
    const filtered = value === '' ? artworks : artworks.filter((artwork) => artwork.artist === value);
    setFilteredArtworks(filtered);
  };
  
  const handleFilterByOwner = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setFilterByOwner(value);
    const filtered = value === '' ? artworks : artworks.filter((artwork) => artwork.owner === value);
    setFilteredArtworks(filtered);
  };

  const filteredAndSortedArtworks = sortData(filteredArtworks, 'purchaseDate');

  const artists = getUniqueValues('artist');
  const owners = getUniqueValues('owner');

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Matsumura Collection</h1>
      <ArtworkCount count={filteredAndSortedArtworks.length} />
      <div className={styles.sortContainer}>
        <button className={styles.sortButton} onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? '⬆️ Ascending' : sortOrder === 'desc' ? '⬇️ Descending' : 'Sort by Purchase Date'}
        </button>
      </div>
      <FilterAccordion
        artists={artists}
        owners={owners}
        filterByArtist={filterByArtist}
        filterByOwner={filterByOwner}
        handleFilterByArtist={handleFilterByArtist}
        handleFilterByOwner={handleFilterByOwner}
      />
      <div className={styles.artworkList}>
        {filteredAndSortedArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Home;