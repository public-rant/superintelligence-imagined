import ReactDOM from 'react-dom/client';
import { SimpleEditor } from './components/SimpleEditor.js';
import 'uno.css';
import '@unocss/reset/tailwind-compat.css';
import './variables.css';
import './custom.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<SimpleEditor />);
