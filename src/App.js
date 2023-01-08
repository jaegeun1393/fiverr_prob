import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./main_components/Home";
import Instructors from "./Instructors";
import ContactInformation from "./ContactInformation";
import Testmonial from "./Testmonial";

import Elementary from "./programs/school_elementary";
import Middle from "./programs/school_middle";
import High from "./programs/school_high";
import SatAct from "./programs/school_satact";

import Grade12 from "./college_admission/grades_12";
import BSMDCandidates from "./college_admission/Components/Pages/BSMDCandidates";


import "./App.css";


function App() {
  document.title = "MMT Prep";

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />

      {/*  <Route path="/Instructors" component={Instructors} /> */}
        <Route path="/ContactInformation" component={ContactInformation} />
        <Route path="/Testmonial" component={Testmonial} />

        <Route path="/programs">
          <Route path="/programs/school/elementary" component={Elementary} />
          <Route path="/programs/school/middle" component={Middle} />
          <Route path="/programs/school/high" component={High} />
          <Route path="/programs/satact" component={SatAct} />
        </Route>

        <Route path="/collegeadmission">
          <Route path="/collegeadmission/grade12" component={Grade12} />
          <Route path="/collegeadmission/bsmdcandidates" component={BSMDCandidates} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
