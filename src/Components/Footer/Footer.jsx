import "./Footer.scss"
import logo_footer from "../../assets/images/logo_footer.png"

function Footer() {
    return (
        <>
            <footer>
                <div className="logo_footer2">
                    <img src={logo_footer} alt="Logo"/>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer