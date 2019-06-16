import RequestOut from './../services/requestOut'

class User {

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

    changeSong(playlistId, songId) {
        let url = 'playlists/' + playlistId + '/song/auto-change?song_id=' + songId;
        return this.requestOut.getPromise(url);

    }

}

export default Playlist;
