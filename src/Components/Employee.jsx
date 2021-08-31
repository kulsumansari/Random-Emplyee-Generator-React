import { Component } from "react";
import  faker from 'faker';
import uniqid from 'uniqid';
import EmployeeCard  from "./EmployeeCard";
import {Button} from './style'


class Employee extends Component{
  
    state = {
        Employees:[]
    }
    generateEmployee=()=>{
        let emp = {
            empId :uniqid(),
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            company : faker.company.companyName()
        }
        this.state.Employees.push(emp)
        this.setState({Employees : this.state.Employees})
        
        // console.log(this.state.Employees)
    }

    render(){
        return <div>
            <h3>Random Emplyee Generator</h3>
                <Button onClick={this.generateEmployee} primary> Generate</Button>
                <EmployeeCard data={ this.state.Employees } />

                {/* <div className='emp-list'>
                {this.state.Employees.map((emp)=>(
                    <div id ={emp.empId} >
                    <h3> {emp.firstName} {emp.lastName}</h3>
                    <p> {emp.company} </p>
                    </div>
                ))}
                </div> */}
        </div>
    }
}
export default Employee;