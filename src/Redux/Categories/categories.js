const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

export { checkStatus };

const inital = [];

const statusReducer = (state = inital, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return {
        currentStatus: 'UNDER CONSTRUCTION',
      };
    default:
      return state;
  }
};
export default statusReducer;
