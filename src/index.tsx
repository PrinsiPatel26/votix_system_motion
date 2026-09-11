import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { LoadingScreen } from "./components/layout/LoadingScreen";

function RootApp() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    const startedAt = performance.now();
    const minimumDisplayTime = 520;
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const finishLoading = () => {
      const remaining = Math.max(0, minimumDisplayTime - (performance.now() - startedAt));
      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        removeTimer = window.setTimeout(() => setIsLoading(false), 380);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
      if (removeTimer !== undefined) window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <App />
      {isLoading && <LoadingScreen isExiting={isExiting} />}
    </>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<RootApp />);
}