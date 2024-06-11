import React from 'react';

interface AlertProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
}

const Alert: React.FC<React.PropsWithChildren<AlertProps>> = ({ type, onDismiss, children }) => {
  const alertClasses = `alert alert-${type}`;

  return (
    <div className={alertClasses} role="alert">
      {children}
      {onDismiss && (
        <button type="button" className="btn-close" aria-label="Close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;
