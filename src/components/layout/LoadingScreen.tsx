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
      aria-label="Loading VOTIX Systems"
    >
      <div className="votix-loading-mark" aria-hidden="true">
        <span className="votix-loading-ring" />
        <img src="/votix.download.png" alt="VOTIX Systems" className="votix-loading-logo" />
      </div>
      <span className="sr-only">Loading VOTIX Systems</span>
    </div>
  );
}
