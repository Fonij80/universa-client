import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const UniGuideChat: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        dir === "rtl"
          ? "سلام! من یونی‌گاید هستم. چطور می‌تونم کمکتون کنم؟"
          : "Hi! I'm UniGuide. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { type: "user", content: inputValue },
        {
          type: "bot",
          content:
            dir === "rtl"
              ? "با تشکر از سوالتون! من در حال یادگیری هستم تا بتونم بهتر کمکتون کنم. 🎓"
              : "Thanks for your question! I'm learning to help you better. 🎓",
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div
      className={`fixed ${dir === "rtl" ? "left-6" : "right-6"} bottom-6 z-50`}
    >
      {isOpen && (
        <Card
          className={`w-80 h-96 mb-4 p-4 shadow-xl ${
            dir === "rtl" ? "font-vazir" : "font-inter"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">{t("chat.title")}</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              ×
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-64">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.type === "bot"
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 text-gray-800"
                } ${
                  message.type === "user" && dir === "rtl" ? "text-right" : ""
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="flex space-x-2 rtl:space-x-reverse">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t("chat.placeholder")}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="sm">
              Send
            </Button>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg bg-warning hover:bg-warning/90 text-warning-foreground pulse-gentle"
      >
        🤖
      </Button>
    </div>
  );
};

export default UniGuideChat;
