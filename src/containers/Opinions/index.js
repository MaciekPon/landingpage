import {
  SliderWrapper,
  Title,
  PersonWrapper,
  PersonInfo,
  PersonImage,
  PersonOpionion,
  LeftArrow,
  RightArrow,
  PersonCardWrapper
} from "./styles";


const Opinions = () => {
  return (
    <SliderWrapper>
      <Title>
        <p>See what people think about our e-book</p>
      </Title>
      <PersonWrapper>
        <PersonInfo>
            <LeftArrow />
            <PersonCardWrapper>
          <PersonImage>Zdjecie czlwieka</PersonImage>
          <PersonOpionion>
            <p>
              person’s opinion xxxxxxxxxxxxxx . x x x x xxx x x xx x person’s
              opinion xxxxxxxxxxxxxx . x x x x xxx x x xx x
            </p>
          </PersonOpionion>
          </PersonCardWrapper>
          <RightArrow />
        </PersonInfo>
      </PersonWrapper>
    </SliderWrapper>
  );
};

export default Opinions;
