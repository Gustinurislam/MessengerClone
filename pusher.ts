import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: '1514599',
  key: '46d279944ef930de62d5',
  secret: '32024409b5bf3b237f83',
  cluster: 'ap1',
  useTLS: true,
});

export const clientPusher = new ClientPusher('46d279944ef930de62d5', {
  cluster: 'ap1',
  forceTLS: true,
});
