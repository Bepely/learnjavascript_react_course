import ReactDOM from 'react-dom/client'

// Get restaraunts data
import { restaurants } from './mock'

// Get a root DOM element
const rootElement = document.getElementById('root');
// Create a react root element 
const reactRoot = ReactDOM.createRoot(rootElement);

// Fulfill react root element with JSX and render it
reactRoot.render(
  <>
  {/*First Restaurant*/}
  <div>
    <h1>{restaurants[0].name}</h1>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[0].menu[0].name}</li>
      <li>{restaurants[0].menu[1].name}</li>
      <li>{restaurants[0].menu[2].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[0].reviews[0].text}</li>
      <li>{restaurants[0].reviews[1].text}</li>
    </ul>
  </div>

  {/*Second Restaurant*/}
  <div>
    <h1>{restaurants[1].name}</h1>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[1].menu[0].name}</li>
      <li>{restaurants[1].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[1].reviews[0].text}</li>
      <li>{restaurants[1].reviews[1].text}</li>
      <li>{restaurants[1].reviews[2].text}</li>
    </ul>
  </div>

  {/*Third Restaurant*/}
  <div>
    <h1>{restaurants[2].name}</h1>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[2].menu[0].name}</li>
      <li>{restaurants[2].menu[1].name}</li>
      <li>{restaurants[2].menu[2].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[2].reviews[0].text}</li>
    </ul>
  </div>

  {/*Fourth Restaurant*/}
  <div>
    <h1>{restaurants[3].name}</h1>
    <h3>Меню</h3>
    <ul>
      <li>{restaurants[3].menu[0].name}</li>
      <li>{restaurants[3].menu[1].name}</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>{restaurants[3].reviews[0].text}</li>
      <li>{restaurants[3].reviews[1].text}</li>
    </ul>
  </div>
  </>
)
