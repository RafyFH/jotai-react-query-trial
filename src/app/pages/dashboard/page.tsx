'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { fetchBooksData, createBook } from '@/app/atoms/apis/booksAPI';
import { booksAtom } from "@/app/atoms/apiAtom";
import { BookData, CreateBook } from "@/app/atoms/types/books";

export default function Dashboard() {
   return (
        <div className="container mx-auto p-4">
            <span className="text-center">Dashboard</span>
        </div>
    );
}