const API_URL = 'https://openlibrary.org/search?q=james+bond&mode=everything';

async function searchBooks(query) {
  try {
    const response = await fetch(`${API_URL}?title=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export { searchBooks };
