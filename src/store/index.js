import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: 'm1',
          title: 'A trip into the mountains',
          description: 'It was a really nice trip!',
          image:
            'https://uiaa-web.azureedge.net/wp-content/uploads/2017/12/2018_banner.jpg',
        },
        {
          id: 'm2',
          title: 'Sufring the sea side',
          description: 'Feeling the cool breeze',
          image:
            'https://static01.nyt.com/images/2020/03/06/sports/06tahiti-surfWEB1/merlin_142344687_faae219b-6504-4f43-a311-3e8ed3eec66d-superJumbo.jpg?quality=90&auto=webp',
        },
        {
          id: 'm3',
          title: 'Good eating',
          description: 'Really tasty!',
          image:
            'http://healthytipswiki.com/wp-content/uploads/2015/07/Good-Eating-Habbits.jpg',
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
