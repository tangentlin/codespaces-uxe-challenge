import memoize from 'micro-memoize';
import { Theme, styled } from '../../styled';

export const createNavigationStyle = memoize((theme: Theme) => {
  const MainLayout = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;

  const IdentityZone = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${theme.spacing.custom(12)};
    flex-grow: 0;
    flex-shrink: 0;
  `;

  // TODO: Dropshadow does not respect theme color
  const Logo = styled('img')`
    width: ${theme.spacing.custom(6)};
    height: ${theme.spacing.custom(6)};
    filter: drop-shadow(0 ${theme.spacing.small} ${theme.spacing.medium} rgba(0, 0, 0, 0.25));
  `;

  const LogoText = styled('h3')`
    color: ${theme.palette.text.default};
    font-size: ${theme.typography.heading3.fontSize};
    line-height: ${theme.typography.heading3.lineHeight};
    font-weight: ${theme.typography.heading3.fontWeight};
    margin: 0;
  `;

  const ContentZone = styled('div')`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-x: hidden;
    overflow-y: auto;
  `;

  const FooterZone = styled('div')`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    height: ${theme.spacing.custom(6)};
    border-top: 1px solid ${theme.palette.divider};
  `;

  return {
    MainLayout,
    IdentityZone,
    Logo,
    LogoText,
    ContentZone,
    FooterZone
  };
});
