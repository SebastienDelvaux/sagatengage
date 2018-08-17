import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3030';//TODO externalize that in a JSON file depending environment

export const getProjects = async () => {
  try {
    const response = await fetch(`${baseUrl}/projects`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('Error while fetching the project list', error);
  }
}

export const getProject = async id => {
  try {
    const response = await fetch(`${baseUrl}/project/${id}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.error(`Error while fetching the project with ID '${id}'`, error);
  }
}

export const createProject = async (title, description) => {
  try {
    const project = {
      title: title,
      description: description,
    };
    const response = await fetch(`${baseUrl}/project`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('Error while creating the project', error);
  }
}