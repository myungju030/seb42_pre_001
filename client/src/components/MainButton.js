import styled, { css } from 'styled-components';

function MainButton({ buttonText }) {
  return (
    <Button text={buttonText}>
      <div>{buttonText}</div>
    </Button>
  );
}

const Button = styled.button`
  padding: 8px 10.4px;
  margin: 2px;
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  white-space: nowrap;
  cursor: pointer;

  ${(props) => {
    return (
      props.text === 'Log in' &&
      css`
        color: hsl(205, 47%, 42%);
        background-color: hsl(205, 46%, 92%);
        :hover {
          color: hsl(205, 46%, 32%);
          background-color: hsl(205, 57%, 81%);
        }
      `
    );
  }}

  ${(props) => {
    return (
      (props.text === 'Sign up' ||
        props.text === 'Ask Question' ||
        props.text === 'Next') &&
      css`
        height: ${(props) => (props.text === 'Ask Question' ? '40px' : 'auto')};
        color: hsl(0, 0%, 100%);
        background-color: hsl(206, 100%, 52%);
        :hover {
          background-color: hsl(206, 111%, 41%);
        }
      `
    );
  }}
`;
export default MainButton;
