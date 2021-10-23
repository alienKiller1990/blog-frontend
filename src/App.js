
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AddForm, HeaderBlock, PostList } from "./components";

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
          {/* <button type="button" className="btn btn-primary">Add post</button> */}

          <div className="content">
            <Router>
              <div>
                <Switch>
                  <Route
                    path="/"
                    exact
                    component={() => (
                      <PostList posts={[
                        {
                          _id: '1',
                          title: 'Первая статья',
                          createdAt: '' + new Date()
                        },
                        {
                          _id: '2',
                          title: 'Вторая статья',
                          createdAt: '' + new Date()
                        },
                        {
                          _id: '3',
                          title: 'Третья статья',
                          createdAt: '' + new Date()
                        },
                      ]} />
                    )} />
                  {/* <Route path="/post/:id" component={FullPost} /> */}
                  {/* <Route path="/not-found" component={NotFound} /> */}
                </Switch>
              </div>
            </Router>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
