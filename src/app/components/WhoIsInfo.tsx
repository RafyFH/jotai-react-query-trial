'use client';

import { useAtom } from 'jotai';
import { whoisDataAtom } from '../atoms/apiAtom';

export default function WhoisInfo() {
    const [whoisData] = useAtom(whoisDataAtom);

    if (!whoisData) {
        return <p>No data available</p>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Domain Whois Data</h2>
            <p className="text-xl">Domain: {whoisData.domain}</p>
            <p className="text-xl">Registrar: {whoisData.registrar}</p>
            <p className="text-xl">WHOIS Server: {whoisData.whois_server}</p>
            <p className="text-xl">Creation Date: {whoisData.creation_date}</p>
            <p className="text-xl">Expiration Date: {whoisData.expiration_date}</p>
            <p className="text-xl">Status: {whoisData.status}</p>
        </div>
    );
}