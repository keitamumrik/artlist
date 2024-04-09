import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArtworkDetail from '../../components/ArtworkDetail';
import ArtworkEdit from '../../components/ArtworkEdit';
import styles from '../../styles/Home.module.css';

const ArtworkPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState(null);
  const [editMode, setEditMode] = useState(false);

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

  const handleSave = async (updatedArtwork) => {
    const res = await fetch(`/api/artworks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArtwork),
    });
    if (res.ok) {
      setArtwork(updatedArtwork);
      setEditMode(false);
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to List
      </Link>
      {editMode ? (
        <ArtworkEdit artwork={artwork} onSave={handleSave} onCancel={() => setEditMode(false)} />
      ) : (
        <>
          <ArtworkDetail artwork={artwork} />
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ArtworkPage;