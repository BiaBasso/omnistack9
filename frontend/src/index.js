import React from 'react'; // Uma biblioteca global para construção de interfaces
import ReactDOM from 'react-dom'; // Uma biblioteca para uma determinada aplicação, nesse caso web
import App from './App';

// Quando se cria um componente (nesse caso o App), ele virá uma tag HTML para ser renderizado
// Tudo que for feito dentro desse App, será renderizado dentro do arquivo index.html no elemento com id root
ReactDOM.render(<App />, document.getElementById('root'));

