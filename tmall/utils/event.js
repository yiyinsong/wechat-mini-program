let events = {};

export const addListener = (eventName, callback, target) => {
    callback.callers = target;
    if(!events[eventName]) {
        events[eventName] = [callback];
    } else {
        events[eventName].push(callback);
    }
};

export const removeListener = (eventName, callback, target) => {
    if(events[eventName]) {
        for(let [index, evt] of events[eventName].entries()) {
            if(evt.callers === target) {
                events[eventName].splice(index, 1);
            };
        }
    }
}

export const emit = (eventName) => {
    for(let [index, evt] of events[eventName].entries()) {
        evt();
    }
}