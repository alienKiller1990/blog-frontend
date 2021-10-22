
import React from "react";

import { HeaderBlock } from "./components";



function App() {
  return (
    <div className="App">
      <HeaderBlock
        title="Заголовок сайта"
        description="Описание"
        imageUrl="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
      />
      <div className="container">
        <button type="button" class="btn btn-primary">Primary</button>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
