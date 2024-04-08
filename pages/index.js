import { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import FilterAccordion from '../components/FilterAccordion';
import styles from '../styles/Home.module.css';
import useSort from '../hooks/useSort';

const ArtworkCount = ({ count }) => (
  <div className={styles.artworkCount}>Total Artworks: {count}</div>
);

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [filterByArtist, setFilterByArtist] = useState('');
  const [filterByOwner, setFilterByOwner] = useState('');
  const { sortOrder, toggleSortOrder, sortData } = useSort();

  useEffect(() => {
    const fetchArtworks = async () => {
      const res = await fetch('/api/artworks');
      const data = await res.json();
      setArtworks(data);
      setFilteredArtworks(data);
    };
    fetchArtworks();
  }, []);

  const handleFilterByArtist = async (selectedOption) => {
    const artist = selectedOption ? selectedOption.value : '';
    setFilterByArtist(artist);
    const res = await fetch(`/api/artworks?artist=${artist}&owner=${filterByOwner}&sort=${sortOrder}`);
    const data = await res.json();
    setFilteredArtworks(data);
  };

  const handleFilterByOwner = async (selectedOption) => {
    const owner = selectedOption ? selectedOption.value : '';
    setFilterByOwner(owner);
    const res = await fetch(`/api/artworks?artist=${filterByArtist}&owner=${owner}&sort=${sortOrder}`);
    const data = await res.json();
    setFilteredArtworks(data);
  };

  const handleSortChange = async (selectedOption) => {
    const sort = selectedOption ? selectedOption.value : '';
    setSortOrder(sort);
    const res = await fetch(`/api/artworks?artist=${filterByArtist}&owner=${filterByOwner}&sort=${sort}`);
    const data = await res.json();
    setFilteredArtworks(data);
  };

  const filteredAndSortedArtworks = sortData(filteredArtworks, 'purchaseDate');

  const artists = [...new Set(artworks.map((artwork) => artwork.artist))];
  const owners = [...new Set(artworks.map((artwork) => artwork.owner))];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Matsumura Collection</h1>
      <ArtworkCount count={filteredAndSortedArtworks.length} />
      <FilterAccordion
        artists={artists}
        owners={owners}
        filterByArtist={filterByArtist}
        filterByOwner={filterByOwner}
        handleFilterByArtist={handleFilterByArtist}
        handleFilterByOwner={handleFilterByOwner}
      />
      {/* <div className={styles.sortContainer}>
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => handleSortChange({ value: e.target.value })}>
          <option value="">None</option>
          <option value="purchaseDate">Purchase Date</option>
        </select>
      </div> */}
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