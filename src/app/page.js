'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [request, setRequest] = useState({
    title: 'Material ABC',
    status: 'Pending',
  });
  const [timer, setTimer] = useState(0)

  const startTimer = (duration) => {
    setTimer(duration);
    const timerInterval = setInterval(() => {
      if (timer === 0) {
        clearInterval(timerInterval);
      }
      setTimer(timer - 1);
    }, 1000);
  }

  const handleRequestButtonClick = () => {
    if (request.status === 'In Progress') {
      setRequest({
        ...request,
        status: 'Cancel Request',
      });
      setTimer(0);
    } else {
      setRequest({
        ...request,
        status: 'In Progress',
      });
      startTimer(10);
    }
  }

  return (
    <div className='container'>
      <div className='requestBlock'>
        <div className='title'>{request.title}</div>
        <div className='status'>Status: {request.status}</div>
        <div className='timer'>{timer}</div>
      </div>
      <div className='buttonContainer'>
        <button onClick={handleRequestButtonClick}>{request.status === 'In Progress' ? 'Cancel Request' : 'Create Request'}</button>
      </div>
    </div>
  )
}
