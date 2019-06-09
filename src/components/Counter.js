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
        inc: (value) => dispatch({type: 'INCREMENT', value: value}),
        dec: (value) => dispatch({type: 'DECREMENT', value: value}),
    };
}

function Counter({ value, inc, dec }) {
    const input = React.createRef();

    function handleClick() {
        input.current.focus();
    }
    return (
        <div>
            <div>
                <input type="number" ref={input} />
                <input type="button" value="отправить" onClick={handleClick}/>
            </div>
            <div className='Counter'>
                <Helmet>
                    <title>Counter</title>
                    <meta name="description" content="counter" />
                </Helmet>
                <button onClick={() => inc(Number.parseInt(input.current.value))}>+</button>
                <h1>{value}</h1>
                <button onClick={() => dec(Number.parseInt(input.current.value))}>-</button>
            </div>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);