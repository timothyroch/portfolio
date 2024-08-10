import os
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer
from flask import Flask, render_template, request

app = Flask(__name__)

# Check if a database file exists
db_path = "db.sqlite3"
if not os.path.exists(db_path):
    bot = ChatBot(
        "chatbot",
        storage_adapter="chatterbot.storage.SQLStorageAdapter",
        database=db_path,
        logic_adapters=[
            {
                "import_path": "chatterbot.logic.BestMatch",
                "default_response": "Sorry, I didn't understand that.",
                "maximum_similarity_threshold": 0.7,
            },
            "chatterbot.logic.MathematicalEvaluation",
            "chatterbot.logic.UnitConversion"
        ],
    )

    # Train the bot if the database doesn't exist
    trainer = ChatterBotCorpusTrainer(bot)
    trainer.train("chatterbot.corpus.english")
    
    # You should ideally save the training data
else:
    bot = ChatBot(
        "chatbot",
        storage_adapter="chatterbot.storage.SQLStorageAdapter",
        database=db_path,
        logic_adapters=[
            "chatterbot.logic.BestMatch",
            "chatterbot.logic.MathematicalEvaluation",
            "chatterbot.logic.UnitConversion"
        ],
    )

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/get")
def get_chatbot_response():
    userText = request.args.get('userMessage')
    return str(bot.get_response(userText))

if __name__ == "__main__":
    app.run(debug=True)
