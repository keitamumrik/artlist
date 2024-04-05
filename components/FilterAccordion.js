import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../styles/Home.module.css';

const FilterAccordion = ({ artists, owners, filterByArtist, filterByOwner, handleFilterByArtist, handleFilterByOwner }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const artistOptions = artists.map((artist) => ({ value: artist, label: artist || 'All' }));
  const ownerOptions = owners.map((owner) => ({ value: owner, label: owner || 'All' }));

  const selectedArtist = artistOptions.find((option) => option.value === filterByArtist);
  const selectedOwner = ownerOptions.find((option) => option.value === filterByOwner);

  return (
    <div className={styles.filterAccordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <span className={styles.accordionTitle}>
          Filters{' '}
          {(selectedArtist || selectedOwner) && (
            <span className={styles.filterSummary}>
              ({selectedArtist?.label && `Artist: ${selectedArtist.label}`}
              {selectedArtist?.label && selectedOwner?.label && ', '}
              {selectedOwner?.label && `Owner: ${selectedOwner.label}`})
            </span>
          )}
        </span>
        <span className={styles.accordionIcon}>{isOpen ? '▼' : '▶'}</span>
      </div>
      {isOpen && (
        <div className={styles.accordionContent}>
          <div className={styles.filterItem}>
            <label htmlFor="filterByArtist">Filter By Artist:</label>
            <Select
              id="filterByArtist"
              options={artistOptions}
              value={selectedArtist}
              onChange={handleFilterByArtist}
              className={styles.select}
            />
          </div>
          <div className={styles.filterItem}>
            <label htmlFor="filterByOwner">Filter By Owner:</label>
            <Select
              id="filterByOwner"
              options={ownerOptions}
              value={selectedOwner}
              onChange={handleFilterByOwner}
              className={styles.select}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;