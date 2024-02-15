import { useCallback, useState } from 'react';
import { useTheme } from '../../styled';
import { HBox } from '../layout';
import { createToggleSwitchStyle } from './ToggleSwitch.style';

export interface ToggleSwitchProps {
  defaultOn?: boolean;
  label?: string;
  onChange?: (on: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  const { defaultOn = false, label, onChange } = props;
  const [on, setOn] = useState(defaultOn ?? false);
  const { theme } = useTheme();
  const { Toggle } = createToggleSwitchStyle(theme);

  const toggle = useCallback(() => {
    const newState = !on;
    setOn(newState);
    onChange?.(newState);
  }, [on, onChange]);

  return (
    <HBox gap="mediumLarge" naturalWidth>
      <Toggle>
        <input type="checkbox" defaultChecked={on} onChange={toggle} />
        <span className="slider" />
      </Toggle>
      {label != null ? <label onClick={toggle}>{label}</label> : null}
    </HBox>
  );
};
