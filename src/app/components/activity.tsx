const ActivityFeed = ({ notifications }: any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
      <ul>
        {notifications.map((notification: any, index: any) => (
          <li key={index} className="border-b border-gray-200 py-2">
            <span className="text-gray-600 mr-2">{notification.timestamp}</span>
            <span>{notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityFeed
