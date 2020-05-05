import { BASE_URL } from "./constants";
import { handleResponse, handleError } from "./apiUtils";

export function fetchAllAdvertisements() {
  return fetch(`${process.env.API_URL}/advertisements`)
    .then(handleResponse)
    .catch(handleError);
}

export function showAdvertisement(id) {
  return fetch(`${BASE_URL}/advertisements/${id}`)
    .then(handleResponse)
    .then(handleError);
}
