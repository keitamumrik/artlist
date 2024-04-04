// pages/artwork/[id].js
import { useRouter } from 'next/router';
import artworks from '../../data/artworks';
import ArtworkDetail from '../../components/ArtworkDetail';
import styles from '../../styles/Home.module.css';

const ArtworkPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const artwork = artworks.find((a) => a.id === parseInt(id));

  if (!artwork) {
    return <div className={styles.container}>Artwork not found</div>;
  }

  return (
    <div className={styles.container}>
      <ArtworkDetail artwork={artwork} />
    </div>
  );
};

export default ArtworkPage;