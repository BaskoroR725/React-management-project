import Tasks from './Tasks';

export default function SelectedProject({ projectData, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(projectData.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  //const projectTask = ((task)=> task.projectId === project.id)

  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300 ' >
        <div className='flex items-center justify-between' >
          <h1 className='text-3xl font-bold text-stone-600 mb-2' >{projectData.title}</h1>
          <button className='text-stone-600 hover:text-stone-950 hover:font-semibold' onClick={onDelete} >delete</button>
        </div>
        <p className='mb-4 text-stone-400' >{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap' >{projectData.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  )
}