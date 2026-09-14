import React from 'react';

interface LoadingScreenProps {
  isExiting: boolean;
}

export function LoadingScreen({ isExiting }: LoadingScreenProps) {
  return (
    <div
      className={`votix-loading-screen${isExiting ? ' votix-loading-screen--exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="votix-loading-mark" aria-hidden="true">
        <img src="/votix.download.png" alt="" className="votix-loading-logo" />
      </div>
    </div>
  );
}
