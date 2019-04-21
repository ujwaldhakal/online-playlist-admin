import React from 'react'

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
            <div>
                <h1>Add Song to playlist</h1>
                <div>
                    <form onSubmit={this.submit}>
                        <input type="text" onChange={this.handleTextChange}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddSong;
