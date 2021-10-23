
import React from "react";

import { HeaderBlock, PostItem } from "./components";


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
            <form className="add-form">
              <div className="add-form__row">
                <h4>
                  <label for="title">Title</label>
                </h4>
                <input
                  type="email"
                  className="form-control"
                  id="title"
                  placeholder="Enter email"
                />
              </div>

              <div className="add-form__row">
                <h4>
                  <label for="image">Image URL</label>
                </h4>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Enter image URL"
                />
              </div>

              <div className="add-form__row">
                <h4>
                  <label for="description">Description</label>
                </h4>
                <textarea
                  row="10"
                  className="form-control"
                  id="description"
                  placeholder="Enter email"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
