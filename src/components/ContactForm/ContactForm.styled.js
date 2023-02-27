import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.orange};
  box-shadow: ${p => p.theme.shadows.regular};
`;

export const FormLabel = styled.label`
  text-align: center;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const FormInput = styled.input`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  &:first-child {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const FormAddButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.blue};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};
  transition: ${p => p.theme.transition.cubicBezier};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  &:hover,
  &:focus {
    transform: ${p => p.theme.transform.scale};
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.yellow};
  }
`;
