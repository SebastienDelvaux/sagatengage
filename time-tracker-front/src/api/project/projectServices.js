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