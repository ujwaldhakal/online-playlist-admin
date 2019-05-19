import React from 'react'
import Playlist from './../../../entities/playlist'
import Storage from './../../../services/storage';
import { Button } from 'antd'


interface State {
    playlists: any
    songList : any
}

interface playlistObject {
    name: string,
    created_by: string,
    id : string
}

interface Props {
    room: any
    songList : any
}

class PlaylistList extends React.Component<Props, State> {

    playlist: Playlist
    storage: Storage

    constructor(props: any) {
        console.log(props);
        super(props);
        this.playlist = new Playlist();
        this.storage = new Storage;
        this.playPlaylist = this.playPlaylist.bind(this);
        this.state = {
            playlists: [],
            songList: this.props.songList
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
                <h1>Songs on Queue</h1>
                <ul className="room-list">
                    {this.state.songList.map((item: playlistObject, index: number) => {
                        return <li key={index}>
                            {/* <button > play</button> */}
                            {item.name} created by {item.created_by}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}


export default PlaylistList
