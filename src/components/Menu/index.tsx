import logo from "../../../public/imgs/Maison_Ikkoku_Logo.png"
import "./index.css"

export default function Menu() {
    return (
        <header>
            
            <span></span>
            
            <img className="logo" src={logo} alt="logo"/>

            <button className="wiki-button">
                <a className="wiki" href="https://en.wikipedia.org/wiki/Maison_Ikkoku" target="_blank">
                    Click here!
                </a>
            </button>
            
            
        </header>
    )
}