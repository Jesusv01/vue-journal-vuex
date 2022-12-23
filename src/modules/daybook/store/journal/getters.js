// export const myGetter = (state) => {

// };

export const getEntriesByTerm = (state) => (term = '') => {
  if (term.length === 0) return state.entries;

  return state.entries.filter((entry) => entry.text.toLowerCase().includes(term.toLowerCase()));
};

export const getEntryById = (state) => (id = '') => {
  const findEntry = state.entries.find((entry) => entry.id === id);

  if (!findEntry) return;

  // eslint-disable-next-line consistent-return
  return { ...findEntry };
};
