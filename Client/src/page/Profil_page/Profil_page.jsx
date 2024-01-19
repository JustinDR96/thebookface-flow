// Profil_page.js
import React from 'react';
import Message from '../../components/message/Message';
import Footer from '../../components/footer/Footer';
import Profil from '../../components/profil/Profil';
import Publication from '../../components/publication/Publication';

export default function Profil_page() {
    return (
        <div className="home_container">
            <div className="desktop-layout">
                <Profil />
                <div className="main_container">
                    <div className="main_profile">
                        <div className="profile-info">
                            <img
                                className="img-profil"
                                src="https://placekitten.com/80/80?image"
                                alt=""
                            />
                            <div className="user-details">
                                <h1>John Doe</h1>
                            </div>
                        </div>
                        
                        <div className="profile-content">
                            <div className="post-group">
                                <p className="info-post">Post</p>
                                <p className="post-value">23</p>
                            </div>
                            <div className="friends-group">
                                <p className="info-friends">Friends</p>
                                <p className="friends-value">242</p>
                            </div>
                        </div>
                        <Publication />
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
