export const fetchBackendData = async () => {
    const response = await fetch('/');
    const data = await response.text();
    return data;
};
