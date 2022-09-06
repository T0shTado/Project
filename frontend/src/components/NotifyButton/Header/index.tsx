import Logo from '../../../assets/img/Logo.svg'
import './Styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta" />
                <h1>SalesMeta</h1>
                <p>
                    Developed By
                    <a href=" https://github.com/T0shTado"> github.com/T0shTado</a>
                </p>
            </div>
        </header>
    )
}

export default Header
