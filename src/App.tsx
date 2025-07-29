import "./App.css";

// import { ReactSlider, StarsBg } from "./components";
import { TestModel, ModelsContainer, Cube } from "./components";

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
