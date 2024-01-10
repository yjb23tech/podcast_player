import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Sanity Check (But We Still Pushing P)</h1>
            <Card 
                pp_title = "Prometheus Rising"
                pp_description = "Above It All"
                pp_number_of_likes = "1 like"
                pp_number_of_comments = "1 comment"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

