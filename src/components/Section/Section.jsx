import { StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </section>
  );
};
