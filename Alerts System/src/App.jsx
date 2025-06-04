import { useEffect, useState } from 'react';
import getAlerts from './api/alerts';
import AlertDialog from './components/AlertDialog';
import './MyStyles.css';
function App() {
    const [alerts, setAlerts] = useState([]);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        getAlerts().then((alerts) =>
            setAlerts(alerts.sort((a, b) => b.unixTimestamp - a.unixTimestamp))
        );
    }, []);

    const closeAlert = (id) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    const toggleAlerts = () => {
        setVisible((prev) => !prev);
    };
    const logVisibleAlerts = () => {
        console.log(alerts);
    };

    return (
        <>
            <div className={'buttonContainer'}>
                <button onClick={toggleAlerts}>
                    {visible ? 'Hide Alerts' : 'Show Alerts'}
                </button>
                <button onClick={logVisibleAlerts}>Log Visible Alerts</button>
            </div>
            <h1>Alerts System</h1>
            <p>
                Loren ipsum dolor sit amet consectetur adipiscing elit etiam
                vulputate
            </p>
            <p>
                Loren ipsum dolor sit amet consectetur adipiscing elit etiam
                vulputate
            </p>
            <p>
                Loren ipsum dolor sit amet consectetur adipiscing elit etiam
                vulputate
            </p>
            <p>
                Loren ipsum dolor sit amet consectetur adipiscing elit etiam
                vulputate
            </p>
            {visible && (
                <div className={'alertContainer'}>
                    {alerts.map((alert) => (
                        <AlertDialog
                            key={alert.id}
                            alert={alert}
                            onClose={closeAlert}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default App;
