import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';






//Dishma
import Getstart from "./components/Getstart";
import CreateDriver from "./components/CreateDriver";
import EditDriver from "./components/EditDriver";
import Homedriver from "./components/Homedriver";
import Adminhome from "./components/Adminhome";



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>






        {/*Dishma*/}
        <main className="page-body-content">
          <Route path="/" exact component={Getstart}></Route>

          <Route path="/homedriver" component={Header} />
          <Route path="/homedriver" exact component={Homedriver}></Route>
          <Route path="/homedriver" component={Footer} />
          <Route path="/adddriver" component={Header} />
          <Route path="/adddriver" component={CreateDriver}></Route>
          <Route path="/adddriver" component={Footer} />
          <Route path="/editdriver" component={Header} />
          <Route path="/editdriver/:id" component={EditDriver}></Route>
          <Route path="/editdriver" component={Footer} />

          <Route path="/adminhome" component={Header} />
          <Route path="/adminhome" component={Adminhome}></Route>
          <Route path="/adminhome" component={Footer} />
        </main>

      </BrowserRouter>
    )
  }
}