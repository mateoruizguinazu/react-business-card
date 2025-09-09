export default function About() {
    return (
        <header>
            <img className="about-img" src="src/assets/profile-pic.jpeg" alt="Profile picture of Mateo."/>
            <div className="about-info">
                <h1 className="about-name">Mateo Ruiz Guinazu</h1>
                <h2 className="about-role">Design Engineer</h2>
                <a className="about-link" href="https://www.mateoruizguinazu.com/" target="_blank">mateoruizguinazu.com</a>
                <div className="about-ctas">
                    <a className="cta-email" href="mailto:mateoruizguinazu@gmail.com?subject=Let's talk!" alt="Send an email to Mateo.">
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </a>
                    <a className="cta-linkedin" href="https://www.linkedin.com/in/mateoruizguinazu/" target="_blank" alt="Visit Mateo's LinkedIn page.">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    )
}