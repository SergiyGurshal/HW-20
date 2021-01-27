const initialState = {
  posts: [
    {
      name: 'Mikaela Carroll',
      content: 'One morning, when Gregor Samsa woke from troubled dreams.',
      image:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      id: 1,
    },
    {
      name: 'Jesse Gibbons',
      content: 'A wonderful serenity has taken possession of my entire soul.',
      image:
        'https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      id: 2,
    },
    {
      name: 'Kalum Branch',
      content: 'Far far away, behind the word mountains',
      image: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
      id: 3,
    },
  ],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return { ...state, posts: [...state.posts, action.payload] }
    default:
      return state
  }
}
