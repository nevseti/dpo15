import { useState } from 'react';

export default function ItemForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, desc, image: image || 'https://via.placeholder.com/150' });
    setTitle(''); setDesc(''); setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 gap-4">
        <input 
          type="text" placeholder="Название" 
          value={title} onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <input 
          type="text" placeholder="Описание" 
          value={desc} onChange={(e) => setDesc(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <input 
          type="text" placeholder="Ссылка на фото (URL)" 
          value={image} onChange={(e) => setImage(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          Добавить в коллекцию
        </button>
      </div>
    </form>
  );
}