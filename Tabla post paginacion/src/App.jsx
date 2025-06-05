import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import './MyStyles.css';

const POSTS_PER_PAGE = 10;

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    return (
        <div className={'container'}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.userId}</td>
                                <td>
                                    <button
                                        className={'btn-more'}
                                        onClick={() => setSelectedPost(post)}
                                    >
                                        Ver más
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                <button
                                    className={'btn'}
                                    onClick={() => setPage(page - 1)}
                                    disabled={page === 1}
                                >
                                    Anterior
                                </button>
                                <span className={'page'}>
                                    Page {page} of {POSTS_PER_PAGE}
                                </span>
                                <button
                                    className={'btn'}
                                    onClick={() => setPage(page + 1)}
                                    disabled={page === 10}
                                >
                                    Siguiente
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}
            {selectedPost && (
                <Modal post={selectedPost} setSelectedPost={setSelectedPost} />
            )}
        </div>
    );
}

export default App;
