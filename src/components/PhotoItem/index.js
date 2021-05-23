import { useMemo } from "react";
import { Container, PhotoTitle, PhotoImage, ItalicText } from "./styled";

const PhotoItem = ({ photo, searchKey }) => {
  const title = photo.title;
  const updatedTitle = useMemo(() => {
    if (!searchKey) return title;

    let splitedList = title.split(" ");
    for (let i = 0; i < splitedList.length; i++) {
      if (splitedList[i].toLowerCase().includes(searchKey.toLowerCase()))
        splitedList[i] = `<|>${splitedList[i]}<|>`;
    }
    return splitedList.join(" ");
  }, [searchKey, title]);

  return (
    <Container>
      <PhotoImage src={photo.thumbnailUrl} />
      <PhotoTitle>
        {updatedTitle.split("<|>").map((text) => {
          if (searchKey && text.includes(searchKey))
            return <ItalicText>{text}</ItalicText>;
          else return text;
        })}
      </PhotoTitle>
    </Container>
  );
};

export default PhotoItem;
