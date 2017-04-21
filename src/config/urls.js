import queryString from 'query-string';
import { MEETUP_AUTH_URL, CLIENT_ID, MEETUP_REDIRECT_URI } from './constants';
import ls from 'local-storage';

export const loginURL = () =>
  `${MEETUP_AUTH_URL}?${queryString.stringify({
    client_id: CLIENT_ID,
    response_type: 'token',
    redirect_uri: MEETUP_REDIRECT_URI,
    scope: 'basic rsvp group_content_edit ageless',
  })}`;

export const commentsStreamURL = (eventId) =>
  `ws://stream.meetup.com/2/event_comments?${queryString.stringify({
    event_id: eventId,
    access_token: ls('access_token'),
  })}`;

export const eventURI = (eventId) => `/events/${eventId}`

export const eventRsvpsURI = (eventId) => `${eventURI(eventId)}/rsvps`;

export const eventCommentsURI = (eventId) => `${eventURI(eventId)}/comments`;

export const selfURI = () => '/members/self';

export const groupURI = () => '/group';

export const eventsURI = () => '/events';
