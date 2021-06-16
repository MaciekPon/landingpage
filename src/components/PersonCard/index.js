import { PersonImage, PersonOpionion, PersonCardWrapper } from "./styles";

const PersonCard = ({property}) => {
    const { image, text} = property;
  return (
    <PersonCardWrapper>
      <PersonImage><img src={image} alt="person" /></PersonImage>
      <PersonOpionion>
        <p>{text}</p>
      </PersonOpionion>
    </PersonCardWrapper>
  );
};

export default PersonCard;
