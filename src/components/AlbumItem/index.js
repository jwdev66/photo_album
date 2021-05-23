import { Container, AlbumTitle, AlbumImage } from "./styled";

const AlbumItem = ({ album, isSelected, onSelect }) => {
  return (
    <Container onClick={() => onSelect(album.id)} selected={isSelected}>
      <AlbumImage src="images/img_album.png" />
      <AlbumTitle selected={isSelected}>{album.title}</AlbumTitle>
    </Container>
  );
};

export default AlbumItem;
