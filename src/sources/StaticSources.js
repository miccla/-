import MenuActions from '../actions/MenuActions';

const mockCompanies = [
  { value: 99, label: 'Coke' }, // Try not to use 0 index as falsey etc.
  { value: 1, label: 'Pepsi' },
  { value: 2, label: 'Starbucks' },
  { value: 3, label: 'Lucozade' },
  { value: 4, label: 'Inocent' },
  { value: 5, label: 'Guiness' },
  { value: 6, label: 'Heiniken' },
  { value: 7, label: 'Carlsberg' },
];

const mockAccounts = {
  99: [{ value: 99, label: 'A' }, { value: 1, label: 'B' }],
  1: [{ value: 2, label: 'C' }, { value: 3, label: 'D' }],
  2: [{ value: 4, label: 'E' }, { value: 5, label: 'F' }],
  3: [{ value: 6, label: 'G' }, { value: 7, label: 'H' }],
  4: [{ value: 8, label: 'I' }, { value: 9, label: 'J' }],
  5: [{ value: 10, label: 'K' }, { value: 11, label: 'L' }],
  6: [{ value: 12, label: 'M' }, { value: 13, label: 'N' }],
  7: [{ value: 14, label: 'O' }, { value: 15, label: 'P' }],
};

export const StaticSources = {
  getCompanies() {
    return {
      remote() {
        return new Promise((resolve, reject) => {
          // simulate an asynchronous flow where data is fetched on a remote server
          setTimeout(() => {
            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockCompanies);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },
      success: MenuActions.updateCompanies,
      error: MenuActions.companiesFailed,
    };
  },

  getAccounts() {
    return {
      remote(state) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(mockAccounts[state.companyValue]);
            }, 1000);
        });
      },
      success: MenuActions.updateAccounts,
      error: MenuActions.accountsFailed,
    };
  },
};

