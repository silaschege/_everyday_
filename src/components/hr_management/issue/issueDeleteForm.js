import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';


const FormItem = Form.Item;


export default function ComplainDeleteForm () {
    const history = useHistory();
	const { issueID } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete(`hr/Issue/${issueID}/`)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history.push({
						pathname: '/issue/',
					});
					window.location.reload();
			});
	};


	

    return (
      <div>
          <Form>
          <FormItem>
            <Button 
            type="submit"
			color="Blue"
			onClick={handleSubmit}
            >
            Delete
            </Button>
          </FormItem>

        </Form>
        
      </div>
    );
  
}


