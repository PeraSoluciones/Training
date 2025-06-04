function getAlerts() {
    return Promise.all([
        { id: 1, unixTimestamp: 1, message: 'Older' },
        { id: 2, unixTimestamp: 2, message: 'Newer' },
        { id: 3, unixTimestamp: 8, message: 'Oldest' },
        { id: 4, unixTimestamp: 5, message: 'Newest' },
    ]);
}

export default getAlerts;
