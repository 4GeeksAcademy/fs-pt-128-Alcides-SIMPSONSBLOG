export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    locations: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      }
    case "toggle_favorite": {
      const fav = action.payload; 

      const exists = store.favorites.some(
        item => item.id === fav.id && item.type === fav.type
      )

      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(item => !(item.id === fav.id && item.type === fav.type))
          : [...store.favorites, fav]
      }
    }

    case 'set_locations':
      return {
        ...store,
        locations: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
