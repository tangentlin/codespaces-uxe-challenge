import memoize from 'micro-memoize';
import { Theme, styled } from '../../styled';

export const createToggleSwitchStyle = memoize((theme: Theme) => {
  const transition = '0.4s';
  const borderWidth = '1px';

  const toggleWidth = theme.spacing.custom(4);
  const toggleHeight = theme.spacing.custom(2);
  const sliderGap = theme.spacing.xSmall;
  const sliderSize = `calc( ${toggleHeight} - ${sliderGap} - ${sliderGap} - ${borderWidth} - ${borderWidth} )`;
  const sliderPositionX = `calc( ${sliderGap} + ${borderWidth} )`;
  const sliderPositionY = `calc( ${sliderGap} )`;

  console.log({
    sliderSize,
    sliderPositionX
  });

  const Toggle = styled('label')`
    position: relative;
    display: inline-block;
    width: ${toggleWidth};
    height: ${toggleHeight};

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: none;
      transition: ${transition};
      border-radius: ${toggleHeight};
      border: ${borderWidth} solid ${theme.palette.border.default};
      box-sizing: border-box;

      &:before {
        position: absolute;
        content: '';
        height: ${sliderSize};
        width: ${sliderSize};
        left: ${sliderPositionX};
        top: ${sliderPositionY};
        background-color: ${theme.palette.border.default};
        transition: ${transition};
        border-radius: 50%;
        box-sizing: border-box;
      }
    }

    input:checked + .slider {
    }

    input:checked + .slider:before {
      transform: translateX(calc(${theme.spacing.custom(2)} - ${sliderGap}));
    }
  `;

  return {
    Toggle
  };
});
