const EventCard = ({ photoUrl, date, eventTheme, organizerName }) => {
  return React.createElement('div', { className: 'event-card' },
    React.createElement('img', { src: photoUrl, alt: eventTheme }),
    React.createElement('div', { className: 'event-details' },
      React.createElement('p', null, `Date: ${date}`),
      React.createElement('p', null, `Theme: ${eventTheme}`),
      React.createElement('p', null, `Organizer: ${organizerName}`)
    )
  );
};

const CalendarTable = ({ user, events }) => {
  return React.createElement('div', null,
    React.createElement('h2', null, `${user}'s Calendar`),
    React.createElement('div', { className: 'calendar-cards' },
      events.map((event, index) =>
        React.createElement(EventCard, { key: index, ...event })
      )
    )
  );
};

  const user = 'Иван';
  const events = [
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://klike.net/uploads/posts/2023-02/1675839044_3-490.jpg',
        date: '02.01.2023',
        eventTheme: 'Горы какие-то',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
      photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
      date: '02.01.2023',
      eventTheme: 'Зоопарк',
      organizerName: 'Константин Синицин',
  },
  {
      photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
      date: '01.01.2023',
      eventTheme: 'Париж',
      organizerName: 'Илья Кабелевский 1',
  },
  {
      photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
      date: '02.01.2023',
      eventTheme: 'Зоопарк',
      organizerName: 'Константин Синицин',
  },
  {
      photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
      date: '01.01.2023',
      eventTheme: 'Париж',
      organizerName: 'Илья Кабелевский 1',
  },
  {
      photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
      date: '02.01.2023',
      eventTheme: 'Зоопарк',
      organizerName: 'Константин Синицин',
  },
  {
      photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
      date: '01.01.2023',
      eventTheme: 'Париж',
      organizerName: 'Илья Кабелевский 1',
  },
  {
      photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
      date: '02.01.2023',
      eventTheme: 'Зоопарк',
      organizerName: 'Константин Синицин',
  },
  {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
    {
        photoUrl: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        date: '01.01.2023',
        eventTheme: 'Париж',
        organizerName: 'Илья Кабелевский 1',
    },
    {
        photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
        date: '02.01.2023',
        eventTheme: 'Зоопарк',
        organizerName: 'Константин Синицин',
    },
  ];
  
  ReactDOM.render(
    React.createElement(CalendarTable, { user, events }),
    document.getElementById('root')
  );
  