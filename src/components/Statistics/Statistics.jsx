import { StyledItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <StyledItem>Good:{good}</StyledItem>
        <StyledItem>Neutral:{neutral}</StyledItem>
        <StyledItem>Bad:{bad}</StyledItem>
        <StyledItem>Total:{total}</StyledItem>
        <StyledItem>Positive feedback:{positivePercentage}%</StyledItem>
      </ul>
    </div>
  );
};
