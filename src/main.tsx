// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import './index.css'
import r2wc from '@r2wc/react-to-web-component'
import App from './App.tsx'

const WebApp = r2wc(App, {
  props: { title: 'string' },
})

customElements.define('react-component', WebApp)
//
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
