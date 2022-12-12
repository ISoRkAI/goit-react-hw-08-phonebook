import axios from 'axios';

axios.defaults.baseURL = 'https://639218d3b750c8d178d6c2d8.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function addContacts(data) {
  const { data: result } = await axios.post(`/contacts/`, data);
  return result;
}
