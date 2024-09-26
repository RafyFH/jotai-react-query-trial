import { BookData, CreateBook, UpdateBook } from "@/app/atoms/types/books";

const API_URL = 'http://127.0.0.1:8000';

export const fetchBooksData = async (): Promise<BookData[]> => {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.data as BookData[];
};

// Create a new book (Create)
export const createBook = async (newBook: CreateBook): Promise<BookData> => {
    const response = await fetch(`${API_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
    });
    if (!response.ok) {
        throw new Error('Error creating book');
    }
    return response.json(); // Assume response has the structure of BookData
};

// Update a book (Update)
export const updateBook = async (code: string, updatedBook: UpdateBook): Promise<BookData> => {
    const response = await fetch(`${API_URL}/books/${code}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
    });
    if (!response.ok) {
        throw new Error('Error updating book');
    }
    return response.json() as Promise<BookData>;
};

// Delete a book (Delete)
export const deleteBook = async (code: string): Promise<{ success: boolean }> => {
    const response = await fetch(`${API_URL}/books/${code}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error deleting book');
    }
    return response.json() as Promise<{ success: boolean }>;
};