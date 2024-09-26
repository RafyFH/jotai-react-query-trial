import { atom } from 'jotai';
import {WhoisData} from "@/app/atoms/types/whoIs";
import {BookData} from "@/app/atoms/types/books";

export const whoisDataAtom = atom<WhoisData | null>(null);
export const booksAtom = atom<BookData[] | null>(null);