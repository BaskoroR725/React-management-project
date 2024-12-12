import { useState } from 'react';
import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import SideBarProject from './component/SideBar';
import SelectedProject from './component/SelectedProject';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

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

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject projectData={selectedProject}/> ;

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
      />
      {content}
    </main>
  );
}

export default App;
