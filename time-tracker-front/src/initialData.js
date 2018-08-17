const initialData = {
  users: [
    {
      username: 'tartampion',
      password: 'tartuffe',
    },
    {
      username: 'peterParker',
      password: 'maryjane',
    }
  ],
  timeEntries: [
    {
      title: 'Technical analysis for Time Tracker',
      description: 'Writing technical specification for the Time Tracker project, check out the MD files in the repo',
      project: 666,
      duration: 120 //duration is in minutes
    },
    {
      title: 'Functional analysis for Alpha Go',
      description: 'Writing functional specification for the Go AI project, check out the Word files on the NAS',
      project: 642,
      duration: 180 //duration is in minutes
    },
  ],
  projects: [
    {
      id: 666,
      title: 'Time Tracker',
      description: 'Simple time tracker used to log time spent on projects. Cloud based project, pay on subscription',
    },
    {
      id: 642,
      title: 'Alpha Go',
      description: 'Revolutionary AI. Goal is to take on every world level player and show the potential of AI compared to the human mind. Do not be evil or go Skynet on everybody asses',
    },
  ],
};
export default initialData;
