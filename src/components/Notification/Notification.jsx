import { StyledMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <StyledMessage>{message}</StyledMessage>
    </div>
  );
};
