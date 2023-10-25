const logger = (store) => (next) => (action) => {
    const current = store.getState()
    console.log('Current State =>',current)
    console.log('Action =>',action)
    next(action)
    console.log("Updated State => ", store.getState())

};

export default logger;
