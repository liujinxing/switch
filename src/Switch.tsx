import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import SwitchTrack from './SwitchTrack';
import SwitchLabel from './SwitchLabel';

interface SwitchProps {
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.span<{ disabled?: boolean }>`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  -webkit-tap-highlight-color: transparent;
`;

/**
 * 开关控件
 *
 * @export
 * @param {SwitchProps} props
 * @returns
 */
export default function Switch(props: SwitchProps) {
  const { disabled, checked, color } = props;
  return (
    <Wrapper
      className={classNames('sinoui-switch', {
        'sinoui-switch--disabled': disabled,
        'sinoui-switch--checked': checked,
      })}
      disabled={disabled}
    >
      <SwitchLabel {...props} />
      <SwitchTrack
        className="sinoui-switch__track"
        disabled={disabled}
        checked={checked}
        color={color}
      />
    </Wrapper>
  );
}
