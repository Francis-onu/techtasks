import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">My Task Tracker App!</span></h1>
            </header>
            <main className="public__main">
                <p>Developed By</p>
                <address className="public__addr">
                    Onu Tech<br />
                    17B CBD Alausa<br />
                    Ikeja Lagos, Nigeria<br />
                    <a href="tel:+15555555555">(703) 788-0505</a>
                </address>
                <br />
                <p>Owner: Onu Tech</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public