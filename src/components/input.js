import React from 'react';

class Input extends React.Component {

    state = { weight: '', reps: '' }
   
    render() {
    return (
        <div>
            <div>
                <form>
                    <input 
                    value={this.state.weight}
                    onChange={e => this.setState({ weight: e.target.value })}>
                    </input>
                </form>
            </div>
            <div>
                <form>
                    <input 
                    value={this.state.reps}
                    onChange={e => this.setState({ reps: e.target.value })}>
                    </input>
                </form>
            </div>
            1RM: {this.state.weight * (1 + this.state.reps / 30)}
        </div>
    )}
}

export default Input;

