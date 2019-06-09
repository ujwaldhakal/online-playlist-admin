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
        let fields = [
            'id',
            'link',
            'title',
            'cover_image',
            'created_at',
            'created_by',
            'playlist_id',
            'is_youtube_list',
            'is_youtube_playlist_link',
            'is_playing']

        fields = fields.join(",");
        let url = `rooms/${slug}/current-playlist`+'?fields='+fields;
        return this.requestOut.getPromise(url);
    }

    addSongToDefaultPlaylist(roomId,songLink)
    {
        return this.requestOut.postPromise(`rooms/${roomId}/default/playlist/addsong`,{song_link: songLink})
    }

    create(data)
    {
        return this.requestOut.postPromise('rooms',{name:data});
    }


    getList()
    {
        return this.requestOut.getPromise('rooms'+this.getFields());
    }

    delete(id)
    {
        return this.requestOut.deletePromise('rooms/'+id);
    }
}

export default Room;
