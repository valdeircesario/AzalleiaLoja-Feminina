/* eslint-disable react/no-unescaped-entities */

import Footer from "../Footer"
import Header from "../Header"
import MacaquinhosElements from "../MacaquinhosElements"
import ScrollToTop from "../ScrollToTop"
import "./Macaquinhos.css"

function Macaquinho(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <div className="tituloMac">
            <div className="titulo1Mac">
                <h1>Macaquinhos</h1>
                <p>"Peças Perfeitas Para Empoderar Mulheres Incríveis"</p>
            </div>
        </div>

        <MacaquinhosElements/>
        <Footer/>
        </>
    )
}

export default Macaquinho