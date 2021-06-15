import { PersonImage, PersonOpionion, PersonCardWrapper } from "./styles";

const PersonCard = ({property}) => {
    const {index, image, text} = property;
  return (
    <PersonCardWrapper id={index}>
      <PersonImage><img src={image} alt="person" /></PersonImage>
      <PersonOpionion>
        <p>{text}</p>
      </PersonOpionion>
    </PersonCardWrapper>
  );
};

export default PersonCard;
