
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AddForm, HeaderBlock, NotFound } from "./components";
import { PostList, FullPost } from "./modules"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderBlock
            title="Заголовок сайта"
            description="Описание"
            imageUrl="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
          />
          <div className="container">
            <div className="content">
              <div className="content">
                <div>
                  <Switch>
                    <Route path="/" exact component={() => (<PostList />)} />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/posts/:id" exact component={() => <FullPost title="Заголовок статьи" createdAt={'' + new Date()} />} />
                    <Route path="/posts/:id/edit" exact component={AddForm} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
