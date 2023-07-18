import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetMaintenance } from '../services/MaintenanceService'

const Maintenance = (props) => {

  return (
    <div className="maintenance-div">
      <h1 className='maintenance-header'>Maintenance Log</h1>
      <div className='maintenance-body'>
        <ul>
          <li>Mileage: {props.log.mileage}</li>
          <li>Oil Change: {props.log.oilchange}</li>
          <li>Tire Rotation: {props.log.tirerotation}</li>
        </ul>
        <ul>
          <li>Brakes: {props.log.brakes}</li>
          <li>Wheel Alignment: {props.log.alignment}</li>
          <li>Battery: {props.log.battery}</li>
        </ul>
        
      </div> 
    </div>
  )
}

export default Maintenance
