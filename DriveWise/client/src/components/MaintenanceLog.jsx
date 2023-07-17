import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetMaintenance } from '../services/MaintenanceService'

const Maintenance = (props) => {

  return (
    <div className="maintenance-div">
      <h1>Maintenance Log</h1>
      <p>{props.log.mileage}</p>
      <p>{props.log.description}</p>
    </div>
  )
}

export default Maintenance
