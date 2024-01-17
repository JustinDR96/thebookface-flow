import React from 'react';
import Message from '../../components/message/Message';
import Footer from '../../components/footer/Footer';
import Profil from '../../components/profil/Profil';
import Navbar from '../../components/navbar/Navbar';

export default function Pages_about() {
  return (
    <div className="home_container">
      <div className="desktop-layout">
        <Profil />
        <div className="main_container">
          <div className="main_publication">
            <div>
              <h1>Bienvenue sur Flow !</h1>
              <section>
                <h2>📸 Notre Histoire</h2>
                <p>
                  Nous sommes une communauté passionnée de partage visuel, dédiée à la créativité et à la découverte. Lancé en 2023, Flow a rapidement évolué pour devenir le lieu idéal où des millions de personnes du monde entier partagent leurs moments de vie à travers des photos et des vidéos captivantes.
                </p>
              </section>
              <section>
                <h2>🌟 Pourquoi Flow ?</h2>
                <p>
                  Chez Flow, nous croyons que chaque instant a le potentiel de devenir une œuvre d'art. Que ce soit un lever de soleil éblouissant, une tasse de café parfaite, ou des moments partagés entre amis, notre plateforme vous offre l'opportunité de capturer et de partager ces moments magiques avec le monde entier.
                </p>
              </section>

              <section>
                <h2>👥 Une Communauté Engagée</h2>
                <p>
                  Rejoignez notre communauté dynamique et découvrez des créateurs talentueux, des artistes inspirants, et des amis partageant les mêmes idées. Échangez des likes, des commentaires positifs, et connectez-vous avec des personnes du monde entier. Flow n'est pas simplement une plateforme, c'est une famille virtuelle où chaque membre contribue à la richesse et à la diversité de notre communauté.
                </p>
              </section>

              <section>
                <h2>🚀 Innovation et Évolution</h2>
                <p>
                  Notre équipe travaille sans relâche pour apporter de nouvelles fonctionnalités excitantes et des améliorations constantes. Que vous soyez un passionné de photographie, un influenceur en herbe, ou simplement à la recherche d'une plateforme conviviale pour partager votre quotidien, Flow s'adapte constamment pour répondre à vos besoins.
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
      <div className="tablet-layout">
        <Navbar />
        <div className="main_publication">
          <div>
            <h1>Bienvenue sur Flow !</h1>
            <section>
              <h2>📸 Notre Histoire</h2>
              <p>
                Nous sommes une communauté passionnée de partage visuel, dédiée à la créativité et à la découverte. Lancé en 2023, Flow a rapidement évolué pour devenir le lieu idéal où des millions de personnes du monde entier partagent leurs moments de vie à travers des photos et des vidéos captivantes.
              </p>
            </section>
            <section>
              <h2>🌟 Pourquoi Flow ?</h2>
              <p>
                Chez Flow, nous croyons que chaque instant a le potentiel de devenir une œuvre d'art. Que ce soit un lever de soleil éblouissant, une tasse de café parfaite, ou des moments partagés entre amis, notre plateforme vous offre l'opportunité de capturer et de partager ces moments magiques avec le monde entier.
              </p>
            </section>

            <section>
              <h2>👥 Une Communauté Engagée</h2>
              <p>
                Rejoignez notre communauté dynamique et découvrez des créateurs talentueux, des artistes inspirants, et des amis partageant les mêmes idées. Échangez des likes, des commentaires positifs, et connectez-vous avec des personnes du monde entier. Flow n'est pas simplement une plateforme, c'est une famille virtuelle où chaque membre contribue à la richesse et à la diversité de notre communauté.
              </p>
            </section>

            <section>
              <h2>🚀 Innovation et Évolution</h2>
              <p>
                Notre équipe travaille sans relâche pour apporter de nouvelles fonctionnalités excitantes et des améliorations constantes. Que vous soyez un passionné de photographie, un influenceur en herbe, ou simplement à la recherche d'une plateforme conviviale pour partager votre quotidien, Flow s'adapte constamment pour répondre à vos besoins.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}


