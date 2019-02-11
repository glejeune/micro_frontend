import EventEmitter from 'eventemitter3';

class Channel extends EventEmitter {
  constructor(name) {
    super();

    this.name = name;
    this.subscribers = [];
    this.lastMessage = undefined;
  }

  subscribe(fun) {
    const subscriber = this.uuidv4();
    this.subscribers[subscriber] = fun;
    this.on(subscriber, fun)
    if (this.lastMessage) {
      this.emit(subscriber, this.lastMessage);
    }
    return subscriber;
  }

  unsubscribe(uuid) {
    const fun = this.subscribers[uuid]
    if (fun) {
      this.off(uuid, fun)
      delete this.subscribers[uuid]
    }
  }

  send(message) {
    this.lastMessage = message;
    Object.keys(this.subscribers).forEach((key) => {
      this.emit(key, message);
    });
  }

  onError(error){ console.log(error) }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
}

class RealtimeDispatcher {
  constructor() {
    this.channels = {};
    this.subscribers = {};
  }

  subscribe(channelName, fun) {
    const channelObject = this.getChannel(channelName);
    const subscriber = channelObject.subscribe(fun)
    this.subscribers[subscriber] = channelName;

    return subscriber;
  }

  unsubscribe(subscriber) {
    const channelName = this.subscribers[subscriber];
    if (channelName) {
      this.getChannel(channelName).unsubscribe(subscriber);
      delete this.subscribers[subscriber]
    }
  }

  send(channelName, message) {
    this.getChannel(channelName).send(message);
  }

  getChannel(channelName) {
    let channelObject = this.channels[channelName];
    if (! channelObject) {
      this.channels[channelName] = new Channel(channelName);
      channelObject = this.channels[channelName];
    }
    return channelObject;
  }
}

export default RealtimeDispatcher;
