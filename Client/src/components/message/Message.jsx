import React, { useState } from "react";

function Message() {
  const profiles = [
    { id: 1, name: "John Doe", Position: "Bruxelles" },
    { id: 2, name: "Jane Smith", Position: "New York" },
    { id: 3, name: "Ayoub Smith", Position: "Paris" },
    { id: 4, name: "Burak Smith", Position: "Amsterdam" },
    { id: 5, name: "Justin Smith", Position: "Berlin" },
    { id: 6, name: "Guillaulme Smith", Position: "Londre" },
    { id: 7, name: "Burak Smith", Position: "Amsterdam" },
    { id: 8, name: "Justin Smith", Position: "Berlin" },
    { id: 9, name: "Guillaulme Smith", Position: "Londre" },
  ];

  const reponse = [{ id: 1, name: "John Doe", message: "Bonjour" }];
  const [searchTerm, setSearchTerm] = useState("");
  const [openProfiles, setOpenProfiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageStates, setMessageStates] = useState({});

  const handleBubbleClick = (profile) => {
    if (openProfiles.length < 2) {
      setOpenProfiles([...openProfiles, profile]);
      setMessageStates({
        ...messageStates,
        [profile.id]: { message: "", messages: [] },
      });
    }
  };

  const closeProfileModal = (profile) => {
    setOpenProfiles(openProfiles.filter((p) => p !== profile));
    setMessageStates((prevStates) => {
      const { [profile.id]: removedState, ...rest } = prevStates;
      return rest;
    });
  };

  const handleSendClick = (profile) => {
    const { message, messages: profileMessages } = messageStates[profile.id];
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "", content: message }]);
      setMessageStates({
        ...messageStates,
        [profile.id]: {
          message: "",
          messages: [...profileMessages, { sender: "", content: message }],
        },
      });
    }
  };
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="message">
        <h1 className="message-title">Messages</h1>
        <div className="message_search-bar">
          <i className="fas fa-search"></i>
          <div className="search-content">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src="/icon/search_logo.svg" alt="Search Logo" />
          </div>
        </div>
        <div className="conversation-list">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="conversation">
              <img
                src={`https://placekitten.com/50/50?image=${profile.id}`}
                alt={profile.name}
              />
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <p>{profile.Position}</p>
              </div>
              <img
                src="/icon/bubble_logo.svg"
                alt="Bubble Logo"
                className="conversation_bubble"
                onClick={() => handleBubbleClick(profile)}
              />
            </div>
          ))}
        </div>
      </div>
      {openProfiles.map((profile) => (
        <div
          key={profile.id}
          className="modal"
          style={{
            bottom: 20,
            right: 20 + openProfiles.indexOf(profile) * 420,
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3>{profile.name}</h3>
              <button
                className="close-button"
                onClick={() => closeProfileModal(profile)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="messages-list">
                {profile.name === "John Doe" &&
                  reponse.map((msg, index) => (
                    <div key={index} className="message-item john-doe">
                      <div className="message-content">
                        <img
                          src="/image/user_image.jpg"
                          alt="John Doe"
                          width="30"
                          height="30"
                        />
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  ))}
                {messageStates[profile.id].messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message-item ${
                      msg.sender === "John Doe" ? "john-doe" : "user"
                    }`}
                  >
                    <div className="message-content">
                      {msg.sender === "John Doe" && (
                        <img
                          src="/image/user_image.jpg"
                          alt="John Doe"
                          width="30"
                          height="30"
                        />
                      )}
                      <p>{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="input-container">
                <input
                  type="text"
                  value={messageStates[profile.id].message}
                  onChange={(e) => {
                    setMessageStates({
                      ...messageStates,
                      [profile.id]: {
                        ...messageStates[profile.id],
                        message: e.target.value,
                      },
                    });
                  }}
                  placeholder="Type your message..."
                />
                <button onClick={() => handleSendClick(profile)}>
                  <img
                    className="send"
                    src="/icon/send_logo.svg"
                    alt="Send Logo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Message;
