import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProjectsPage from './routes/ProjectsPage';
import ProjectDetailPage from './routes/ProjectDetailPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/projects' element={<ProjectsPage />} />
			<Route path='/projects/:slug' element={<ProjectDetailPage />} />
		</Routes>
	</BrowserRouter>
);
