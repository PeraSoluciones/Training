function Modal({ post, setSelectedPost }) {
    return (
        <div className={'modal'}>
            <div className={'modal-content'}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button
                    className={'close-modal'}
                    onClick={() => setSelectedPost(null)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
export default Modal;
