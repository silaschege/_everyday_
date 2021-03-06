import React from "react";
import axios from "axios";
import Applicants from "../../../components/job_application/applicant/applicant"
import axiosInstance from "../../../components/connection";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';



class ApplicantList extends React.Component {
  state = {
    applicants: []
  };

  fetchApplicants = () => {
    axiosInstance
    .get("job/Applicant/").then(res => {
      this.setState({
        applicants: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchApplicants();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchApplicants();      
    }
  }

  render() {
    return (
      <div>
        <ApplicantLayout>

        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/applicantcreate">Create</Link>
        </Button>

        <Applicants data={this.state.applicants} /> <br />
        </ApplicantLayout>
      </div>
    );
  }
}

export default ApplicantList;
