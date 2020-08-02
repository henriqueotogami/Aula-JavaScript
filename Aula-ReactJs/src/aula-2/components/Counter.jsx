import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Components {
    state = { count: 0}

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT'});
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT'});
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onclick={this.decrement}></button>
                    <span>{this.props.count}</span>
                    <button onclick={this.increment}></button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    };
}

export default connect (mapStateToProps) (Counter);