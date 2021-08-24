import React from "react";
import { Route } from "react-router-dom";

import JobList from "./containers/job_application/JobListView";
import JobDetail from "./containers/job_application/JobDetailView";

import ApplicantDetail from "./containers/job_application/ApplicantDetailView";
import ApplicantList from "./containers/job_application/ApplicantListView";

import ApplicationList from "./containers/job_application/ApplicationListView";

import BusinessList from "./containers/job_application/BusinessListView";
import BusinessDetail from "./containers/job_application/BusinessDetailView";

import GuarantorList from "./containers/job_application/GuarantorListView";
import GuarantorDetail from "./containers/job_application/GuarantorDetailView";

import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/jobs/:jobID/" component={JobDetail} />{" "} 
    <Route exact path="/" component={JobList} />{" "} 

    <Route exact path="/applicant" component={ApplicantList} />{" "} 
    <Route exact path="/applicants/:applicantID/" component={ApplicantDetail} />{" "} 

    <Route exact path="/jobapplicationbusiness" component={BusinessList} />{" "}  
    <Route exact path="/jobapplicationbusiness/:businessID/" component={BusinessDetail} />{" "}  

    <Route exact path="/guarantor" component={GuarantorList} />{" "}   
    <Route exact path="/guarantor/:guarantorID/" component={GuarantorDetail} />{" "} 

    <Route exact path="/application" component={ApplicationList} />{" "} 

    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </div>
);

export default BaseRouter;