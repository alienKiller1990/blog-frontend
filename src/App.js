
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AddForm, FullPost, HeaderBlock, PostList, NotFound } from "./components";

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

                  <Route
                    path="/posts/:id"
                    exact
                    component={() => (
                      <FullPost title="Заголовок статьи" createdAt={'' + new Date()} />
                    )} />

                  <Route
                    path="/posts/:id/edit"
                    exact
                    component={AddForm}/>

                  <Route path="*" component={NotFound} />
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
