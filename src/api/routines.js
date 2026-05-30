const API = import.meta.env.VITE_API;

// will fetch an array of routines from the API

export async function getRoutines() {
  try {
    const response = await fetch(API + "/routines");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

// will fetch a routine by the ID from the API

export async function getRoutine(id) {
  try {
    const response = await fetch(API + "/routines/" + id);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
// the function sends a new routine to the API to be created
// Need to provide a valid token

export async function createRoutine(token, routine) {
  const response = await fetch(API + "/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(routine),
  });
  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
// will send a request to the API to delete the routine with the given ID.
// Need to provide a valid token

export async function deleteRoutine(token, id) {
  const response = await fetch(API + "/routines/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer" + token },
  });
  if (!response.ok) {
    const reselt = await response.json();
    throw Error(result.message);
  }
}
