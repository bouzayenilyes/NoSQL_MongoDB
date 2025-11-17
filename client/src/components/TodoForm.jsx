import { useState, useEffect } from 'react';

const TodoForm = ({ onSubmit, initialData = null, onCancel = null, isEditing = false }) => {
  const [formData, setFormData] = useState({
    task: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate form when editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        task: initialData.task || '',
        name: initialData.name || ''
      });
    } else {
      setFormData({ task: '', name: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.task.trim() || !formData.name.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      if (!isEditing) {
        setFormData({ task: '', name: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({ task: '', name: '' });
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditing ? '✏️ Edit Todo' : '➕ Add New Todo'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Todo Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter todo name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-2">
            Task Description *
          </label>
          <textarea
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Describe your task..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !formData.task.trim() || !formData.name.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                {isEditing ? 'Updating...' : 'Adding...'}
              </>
            ) : (
              <>
                {isEditing ? '✏️ Update Todo' : '➕ Add Todo'}
              </>
            )}
          </button>

          {isEditing && onCancel && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;