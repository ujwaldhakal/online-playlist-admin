import React from 'react'
import YouTube from 'react-youtube';
import Room from "../../../entities/room";

interface State {
    songList: any
}

interface Props {
    props: any;
    room: any
}

class Player extends React.Component<Props, State> {
    room: Room;

    constructor(props: any) {
        super(props);
        this.onEnd = this.onEnd.bind(this);
        this.room = new Room();
        this.state = {songList: false}
    }

    getYoutubeId(url: string): any {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    async componentDidMount() {
        try {
            let playlist = await this.room.getCurrentPlaylist(this.props.props.room.id);
            this.setState({songList: playlist.data})
        } catch (e) {
            console.log(e);
        }
    }

    onEnd() {
        console.log('yeah');
    }

    render() {
        const opts = {
            height: '390',
            width: '350',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }
        return (
            <div>
                {this.state.songList ?
                <YouTube
                    className="room-video"
                    videoId={this.getYoutubeId(this.state.songList[0].link)}
                    onEnd={this.onEnd}
                />
                    : false }
            </div>
        )
    }
}


export default Player
