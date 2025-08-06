
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function JukeboxApp() {
  const [song, setSong] = useState('');
  const [requests, setRequests] = useState([]);

  const handleRequest = () => {
    if (song.trim() === '') return;
    setRequests([...requests, song]);
    setSong('');
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        🎵 Jukebox de La Palma 🍻
      </motion.h1>

      <div className="w-full max-w-md bg-neutral-800 shadow-lg rounded-2xl p-6">
        <input
          className="w-full p-2 rounded mb-4 text-black"
          placeholder="Escribe el nombre de una canción o artista"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button
          onClick={handleRequest}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Solicitar canción
        </button>
      </div>

      {requests.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl mb-4 font-semibold text-center">Solicitudes:</h2>
          <ul className="space-y-2">
            {requests.map((req, idx) => (
              <li
                key={idx}
                className="bg-neutral-800 px-4 py-2 rounded-xl shadow"
              >
                {req}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
