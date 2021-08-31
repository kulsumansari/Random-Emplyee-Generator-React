import { Component } from "react";
import {Button,EmpCard} from './style'


class EmployeeCard extends Component{
    // let {emp} =this.props.data;
    render(){
        return <EmpCard key ={this.props.data.empId} >
                    <h3> {this.props.data.firstName} {this.props.data.lastName}</h3>
                    <p> {this.props.data.company.split(',')[0] } </p>
                    <p> {this.props.data.firstName.toLowerCase()}{this.props.data.lastName.toLowerCase()}@{this.props.data.company.split(',')[0].replace(' - ' ,'').replace(' ' ,'').toLowerCase()}.com </p>
                    <Button secondary>View Profile</Button>
        </EmpCard>
    }
}
export default EmployeeCard;

