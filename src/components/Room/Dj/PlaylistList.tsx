import React from 'react'
import Playlist from './../../../entities/playlist'
import Storage from './../../../services/storage';
import { Button } from 'antd'


interface State {
    playlists: any
}

interface playlistObject {
    name: string,
    created_by: string,
    id : string
}

class PlaylistList extends React.Component<{}, State> {

    playlist: Playlist
    storage: Storage

    constructor(props: any) {
        super(props);
        this.playlist = new Playlist();
        this.storage = new Storage;
        this.playPlaylist = this.playPlaylist.bind(this);
        this.state = {
            playlists: []
        }
    }

    async componentDidMount() {
        try {
            let data = (await this.playlist.getList()).data;
            this.setState({playlists: data})
        } catch (e) {
            console.log(e);
        }
    }

    playPlaylist(e : any)
    {
        this.storage.set()
        console.log(e);
    }

    render() {
        return (

            <div>
                <h1>Song list</h1>
                <ul className="room-list">
                    {this.state.playlists.map((item: playlistObject, index: number) => {
                        return <li key={index}>
                            {/* <button > play</button> */}
                            {item.name} created by {item.created_by}
                            <Button onClick={() => this.playPlaylist(item.id)} type="primary">Play</Button>                            
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}


export default PlaylistList
