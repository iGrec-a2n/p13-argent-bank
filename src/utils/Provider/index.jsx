function updateGlobalSate(key, value) {
  localStorage.setItem(key ,value)
}

function getGlobalSate(key) {
  const actualState = localStorage.getItem(key)
  return actualState ? actualState : null
}

function deletegetGlobalSate(key) {
  window.localStorage.removeItem(key)
}

export {updateGlobalSate, getGlobalSate, deletegetGlobalSate};