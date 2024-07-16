import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import '@/styles/globals.css';
import '@fontsource/inter';
import { createElement } from 'react';

const root = createRoot(document.getElementById('root'));
root.render(createElement(App));