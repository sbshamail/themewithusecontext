export const persistance = (parentKey = "nextpersist") => {
  const ls = {
    set: function (key: string, value: any, pkey = parentKey) {
      if (typeof window !== "undefined") {
        // Retrieve existing data from local storage
        const storedData = localStorage.getItem(pkey);
        let data = storedData ? JSON.parse(storedData) : {};

        // Update or add the child key with JSON stringified value
        data[key] = JSON.stringify(value);

        // Save updated data back to local storage
        localStorage.setItem(pkey, JSON.stringify(data));
      }
    },

    get: function (key: string, pkey = parentKey) {
      if (typeof window !== "undefined") {
        // Retrieve existing data from local storage
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return null;

        const data = JSON.parse(storedData);
        // Parse and return the child key value
        return data[key] ? JSON.parse(data[key]) : null;
      }
      return null;
    },
    data: {},

    getAll: function (pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return null;
        const data = JSON.parse(storedData);

        // Parse each child key value
        Object.keys(data).forEach((key) => {
          data[key] = JSON.parse(data[key]);
        });
        ls.data = data;
        return data;
      }
      return null;
    },

    delete: function (key: string, pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return;

        const data = JSON.parse(storedData);
        delete data[key];

        // Save updated data back to local storage
        localStorage.setItem(pkey, JSON.stringify(data));
      }
    },
    deleteAll: function (pkey = parentKey) {
      if (typeof window !== "undefined") {
        // delete all keys in parent key
        return localStorage.removeItem(pkey);
      }
    },
    clear: function () {
      if (typeof window !== "undefined") {
        // dellete all in local storage
        return localStorage.clear();
      }
    },
  };
  return ls;
};

export const ls = persistance("nextpersist");
