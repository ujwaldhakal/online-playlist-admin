import React from 'react'
import { Input, Tooltip, Icon, Button } from 'antd';

interface State {
    youtubelink: string;
};

class AddSong extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            youtubelink: ""
        };
    }


    handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {

        this.setState({youtubelink: e.target.value});
        console.log(e.target.value);
    }

    submit(e: React.FormEvent<HTMLFormElement>) {

        console.log(e);
        console.log(this.state.youtubelink)
        e.preventDefault();

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
