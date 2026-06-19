import "./navStyling.css"


const NavBar = () => {
    return (
        <nav>
            <div className="nav-inner">
                <div className="brand">SparkStack</div>
                <ol className="nav-list">
                    <li>Home</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>About</li>
                    <li>Help</li>
                </ol>
            </div>
        </nav>
    )
}

export default NavBar;