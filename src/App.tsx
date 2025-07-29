import "./App.css";

// import { ReactSlider, StarsBg } from "./components";
import { TestModel, ModelsContainer, Cube, Sphere } from "./components";

function App() {
    return (
        <>
            {/*<StarsBg />
            <ReactSlider /> */}
            <ModelsContainer>
                <Sphere />
            </ModelsContainer>
        </>
    );
}

export default App;
