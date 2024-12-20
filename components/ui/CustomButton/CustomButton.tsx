import { FC, useMemo } from 'react';
import styles from './CustomButton.module.css';
import { ICustomButtonProps } from './CustomButton.types';

export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  type,
  customClass,
  onClick,
  disabled,
}) => {
  const innerButtonContent = useMemo(() => {
    if (type === 'main') {
      return <span className={styles.doubledTextAtBottom}>{children}</span>;
    }
    if (type === 'secondary') {
      return <span className={styles.textWithInnerShadow}>{children}</span>;
    }
    return <>{children}</>;
  }, [children, type]);

  const buttonClass = useMemo(() => {
    if (type === 'main') {
      return styles.mainButtonStyle;
    }
    if (type === 'secondary') {
      return styles.secondaryButtonStyle;
    }
    return '';
  }, [type]);

  const disabledClass = disabled ? styles.disabledButton : '';

  return (
    <button
      onClick={onClick}
      className={`${styles.commonButtonStyle} ${buttonClass} ${customClass} ${disabledClass}`}
      disabled={disabled}
    >
      {innerButtonContent}
    </button>
  );
};