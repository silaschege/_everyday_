import React , { useState } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory } from 'react-router-dom';


const FormItem = Form.Item;


export default function EmployeeCreateForm () {


  
  
  const history = useHistory();
	const initialFormData = Object.freeze({
		First_name: '',
		Last_name: '',
		Other_Names: '',
    Id_Number: '',
    Phone_Number: '',
    Post: '',
    Company_Position : '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`/hr/Employee/`, {
        First_name: formData.First_name,
        Last_name: formData.Last_name,
        Other_Names: formData.Other_Names,
        Id_Number: formData.Id_Number,
        Phone_Number: formData.Phone_Number,
        Post: formData.Post,
        Company_Position : formData.Company_Position,


			})
			.then((res) => {
				history.push('/employee');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>

  
          <FormItem label="First Name">
            <Input 
            id="First_name"
            name="First_name" 
						label="First name"
						onChange={handleChange}
            placeholder="Input a first name here" 
            />
          </FormItem>

          <FormItem label="Last Name">
            <Input 
            id="Last_name"
            name="Last_name" 
						label="Last name"
						onChange={handleChange}
            placeholder="Input a last name here" 
            />
          </FormItem>

          <FormItem label="Other_Names">
            <Input 
            id="Other_Names"
            name="Other_Names" 
						label="Other_Names"
						onChange={handleChange}
            placeholder="Input a other names here" 
            />
          </FormItem>

          <FormItem label="Id_Number">
            <Input 
            id="Id_Number"
            name="Id_Number" 
						label="Id_Number"
						onChange={handleChange}
            placeholder="Input a Id number here" 
            />
          </FormItem>

          <FormItem label="Phone Number">
            <Input 
            id="Phone_Number"
            name="Phone_Number" 
						label="Phone Number"
						onChange={handleChange}
            placeholder="Input a business phone number here" 
            />
          </FormItem>

          <FormItem label="Post">
            <Input 
            id="Post"
            name="Post" 
						label="Post"
						onChange={handleChange}
            placeholder="Input your post of work here" 
            />
          </FormItem>

          <FormItem label="Company Position">
            <Input 
            	id="Company_Position"
              name="Company_Position" 
             label="Company_Position"
             onChange={handleChange}
            placeholder="Input a Company_Position here" 
            />
          </FormItem>


          <FormItem>
            <Button 
            type="submit"
						color="Blue"
						onClick={handleSubmit}
            >
            Create
            </Button>
          </FormItem>

        </Form>
        </HrLayout>
      </div>
    );
  
}


