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
            <select value={this.state.reps} onChange={e => this.setState({ reps: e.target.value })}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
                </select>
            </div>
            1RM: {Math.round(this.state.weight * (1 + this.state.reps / 30))}
        </div>
    )}
}

export default Input;

