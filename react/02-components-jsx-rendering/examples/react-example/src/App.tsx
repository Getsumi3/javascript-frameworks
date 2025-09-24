import './App.css'
import HelloWorld from "./components/HelloWorld";
import TheCount from "./components/TheCount";
import Logos from "./components/Logos";

function App() {
    return (
        <div>
            <HelloWorld msg={"You did it!"}/>
            <Logos/>
            <TheCount/>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
