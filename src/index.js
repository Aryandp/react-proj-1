import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
//import ContactForm from './ContactForm';
//import Todolist from './Todolist';
//import TodoApp from './TodoApp';
//import TodoBox from './TodoBox';


import * as serviceWorker from './serviceWorker';

// ReactDOM.render((
//   <Router history = {browserHistory}>
//       <Route path = "/" component = {App}>
//          <IndexRoute component = {App} />
//           <Route path = "App" component = {App} />
//          <Route path = "ContactForm" component = {ContactForm} />
//       </Route>
//    </Router>), document.getElementById('root'));
ReactDOM.render(
<BrowserRouter>
        <App />

  </BrowserRouter>
  , document.getElementById('root'));

//ReactDOM.render(<ContactForm />, document.getElementById('root'));

//ReactDOM.render(<Todolist />, document.getElementById('root'));
// //ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('root')
// );
//ReactDOM.render(<TodoBox />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
