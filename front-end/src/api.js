export const fetchbookData = async () => {
    try {
        const response = await fetch('/books');
        // Fetch data from /books
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
        }
        const data = await response.json(); // Parse response as JSON
        console.log("Fetched data:", data); // Log the data
        return data; // Return the parsed JSON
    } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
        return null; // Return null in case of an error
    }
};
