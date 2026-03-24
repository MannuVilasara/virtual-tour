import React from 'react';
import { VirtualTour } from './components/VirtualTour';

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const sceneId = params.get('sceneId') || '5Pd9XFNOX';
  
  return <VirtualTour sceneId={sceneId} className="absolute top-0 left-0 w-full h-screen" />;
}
