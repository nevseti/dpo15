import { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemCard from './components/ItemCard';

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  // Функция добавления нового элемента
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  // Функция удаления
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Логика сортировки
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return b.id - a.id; // Сортировка по новизне
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Моя Коллекция
        </h1>
        
        {/* Форма добавления */}
        <ItemForm onAdd={addItem} />

        {/* Управление сортировкой */}
        <div className="flex justify-end mb-4">
          <select 
            className="p-2 rounded border"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">По названию</option>
            <option value="newest">Сначала новые</option>
          </select>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map(item => (
            <ItemCard key={item.id} item={item} onRemove={removeItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;