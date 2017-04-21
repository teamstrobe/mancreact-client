export const mockEvents = {
  1: {
    id: 1,
    name: 'Event 1',
    description: '<p><b>This is a hero title</b></p><p><i>This is a sub-ttile</i></p><p>Rest of the description here</p>',
    status: 'upcoming',
    time: 1493074800000,
  },
  2: {
    id: 2,
    name: 'Event 2',
    description: '<p>This is a description 2</p>',
    status: 'past',
    time: 1491865200000,
  },
  3: {
    id: 3,
    name: 'Event 3',
    description: '<p>This is a description 3</p>',
    status: 'past',
    time: 1488326400000,
  },
  4: {
    id: 4,
    name: 'Event 4',
    description: '<p>Quite a long time ago</p>',
    status: 'past',
    time: 1456790400000,
  },
};

export const mockEventsList = Object.keys(mockEvents).map(
  key => mockEvents[key]
);
