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
                            <h1>Bienvenue dans le Centre d'Aide Flow !</h1>

                            <section>
                                <h2>🤝 Comment pouvons-nous vous assister aujourd'hui ?</h2>
                                <p>
                                    Chez Flow, nous sommes là pour vous aider à tirer le meilleur parti de notre plateforme. Que vous soyez nouveau ici ou un utilisateur expérimenté, notre Centre d'Aide est conçu pour répondre à vos questions et résoudre vos préoccupations.
                                </p>
                            </section>

                            <section>
                                <h2>📚 Ressources Utiles</h2>
                                <p>
                                    Explorez nos ressources complètes pour en apprendre davantage sur les fonctionnalités de Flow. Des guides détaillés, des tutoriels vidéo et des FAQ sont disponibles pour vous guider à chaque étape. Apprenez à personnaliser votre profil, à partager du contenu captivant, et bien plus encore.
                                </p>
                            </section>

                            <section>
                                <h2>💬 Support Client</h2>
                                <p>
                                    Besoin d'aide personnalisée ? Notre équipe de support client dévouée est prête à vous assister. Envoyez-nous un message via notre formulaire de contact, et nous vous répondrons dans les plus brefs délais. Votre satisfaction est notre priorité.
                                </p>
                            </section>

                            <section>
                                <h2>🚀 Conseils et Astuces</h2>
                                <p>
                                    Découvrez nos astuces pour optimiser votre expérience sur Flow. Des conseils de sécurité en ligne aux meilleures pratiques pour interagir avec la communauté, nos articles vous aideront à naviguer en toute confiance.
                                </p>
                            </section>

                            <section>
                                <h2>🔍 Troubleshooting</h2>
                                <p>
                                    Rencontrez-vous des problèmes techniques ? Consultez notre section de dépannage pour des solutions rapides. Si le problème persiste, notre équipe technique est prête à vous assister dans la résolution de tout problème technique.
                                </p>
                            </section>

                            <section>
                                <h2>📢 Restez Connecté</h2>
                                <p>
                                    Suivez notre blog et nos mises à jour pour rester informé des dernières fonctionnalités, des événements communautaires et des annonces importantes. Restez connecté avec la communauté Flow !
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
