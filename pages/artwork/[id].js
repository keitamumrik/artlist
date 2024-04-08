import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArtworkDetail from '../../components/ArtworkDetail';
import styles from '../../styles/Home.module.css';

const ArtworkPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      const res = await fetch(`/api/artworks/${id}`);
      const data = await res.json();
      setArtwork(data);
    };
    if (id) {
      fetchArtwork();
    }
  }, [id]);

  if (!artwork) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to List
      </Link>
      <ArtworkDetail artwork={artwork} />
    </div>
  );
};

export default ArtworkPage;