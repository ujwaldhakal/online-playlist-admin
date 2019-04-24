import RequestOut from './../services/requestOut'

class Playlist {

    constructor() {
        this.fields = [
            'id',
            'name',
            'created_at',
            'created_by',
            'total_songs'
        ]
        this.requestOut = new RequestOut();
    }

    getFields() {
        let fields = "?fields=" + this.fields.join(",");
        return fields;
    }

    getList() {

        let url = 'playlists' + this.getFields();
        return this.requestOut.getPromise(url)
    }

}

export default Playlist;
