import '../MyStyles.css';
export default function AlertDialog({ alert, onClose }) {
    return (
        <div className={'alert'}>
            <span>{alert.message}</span>
            <button className={'closebtn'} onClick={() => onClose(alert.id)}>
                X
            </button>
        </div>
    );
}
