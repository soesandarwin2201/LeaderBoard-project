function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function addLocalStorage(id, person, personScore) {
  const onePerson = { id, person, personScore };
  const people = getLocalStorage();
  people.push(onePerson);
  localStorage.setItem('list', JSON.stringify(people));
}

export { addLocalStorage, getLocalStorage };
