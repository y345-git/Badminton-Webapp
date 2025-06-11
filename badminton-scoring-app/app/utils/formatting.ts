// ... existing code ...
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Kolkata' // Set timezone to IST
  })
}

// Format time
export const formatTime = (time: string) => {
  if (!time) return 'N/A'
  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata' // Set timezone to IST
  })
}

// Format datetime
export const formatDateTime = (datetime: string) => {
  if (!datetime) return 'N/A'
  return new Date(datetime).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata' // Set timezone to IST
  })
}
// ... existing code ...
