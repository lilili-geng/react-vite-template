import React, { ReactNode } from 'react';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="text-center">
      {children}
    </div>
  );
}

export default BaseLayout;
