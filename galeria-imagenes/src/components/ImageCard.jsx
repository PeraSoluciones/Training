function ImageCard({ image, setImageModal }) {
    return (
        <div className={'image-card'} onClick={() => setImageModal(image)}>
            <img src={image.download_url} alt={image.author} />
        </div>
    );
}

export default ImageCard;
