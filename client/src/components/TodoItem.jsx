import { useState } from 'react';

const TodoItem = ({ todo, onToggleComplete, onEdit, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggleComplete = async () => {
    await onToggleComplete(todo._id, todo.completed);
  };

  const handleEdit = () => {
    onEdit(todo);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setIsDeleting(true);
      try {
        await onDelete(todo._id);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 ${
      todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
    } ${isDeleting ? 'opacity-50' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={handleToggleComplete}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-blue-400'
          }`}
          disabled={isDeleting}
        >
          {todo.completed && <span className="text-xs">✓</span>}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${
                todo.completed ? 'text-gray-600 line-through' : 'text-gray-900'
              }`}>
                {todo.name}
              </h3>
              <p className={`mt-1 text-sm ${
                todo.completed ? 'text-gray-500' : 'text-gray-700'
              }`}>
                {todo.task}
              </p>
              <div className="mt-2 text-xs text-gray-500">
                <span>Created: {formatDate(todo.createdAt)}</span>
                {todo.updatedAt !== todo.createdAt && (
                  <span className="ml-4">Updated: {formatDate(todo.updatedAt)}</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handleEdit}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                title="Edit todo"
                disabled={isDeleting}
              >
                ✏️
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
                title="Delete todo"
              >
                {isDeleting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                ) : (
                  '🗑️'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-3 flex justify-end">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          todo.completed
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {todo.completed ? '✅ Completed' : '⏳ Pending'}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;