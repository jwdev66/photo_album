import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAlbums = (userId) => {
  return API.get(`users/${userId}/albums`).then((res) => res.data);
};

export const getPhotosForAlbum = (albumId) => {
  return API.get(`albums/${albumId}/photos`).then((res) => res.data);
};
