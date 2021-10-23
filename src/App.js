
import React from "react";

import { AddForm, HeaderBlock, PostItem } from "./components";

function App() {
  return (
    <div className="App">
      <HeaderBlock
        title="Заголовок сайта"
        description="Описание"
        imageUrl="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
      />
      <div className="container">
        <div className="content">
          <button type="button" className="btn btn-primary">Add post</button>

          <div className="content">
            {/* <div className="post-items">
              <PostItem
                title="Заголовок статьи"
                createdAt={'' + new Date()}
                _id="1"
              />
            </div> */}
           <AddForm/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
