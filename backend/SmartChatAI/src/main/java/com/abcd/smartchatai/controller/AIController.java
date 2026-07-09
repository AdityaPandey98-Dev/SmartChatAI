package com.abcd.smartchatai.controller;

import com.abcd.smartchatai.dto.ChatRequest;
import com.abcd.smartchatai.service.AIService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AIController {
    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @GetMapping("/test")
    public String test() {
        return "Controller Working";
    }

    @PostMapping("/ask")
    public String askQuestion(@RequestBody ChatRequest request) {

        return aiService.getAnswer(request.getQuestion());

    }
}
