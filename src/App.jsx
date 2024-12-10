import { useState } from 'react';
import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import SideBarProject from './component/SideBar';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    project: []
  });

  function handleStartAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBarProject onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
