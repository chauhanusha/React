export default function Star(props) {
    return (
        <button
        onClick={props.handleCLick}
        >{props.isFilled ? "yes" : "no"}
        </button>
    )
}