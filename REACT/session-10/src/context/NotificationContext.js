import React, { createContext, useState, useContext } from 'react';

export const NotificationContext = createContext({
  unreadCount: 4,
  recentMessages: [],
  incrementCount: () => {},
  decrementCount: () => {},
  clearNotifications: () => {}
});

export function NotificationProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(4);
  const [recentMessages, setRecentMessages] = useState([
    { id: 1, sender: 'Dev Community', text: 'New React features announced', time: '10:42 AM' },
    { id: 2, sender: 'Priya Patel', text: 'Can you review the PR?', time: '11:15 AM' },
    { id: 3, sender: 'Store Deals', text: 'Discount on electronics ends tonight', time: '11:30 AM' },
    { id: 4, sender: 'Rahul Verma', text: 'Meeting rescheduled to 4:00 PM', time: '12:05 PM' }
  ]);

  const incrementCount = () => {
    const newMsg = {
      id: Date.now(),
      sender: 'Project Group',
      text: `Incoming message #${unreadCount + 1}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setRecentMessages(prev => [newMsg, ...prev]);
    setUnreadCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const clearNotifications = () => {
    setUnreadCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{
        unreadCount,
        recentMessages,
        incrementCount,
        decrementCount,
        clearNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);

export default NotificationContext;
