//Misc

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//pages

import App from './App';
import DefaultView, { videoDataLoader } from './pages/DefaultView';
import QueryResult, { queryDataLoader } from './pages/QueryResult';
import VideoPlayer from './pages/VideoPlayer';
import NotFound from './pages/NotFound';

//Router

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<DefaultView/> } loader={videoDataLoader}/>
      <Route path=':vID' element={<VideoPlayer/>}/>
      <Route path='result/:query' element={<QueryResult/>} loader={queryDataLoader}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
