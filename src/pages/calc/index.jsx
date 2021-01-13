import React from 'react';
import style from './calc.module.css'
import Minus from './minus';
import Plus from './plus';
import Result from './result';

class Calc extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div className={style.container} >
                <div className={style.calc}>
                    <Minus minusCount={this.minusCount} />
                    <Plus plusCount={this.plusCount} />
                    <Result result={this.state.count} />
                </div>
            </div>
        )
    }
    plusCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    minusCount = () => [
        this.setState({ count: this.state.count - 1 })
    ]
}

export default Calc;