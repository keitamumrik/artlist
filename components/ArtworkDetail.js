import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ArtworkDetail = ({ artwork }) => {
  return (
    <div className={styles.artworkDetail}>
      <div className={styles.imageContainer}>
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          width={500}
          height={400}
          className={styles.artworkImage}
        />
      </div>
      <div className={styles.artworkInfo}>
        <h2>{artwork.title}</h2>
        <p>Artist: {artwork.artist}</p>
        <p>Year: {artwork.year}</p>
        <p>Description: {artwork.description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetail;