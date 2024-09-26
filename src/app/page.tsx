'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { fetchBooksData, createBook } from '@/app/atoms/apis/booksAPI';
import { booksAtom } from "@/app/atoms/apiAtom";
import { BookData, CreateBook } from "@/app/atoms/types/books";

export default function Home() {
    const [books, setBooks] = useAtom(booksAtom);
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState({ title: '', author: '', stock: 0 });
    const [errorMessage, setErrorMessage] = useState('');

    const { data, error, isLoading } = useQuery<BookData[], Error>({
        queryKey: ['booksData'],
        queryFn: fetchBooksData,
    });

    const createBookMutation = useMutation<BookData, Error, CreateBook>({
        mutationFn: createBook,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booksData']});
            setErrorMessage('');
            setFormData({ title: '', author: '', stock: 0 }); // Reset form data
        },
        onError: (error) => {
            setErrorMessage(error.message);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bookData: CreateBook = {
            title: formData.title,
            author: formData.author,
            stock: Number(formData.stock),
        };

        createBookMutation.mutate(bookData);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book List</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex space-x-2 mb-2">
                    <input
                        type="text"
                        placeholder="Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="border p-2 w-1/4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="border p-2 w-1/4"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={formData.stock}
                        onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                        className="border p-2 w-1/4"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Add Book
                </button>
            </form>

            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Code</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Author</th>
                    <th className="border px-4 py-2">Stock</th>
                </tr>
                </thead>
                <tbody>
                {data?.map((book, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{book.code}</td>
                        <td className="border px-4 py-2">{book.title}</td>
                        <td className="border px-4 py-2">{book.author}</td>
                        <td className="border px-4 py-2">{book.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}