export const InitialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setAvatar':
      return {...state, avatar: action.playload.avatar};
    default:
      return state;
  }
};
