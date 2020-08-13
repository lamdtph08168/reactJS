import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
// // Favicons 
// import '../assets/Main/img/favicons/favicon.ico'
// // Libs CSS
// import '../assets/Main/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css'
// import '../assets/Main/libs/@fortawesome/fontawesome-free/css/all.min.css'
// import '../assets/Main/libs/flickity/dist/flickity.min.css'
// import '../assets/Main/libs/highlightjs/styles/vs2015.css'
// import '../assets/Main/libs/simplebar/dist/simplebar.min.css'
// import '../assets/Main/libs/flickity-fade/flickity-fade.css'
// import '../assets/Main/fonts/feather/feather.css'
// // Theme CSS
// import '../assets/Main/css/theme.min.css'


export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Header />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
