console.log("script work");

import "./style.css";
import createStartPage from "./pages/start-page/start-page.js"
import "./components/header/header.js"

document.body.classList = "text-gray-900";
document.body.append(createStartPage());
