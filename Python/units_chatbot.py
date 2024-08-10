from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create a new ChatBot instance with a UnitConversion logic adapter
bot = ChatBot(
    "units",
    logic_adapters=[
        "chatterbot.logic.UnitConversion",
        "chatterbot.logic.MathematicalEvaluation"  # Adding support for mathematical evaluation
    ]
)

# Optionally, train the bot with some basic corpus data to improve its flexibility
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")

print("------------- Unit Conversion Chatbot -------------")

while True:
    try:
        user_text = input("Ask a question (unit conversion): ")
        chatbot_response = str(bot.get_response(user_text))
        if chatbot_response:
            print("Chatbot: " + chatbot_response)
        else:
            print("Chatbot: I'm not sure how to answer that.")
    except Exception as e:
        print(f"An error occurred: {e}")
