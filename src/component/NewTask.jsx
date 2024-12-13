import { useState } from 'react'

export default function NewTask({ onAdd }) {
  const [EnteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick() {
    if (EnteredTask.trim() === '') {{
      return;
    }}
    onAdd(EnteredTask);
    setEnteredTask('');
  }

  return (
    <div>
      <input
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        type="text"
        onChange={handleChange}
        value={EnteredTask}
      />
      <button
        className='text-stone-700 hover:text-stone-950 px-4 hover:font-semibold '
        onClick={handleClick}
      >Add task
      </button>
    </div>
  )
}