import style from '../calc.module.css'
const Result = (props) => {
    return (
        <div className={style.calcResult}>
            <p>{props.result}</p>
        </div>
    )
}

export default Result;