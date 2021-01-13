import style from '../calc.module.css'
import { Button } from 'reactstrap';

const Minus = (props) => {
    return (
        <div className={style.minusFuild}>
            <Button style={{ background: 'red', opacity: '.3' }}
                onClick={props.minusCount}
            >
                -
            </Button>
        </div>
    )
}


export default Minus;