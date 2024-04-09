import { useState } from 'react';
import styles from '../styles/Home.module.css';

const ArtworkEdit = ({ artwork, onSave, onCancel }) => {
  const [title, setTitle] = useState(artwork.title || '');
  const [artist, setArtist] = useState(artwork.artist || '');
  const [year, setYear] = useState(artwork.year || '');
  const [description, setDescription] = useState(artwork.description || '');
  const [purchaseDate, setPurchaseDate] = useState(artwork.purchaseDate || '');
  const [owner, setOwner] = useState(artwork.owner || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArtwork = {
      ...artwork,
      title,
      artist,
      year: parseInt(year),
      description,
      purchaseDate,
      owner,
    };
    onSave(updatedArtwork);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Purchase Date:
        <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
      </label>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </label>
      <div className={styles.editButtons}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ArtworkEdit;