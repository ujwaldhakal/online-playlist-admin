import React from 'react'
import { Input, Tooltip, Icon, Button } from 'antd';
import Room from './../../entities/room'

interface State {
    youtubelink: string;
};

interface Props {
    room: any,
    songAdded : any
}

class AddSong extends React.Component<Props, State> {

    room : Room;

    constructor(props: any) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            youtubelink: ""
        };
        this.room = new Room();
    }


    handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {

        this.setState({youtubelink: e.target.value});
        console.log(e.target.value);
    }

    async submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await this.room.addSongToDefaultPlaylist(this.props.room.id,this.state.youtubelink);
            // this.setState({youtubelink: ''});
            this.props.songAdded();
        } catch (error) {
            console.log(error);
        }


    }

    render() {
        return (
            <div className="room-form">
                <h1>Add Songs</h1>
                <div>
                    <form onSubmit={this.submit}>
                    <Input
                        onChange={this.handleTextChange}
                        placeholder="Enter youtube URL"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                          <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                        }
                    /><br />
                    <Button type="primary" htmlType="submit">Add</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSong;
