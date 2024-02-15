import { styled, useTheme } from '../../../styled';

export const Skeleton: React.FC<{}> = () => {
  const { theme } = useTheme();
  const Block = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.neutral[500]};
    background-image: linear-gradient(
      80deg,
      ${theme.palette.neutral[100]} 5%,
      ${theme.palette.neutral[300]} 45%,
      ${theme.palette.neutral[300]} 55%,
      ${theme.palette.neutral[100]} 95%
    );
    background-size: 200% 100%;
    opacity: 0.75;
    animation: loading 5s infinite linear;
  `;

  return <Block />;
};
