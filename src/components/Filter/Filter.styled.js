import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  margin-right: auto;
  margin-left: auto;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
`;
