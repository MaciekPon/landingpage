import { useState } from "react";

import {
  SliderWrapper,
  Title,
  PersonWrapper,
  PersonInfo,
  LeftArrow,
  RightArrow,
} from "./styles";
import PersonCard from "../../components/PersonCard";
import imagesData from "../../data/data.json";

const Opinions = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToTheLeft = () => {
    if (currentImage === 0) {
      setCurrentImage(imagesData.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const goToTheRight = () => {
    if (currentImage === imagesData.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <SliderWrapper>
      <Title>
        <p>See what people think about our e-book</p>
      </Title>
      <PersonWrapper>
        <PersonInfo>
          <button onClick={goToTheLeft}>
            <LeftArrow />
          </button>
          <PersonCard property={imagesData[currentImage]} />
          <button onClick = {goToTheRight}>
            <RightArrow />
          </button>
        </PersonInfo>
      </PersonWrapper>
    </SliderWrapper>
  );
};

export default Opinions;
