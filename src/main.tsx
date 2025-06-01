import React from 'react';
import ReactDOM from 'react-dom/client';
import InteractiveComponent from './components/InteractiveComponent';

const App = () => (
    <div>
        <h1>Welcome to the Interactive App</h1>
        <InteractiveComponent />
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
