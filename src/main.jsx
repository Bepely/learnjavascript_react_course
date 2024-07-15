import ReactDOM from 'react-dom/client'

import App from './app'

// Get a root DOM element
const rootElement = document.getElementById('root');
// Create a react root element 
const reactRoot = ReactDOM.createRoot(rootElement);

// Fulfill react root element with App component and render it
reactRoot.render( <App />)
