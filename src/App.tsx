import "./App.css";

// import { ReactSlider, StarsBg } from "./components";
import { ModelsContainer, Cube, Sphere } from "./components";

function App() {
    return (
        <>
            {/*<StarsBg />
            <ReactSlider /> */}
            <ModelsContainer>
                <Cube />
            </ModelsContainer>
        </>
    );
}

export default App;
