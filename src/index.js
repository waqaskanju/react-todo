import React from "react"
import ReactDOMClient from "react-dom/client"
import TodoContainer from "./components/TodoContainer"

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<TodoContainer />);

