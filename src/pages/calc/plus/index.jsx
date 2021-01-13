import style from '../calc.module.css'
import { Button } from 'reactstrap';

const Plus = (props) => {
    return (
        <div className={style.plusFuild}>
            <Button onClick={props.plusCount}>
                +
                </Button>
        </div>
    )
}


export default Plus;