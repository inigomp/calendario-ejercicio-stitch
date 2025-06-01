import React from 'react';
import ReactDOM from 'react-dom';
import InteractiveComponent from './components/InteractiveComponent';

const App = () => {
    return (
        <div>
            <h1>Welcome to the Interactive App</h1>
            <InteractiveComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));