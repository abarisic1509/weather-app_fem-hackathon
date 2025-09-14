import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import '@fontsource/dm-sans';
import '@fontsource/bricolage-grotesque';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
