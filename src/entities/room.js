import RequestOut from './../services/requestOut'

class Room {

    constructor() {
        this.fields = [
            'name',
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

}

export default Room;
