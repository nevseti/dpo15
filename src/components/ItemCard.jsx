export default function ItemCard({ item, onRemove }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition hover:scale-105">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}