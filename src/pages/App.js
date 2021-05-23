import React, { useState, useEffect, useMemo, useRef } from "react";
import AlbumItem from "components/AlbumItem";
import PhotoItem from "components/PhotoItem";
import {
  Container,
  ListContainer,
  List,
  Title,
  Col,
  SearchInput,
} from "./styled";
import { getAlbums, getPhotosForAlbum } from "API";

export default function App() {
  const [albums, setAlbums] = useState([]);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const searchInputRef = useRef();

  useEffect(() => {
    getAlbums(1).then((albums) => setAlbums(albums));
  }, []);

  useEffect(() => {
    getPhotosForAlbum(currentAlbumId).then((photos) => setPhotos(photos));
  }, [currentAlbumId]);

  const filteredPhotos = useMemo(() => {
    if (searchKey)
      return photos.filter((photo) => photo.title.includes(searchKey));
    return photos;
  }, [photos, searchKey]);

  return (
    <Container>
      <Col>
        <Title>Albums</Title>
        <ListContainer>
          <List>
            {albums.map((album) => (
              <AlbumItem
                key={album.id}
                album={album}
                isSelected={album.id === currentAlbumId}
                onSelect={(id) => setCurrentAlbumId(id)}
              />
            ))}
          </List>
        </ListContainer>
      </Col>
      <Col>
        <Title>Photos</Title>
        <SearchInput
          ref={searchInputRef}
          onKeyDown={(e) =>
            e.key === "Enter" && setSearchKey(searchInputRef.current.value)
          }
        />
        <ListContainer>
          <List>
            {filteredPhotos.map((photo) => (
              <PhotoItem key={photo.id} photo={photo} searchKey={searchKey}/>
            ))}
          </List>
        </ListContainer>
      </Col>
    </Container>
  );
}
