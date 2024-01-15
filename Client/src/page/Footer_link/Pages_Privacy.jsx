import React from 'react';
import Message from '../../components/message/Message';
import Footer from '../../components/footer/Footer';
import Profil from '../../components/profil/Profil';

export default function Pages_about() {
    return (
        <div className="home_container">
            <div className="desktop-layout">
                <Profil />
                <div className="main_container">
                    <div className="main_publication">
                        <div>
                            <h1>Politique de Confidentialité et Conditions d'Utilisation</h1>

                            <section>
                                <h2>🔒 Politique de Confidentialité</h2>
                                <p>
                                    Bienvenue sur Flow, la plateforme sociale dédiée à la créativité, à la connexion et au partage ! Avant de plonger dans l'expérience Flow, nous vous invitons à lire attentivement notre Politique de Confidentialité et nos Conditions d'Utilisation. Chez Flow, la transparence et le respect de la vie privée de nos utilisateurs sont au cœur de notre engagement.
                                </p>
                            </section>

                            <section>
                                <h2>📜 Conditions d'Utilisation</h2>
                                <p>
                                    Notre Politique de Confidentialité détaille comment nous collectons, utilisons, partageons et protégeons vos données personnelles. Nous prenons la sécurité de vos informations au sérieux et nous nous efforçons de garantir que votre expérience sur Flow soit sécurisée et conforme aux normes les plus élevées de protection des données. Découvrez comment nous traitons vos données et les mesures que nous prenons pour assurer votre confidentialité.
                                </p>
                            </section>

                            <section>
                                <h2>🤝 Engagement envers la Sécurité</h2>
                                <p>
                                    Nos Conditions d'Utilisation énoncent les règles et directives qui régissent l'utilisation de Flow. En vous inscrivant sur notre plateforme, vous acceptez de respecter ces conditions, qui visent à créer un environnement sûr, respectueux et enrichissant pour tous les utilisateurs. Familiarisez-vous avec nos lignes directrices sur le contenu, les comportements appropriés, et les droits et responsabilités des utilisateurs sur Flow.
                                </p>
                            </section>

                            <section>
                                <h2>👥 Contrôle de la Confidentialité</h2>
                                <p>
                                    Nous nous engageons à protéger votre sécurité en ligne. Découvrez comment nous utilisons des outils avancés de sécurité et des pratiques de cryptage pour protéger vos informations personnelles. Notre objectif est de créer un espace où vous pouvez vous exprimer librement tout en ayant l'assurance que votre sécurité est notre priorité absolue.
                                </p>
                            </section>

                            <section class="highlighted-text">
                                <p>
                                    Flow vous donne le contrôle sur votre vie privée. Apprenez comment ajuster vos paramètres de confidentialité pour déterminer qui peut voir votre contenu, interagir avec vous et accéder à vos informations. Nous croyons en l'autonomie de nos utilisateurs en matière de confidentialité.
                                </p>
                            </section>
                        </div>

                    </div>
                    <div className="message_footer">
                        <Message />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
