
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AddForm, NotFound } from "./components";
import { PostList, FullPost, HeaderBlock } from "./modules"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderBlock/>
          <div className="container">
            <div className="content">
              <div className="content">
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
      </Router>
    </div>
  );
}

export default App;
