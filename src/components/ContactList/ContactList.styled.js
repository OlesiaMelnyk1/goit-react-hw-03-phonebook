import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const DeleteButton = styled.button`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.blue};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover,
  &:focus {
    transform: ${p => p.theme.transform.scale};
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.yellow};
  }
`;
