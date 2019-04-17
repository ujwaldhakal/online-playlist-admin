import RequestOut from './../services/requestOut'

class Room {

    constructor() {
        this.fields = [
            'name',
            'id',
            'slug',
            'dj_id',
            'created_at'
        ]
        this.requestOut = new RequestOut();
    }

    getFields() {
        let fields = "?fields=" + this.fields.join(",");
        return fields;
    }

    getBySlug(slug) {
        let url = 'rooms'+this.getFields()+`&slug=${slug}`;
        return this.requestOut.getPromise(url)
    }

    getCurrentPlaylist(slug)
    {
        let url = `rooms/${slug}/current-playlist`;
        return this.requestOut.getPromise(url);
    }

}

export default Room;
