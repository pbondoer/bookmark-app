import createStore from 'unistore';
import { Bookmark } from '~/types';

export type State = {
  bookmarks: Bookmark[];
};

const loadBookmarks = (): Array<Bookmark> => {
  if (!localStorage) return [];

  const raw = localStorage.getItem('bookmarks');

  if (!raw) return [];

  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

export const exportBookmarks = (): void => {
  const data = loadBookmarks();

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });

  const a = document.createElement('a');
  a.className = 'hidden';
  document.body.appendChild(a);

  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = `bookmarks-${new Date().toISOString()}.json`;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const saveBookmarks = (bookmarks: Array<Bookmark>): void => {
  if (!localStorage) return;

  try {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    console.log(`Saved ${bookmarks.length} bookmarks`);
  } catch (e) {
    // Fail silently
    console.error(e);
  }
};

export const actions = {
  update: (state: State, bookmark: Bookmark): { bookmarks: Bookmark[] } => {
    const data = state.bookmarks || [];
    const index = data.findIndex(item => item.id === bookmark.id);

    if (index !== -1) {
      data[index] = bookmark;
    } else {
      data.push(bookmark);
    }

    return { bookmarks: [...data] };
  },
  delete: (state: State, id: string): { bookmarks?: Bookmark[] } => {
    const data = state.bookmarks;
    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
      console.error('Tried to delete invalid item');
      return {};
    }

    data.splice(index, 1);
    return { bookmarks: [...data] };
  },
};

export const store = createStore<State>({ bookmarks: loadBookmarks() });

store.subscribe(state => {
  saveBookmarks(state.bookmarks);
});
