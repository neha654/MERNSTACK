import "./footerStyling.css"


const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="col brand">SparkStack — Built for quick prototypes</div>
                <div className="col links">
                    <a>Privacy</a>
                    <a>Terms</a>
                    <a>Contact</a>
                </div>
                <div className="col copy">© {new Date().getFullYear()} SparkStack</div>
            </div>
        </footer>
    )
}

export default Footer;