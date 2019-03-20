import React from 'react';

class Input extends React.Component {
    state = { weight: '', reps: '' }

    handleSubmit = event => {
      event.preventDefault();
    }

        render() {
        return (
          <div class="ui card">
            <div class="content">
            <h5>Select the amount of repetitions done and enter the weight used to calculate your 1RM</h5>
            <div class="fields">
            <div class="field">
            <select class="ui fluid dropdown" value={this.state.reps} onChange={e =>
                 this.setState({ reps: e.target.value })}>
              <option value=""></option>
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
              <div class="field">
              <form class="ui form" onSubmit={this.handleSubmit}>
                <input
                      type="number"
                      placeholder="e.g. 120"
                      value={this.state.weight}
                      onChange={e => this.setState({ weight: e.target.value })}></input>
              </form>
              </div>
            </div>
            <div>
              <h4>
                <br /> Your estimated 1RM is
                <br /> {Math.round(this.state.weight * (1 + this.state.reps / 30))}
              </h4>
            </div>
            </div>
          </div>
        )}
    }

export default Input;
