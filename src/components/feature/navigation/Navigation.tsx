import { useCallback } from 'react';
import { useTheme } from '../../../styled';
import { HBox } from '../../common/layout';
import { ToggleSwitch } from '../../common/toggleSwitch/ToggleSwitch';
import { createNavigationStyle } from './Navigation.style';

export interface NavigationProps {
  children?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { theme, mode, setTheme } = useTheme();
  const { children } = props;
  const { MainLayout, IdentityZone, Logo, LogoText, ContentZone, FooterZone } = createNavigationStyle(theme);

  const darkMode_onChange = useCallback(() => {
    setTheme(mode === 'light' ? 'dark' : 'light');
  }, [mode, setTheme]);

  return (
    <MainLayout>
      <IdentityZone>
        <HBox gap="large" naturalWidth>
          <Logo src="/woofer.svg" alt="Woofer" />
          <LogoText>Woofer</LogoText>
        </HBox>
      </IdentityZone>
      <ContentZone>{children}</ContentZone>
      <FooterZone>
        <ToggleSwitch label="Dark mode" defaultOn={mode === 'dark'} onChange={darkMode_onChange} />
      </FooterZone>
    </MainLayout>
  );
};
