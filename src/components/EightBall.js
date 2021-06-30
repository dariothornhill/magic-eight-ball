import './Eightball.css'

function Eightball({ answeredQuestion }) {
    return (
        <div className="Eightball">
            <div className="Eightball-face">{answeredQuestion && answeredQuestion.answer}</div>
        </div>
    )
}

export default Eightball;