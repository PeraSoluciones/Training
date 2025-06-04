function ImageModal({ image, setImageModal }) {
    return (
        <div className={'image-modal'}>
            <div
                className={'image-modal-content'}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{image.author}</h2>
                <img src={image.download_url} alt={image.author} />
                <button
                    className={'closebtn'}
                    onClick={() => setImageModal(null)}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default ImageModal;
