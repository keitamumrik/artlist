import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ArtworkCard = ({ artwork }) => {
  return (
    <Link href={`/artwork/${artwork.id}`}>
      <div className={styles.artworkCard}>
        <div className={styles.thumbnailContainer}>
          <Image
            src={`/images/${artwork.id}.jpg`}
            alt={artwork.title}
            width={250}
            height={200}
            className={styles.artworkThumbnail}
          />
        </div>
        <div className={styles.artworkInfo}>
          <h3>{artwork.title}</h3>
          <p>{artwork.artist}</p>
          <p>{artwork.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;