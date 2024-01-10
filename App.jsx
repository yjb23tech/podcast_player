import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Sanity Check (But We Still Pushing P)</h1>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

