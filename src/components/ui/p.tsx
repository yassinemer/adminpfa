// OrderStatus.js
import React from 'react';

function OrderStatus({ status }) {
  let statusColorClass;

  switch (status) {
    case 'pending':
      statusColorClass = 'text-yellow-500';
      break;
    case 'confirmed':
      statusColorClass = 'text-green-500';
      break;
    case 'shipped':
      statusColorClass = 'text-blue-800';
      break;
    case 'delivered':
      statusColorClass = 'text-green-700'; // A shade of green, more than confirmed
      break;
    case 'cancelled':
      statusColorClass = 'text-red-500';
      break;
    default:
      statusColorClass = 'text-gray-500'; // Default color if status is not recognized
      break;
  }

  return (
   <p><p className={`text-gray-500 dark:text-gray-400 ${statusColorClass}`}> {status}</p></p>
  );
}

export default OrderStatus;
