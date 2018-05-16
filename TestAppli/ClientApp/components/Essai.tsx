import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Essai extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = { name: 'essai'};
    }

    public handleOnChange(event: any): void {
        this.setState({ name: event.target.value });
    }

    public render() {
        return <div>
            <h1>Essai</h1>

            <p>On va tenter de faire des trucs ici</p>

            <button> Test </button>

            <input
                onChange={e => this.handleOnChange(e)}
            />
               
       </div>;
    }
}