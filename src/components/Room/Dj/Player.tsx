import React from 'react'
import YouTube from 'react-youtube';

interface State {
    songList: any
}

interface Props {
    props: any;
    room: any;
    songList: any
}

class Player extends React.Component<Props, State> {

    constructor(props: any) {
        console.log(props);
        super(props);
        this.onEnd = this.onEnd.bind(this);
        this.state = {
            songList: this.props.songList
        }
    }

    getYoutubeId(url: string): any {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    getSongToPlay() {

    }

    onEnd() {

        let data = this.state.songList;

        data.map(function (item: any) {

            console.log(item);
            if (item.is_playing) {

            }


        });

        console.log(data);
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
                    : false}
            </div>
        )
    }
}


export default Player
