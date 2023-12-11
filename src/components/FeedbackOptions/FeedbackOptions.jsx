import { StyledContainer, StyledButton } from './FeddbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <StyledContainer>
      {options.map(option => (
        <StyledButton
          type="button"
          key={option}
          onClick={() => handleFeedback(option)}
        >
          {option}
        </StyledButton>
      ))}
    </StyledContainer>
  );
};
