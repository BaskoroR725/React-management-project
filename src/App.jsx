import { useState } from 'react';
import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import SideBarProject from './component/SideBar';
import SelectedProject from './component/SelectedProject';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setprojectState(prevState => {
      const taskId = Math.floor(Math.random() * 100 + 1)
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
    })
  }
  function handleDeleteTask(id) {
    setprojectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }

  function handleSelectedProject(id) {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectState(prevState => {
      const newproject = {
        ...projectData,
        id: Math.floor(Math.random() * 100 + 1)
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newproject]
      }
    })
  }

  const selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId);

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = (
    <SelectedProject
      projectData={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />);

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBarProject
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
