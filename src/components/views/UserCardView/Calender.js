import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import moment from 'moment'
import { useHistory } from 'react-router-dom';

const NEW_KEYS = Object.freeze({
  start_time: 'startDate',
  end_time: 'endDate'
})

export default function  Callender(props){
  let dataSets = []
  const { activity_periods } = props.location
  const history = useHistory()
  useEffect(() => {
    if (!activity_periods) {
      history.push('/')      
    }
  }, [])
  activity_periods && activity_periods.map(item => {
    const newItem = {};
    Object.keys(item).forEach(key => {
      newItem[NEW_KEYS[key]] = moment(item[[key]]).format('YYYY-MM-DDTHH:mm')
    })
    dataSets.push(newItem)
  })
  return(
    <Paper>
    <Scheduler data={dataSets}>
      <ViewState
        currentDate={dataSets[0]?.startDate}
      />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
  )
}
