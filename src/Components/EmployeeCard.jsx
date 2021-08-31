import { Component } from "react";
import {EmpList,EmpCard} from './style'


class EmployeeCard extends Component{
    
    render(){
        return <EmpList>
        {this.props.data.map((emp)=>(
            <EmpCard key ={emp.empId} className='emp-card'>
            <h3> {emp.firstName} {emp.lastName}</h3>
            <p> {emp.company} </p>
            </EmpCard>
        ))} 
        </EmpList>
    }
}
export default EmployeeCard;