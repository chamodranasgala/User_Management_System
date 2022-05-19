import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Header
import Header from './components/Header';

//Navbar
import Navbar from './components/navbar';

//Members
import MemberList from './components/Member List/MemberList';
import EditMember from './components/Member List/EditMember';
import PostMember from './components/Member List/PostMember';

//WorkoutPlan
import WorkoutPlan from './components/Workout Plan/WorkoutPlan';
import EditPlan from './components/Workout Plan/EditPlan';

//Footer
import Footer from './components/Footer';

//Login
import Login from './components/Login';




//Dishma
import Getstart from "./components/Getstart";
import CreateDriver from "./components/CreateDriver";
import EditDriver from "./components/EditDriver";
import Homedriver from "./components/Homedriver";
import Adminhome from "./components/Adminhome";



export default class App extends Component {
  render() {
    return (

      <div>
        <BrowserRouter>

          {/*Member*/}

          <Route path="/memberlist" component={Header}></Route>
          <Route path="/memberlist" component={Navbar}></Route>
          <Route path="/memberlist" component={MemberList}></Route>
          <Route path="/memberlist" component={Footer}></Route>

          <Route path="/editmember" component={Header}></Route>
          <Route path="/editmember" component={Navbar}></Route>
          <Route path="/editmember/:id" component={EditMember}></Route>
          <Route path="/editmember" component={Footer}></Route>

          <Route path="/postmember" component={Header}></Route>
          <Route path="/postmember" component={Navbar}></Route>
          <Route path="/postmember/:id" component={PostMember}></Route>
          <Route path="/postmember" component={Footer}></Route>

          {/*Workout Plan*/}
          <Route path="/workoutplans" component={Header}></Route>
          <Route path="/workoutplans" component={Navbar}></Route>
          <Route path="/workoutplans" component={WorkoutPlan}></Route>
          <Route path="/workoutplans" component={Footer}></Route>

          <Route path="/editworkoutplan" component={Header}></Route>
          <Route path="/editworkoutplan" component={Navbar}></Route>
          <Route path="/editworkoutplan/:id" component={EditPlan}></Route>
          <Route path="/editworkoutplan" component={Footer}></Route>

          {/*Login*/}
          <Route path="/login" component={Header}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/login" component={Footer}></Route>





          {/*Dishma*/}
          <main className="page-body-content">

            <div className="centainer">

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
            </div>
          </main>

        </BrowserRouter>
      </div>

    )
  }
}