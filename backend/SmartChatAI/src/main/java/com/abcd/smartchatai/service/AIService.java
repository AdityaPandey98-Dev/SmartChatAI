package com.abcd.smartchatai.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AIService {

    private final ChatClient chatClient;

    public AIService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String getAnswer(String question) {

        return chatClient
                .prompt()
                .user(question)
                .call()
                .content();
    }
}
