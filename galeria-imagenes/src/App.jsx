import { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageModal from './components/ImageModal';
import './MyStyles.css';

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageModal, setImageModal] = useState(null);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className={'container'}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className={'image-grid'}>
                    {images.map((image) => (
                        <ImageCard
                            key={image.id}
                            image={image}
                            setImageModal={setImageModal}
                        />
                    ))}
                </div>
            )}
            {imageModal && (
                <ImageModal image={imageModal} setImageModal={setImageModal} />
            )}
        </div>
    );
}

export default App;
