import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function DeepChildCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`deep-child-card deep-${theme}`}>
      <h4>Nested Card Component</h4>
      <p>
        Theme applied directly from context: <strong>{theme}</strong>
      </p>
      <div className="theme-preview-box">
        <span>Current Styling Mode: <strong>{theme}</strong></span>
      </div>
    </div>
  );
}

function IntermediateParent() {
  return (
    <div className="intermediate-container">
      <p className="intermediate-desc">
        Intermediate container wrapper without prop forwarding.
      </p>
      <DeepChildCard />
    </div>
  );
}

function GrandparentContainer() {
  return (
    <div className="grandparent-wrapper">
      <p className="grandparent-desc">
        Top level container with deeply nested children.
      </p>
      <IntermediateParent />
    </div>
  );
}

function DeepChildRefactor() {
  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Direct Context Consumer</h3>
      </div>
      <p className="card-subtext">
        Nested child components access context directly without intermediate props.
      </p>
      <GrandparentContainer />
    </div>
  );
}

export default DeepChildRefactor;
