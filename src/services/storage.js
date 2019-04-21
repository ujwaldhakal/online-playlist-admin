let storage = localStorage,
 prefix ="playlist_";

class Storage {


    static set(key, data) {
        storage.setItem(prefix + key, data);
    }


    get(key) {
        return storage.getItem(prefix + key);
    }

    remove(key) {
        storage.removeItem(prefix + key);
    }

    resetToDefault() {
        storage.clear();
    }
}

export default Storage
