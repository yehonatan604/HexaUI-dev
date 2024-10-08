const generateRandomId = () => {
    const usedIds = sessionStorage.getItem('usedIds') ? JSON.parse(sessionStorage.getItem('usedIds')) : [];
    const id = Math.random().toString(36).substring(2);

    if (usedIds.includes(id)) {
        return generateRandomId();
    }

    usedIds.push(id);
    sessionStorage.setItem('usedIds', JSON.stringify(usedIds));
    return id;
};

export default generateRandomId;

