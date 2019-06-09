import React from 'react'
import Playlist from './../../../entities/playlist'
import Storage from './../../../services/storage';
import { Button } from 'antd'
import { Avatar } from 'antd';


interface State {
    playlists: any
    songList : any
}

interface playlistObject {
    name: string,
    created_by: string,
    title: string,
    cover_image: string,
    link: string,
    id : string
}

interface Props {
    room: any
    songList : any
    hasSongAdded: boolean
}

class PlaylistList extends React.Component<Props, State> {

    playlist: Playlist
    storage: Storage

    constructor(props: any) {
        console.log(props);
        super(props);
        this.playlist = new Playlist();
        this.storage = new Storage;
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

    async componentWillReceiveProps(props : any) {

        if(props.songList.length !== this.props.songList.length) {
            this.setState({songList : props.songList})
        }
    }

    render() {
        return (

            <div>
                <h1>Songs on Queue</h1>
                <ul className="room-list">
                    {this.state.songList.map((item: playlistObject, index: number) => {
                        return <li key={index}>
                            <img src={item.cover_image} />
                            <a href={item.link} target="_blank">
                            {item.title} added by {item.created_by}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}


export default PlaylistList
