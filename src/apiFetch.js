import ls from 'local-storage';
import queryString from 'query-string';

import { MANCREACT_SERVER_HOST } from './config/constants';

const apiFetch = async (uri, method = 'GET', args) => {
  let res;
  const noArgs = args == null;
  let url = MANCREACT_SERVER_HOST +
    uri +
    (noArgs ? '' : `?${queryString.stringify(args)}`);
  res = await fetch(
    new Request(url, {
      method,
      headers: new Headers({
        'X-Access-Token': ls('access_token') || null,
      }),
    })
  );
  return res.ok ? await res.json() : null;
};

export default apiFetch;
