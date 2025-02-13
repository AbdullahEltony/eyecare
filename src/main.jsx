import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// aos import
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

// react-datepicker import
import 'react-datepicker/dist/react-datepicker.css';

// apexcharts
import "apexcharts/dist/apexcharts.css";

// react-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Provider } from "react-redux";
import {store} from "./store";

AOS.init();
const root = document.getElementById("root");
createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>
);
