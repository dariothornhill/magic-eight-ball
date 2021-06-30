import './Header.css'

export default function Header() {

    return (<header className="Header">

        <p>
            Magic Eight Ball
        </p>
        <nav>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                About
            </a>
        </nav>
    </header>)
}