const API = import.meta.env.VITE_API;

// function will send a new set to the API to be created
// need to provide a token

export async function createSet(token, set) {
  const response = await fetch(API + "/sets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      AUthorization: "Bearer " + token,
    },
    body: JSON.stringify(set),
  });
  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
// function will request the API to delete the set with the given ID
// need to provide a token

export async function deleteSet(token, id) {
  const response = await fetch(API + "/sets/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
