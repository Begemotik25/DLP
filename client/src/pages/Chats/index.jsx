import React, { useEffect, useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationList,
  Conversation,
  MessageSeparator,
  ConversationHeader,
  Sidebar,
  InfoButton,
  Search,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import io from "socket.io-client";

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { CookieManager } from "../../utils/CookieManager";

const Chats = () => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  const [flag, setFlag] = useState(false);

  const send = (value) => {
    const messagePayload = {
      userId: CookieManager.getId(),
      message: value,
    };
    socket?.emit("message", messagePayload);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (messagePayload) => {
    const message = messagePayload.message;
    setMessages((prev) => {
      return [...prev, message];
    });
  };

  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messageListener]);

  const imgSrc =
    "https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg";
  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <div style={{ position: "relative", height: "850px" }}>
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name="Антоніна Сагайдачна"
              // lastSenderName="Антоніна"
              info={messages?.[0]?.message ?? ""}
              active
            >
              <Avatar src={imgSrc} name="Антоніна" status="unavailable" />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={imgSrc} name="Антоніна" />
            <ConversationHeader.Content
              userName="Антоніна"
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          {flag ? (
            <MessageList>
              <MessageSeparator content="Tuesday, 06 June 2023" />

              <Message
                model={{
                  message: "Привіт! Як справи?",
                  sentTime: "15 mins ago",
                  sender: "Alina",
                  direction: "outgoing",
                  position: "first",
                }}
              />
            </MessageList>
          ) : null}

          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={() => {
              setMessageInputValue("");
              setFlag(true);
            }}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chats;
