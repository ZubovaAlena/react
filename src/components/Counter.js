import React from 'react';
import {Helmet} from 'react-helmet';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        value: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        inc: () => dispatch({type: 'INCREMENT'}),
        dec: () => dispatch({type: 'DECREMENT'})
    };
}
function Counter({ value, inc, dec }) {
    return (
        <div className='Counter'>
            <Helmet>
                <title>Counter</title>
                <meta name="description" content="counter" />
            </Helmet>
            <button onClick={() => inc()}>+</button>
            <h1>{value}</h1>
            <button onClick={() => dec()}>-</button>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);