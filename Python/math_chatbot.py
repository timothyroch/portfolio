from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer



# Create a new ChatBot instance with a MathematicalEvaluation logic adapter
bot = ChatBot("Math", logic_adapters=["chatterbot.logic.MathematicalEvaluation"])

# Set up a trainer to train the chatbot with a basic corpus
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")  # Ensure the chatbot is trained with basic data

print("------------- Math Chatbot -------------")

while True:
    user_text = input("Type the math equation that you want to solve: ")
    response = bot.get_response(user_text)
    print("Chatbot: " + str(response))
