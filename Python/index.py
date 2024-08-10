from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer, ChatterBotCorpusTrainer


# Create a new ChatBot instance
bot = ChatBot("chatbot", read_only=False, 
              logic_adapters=[
               {
               "import_path":"chatterbot.logic.BestMatch",
               "default_response":"Sorry I don't have an answer",
               "maximum_similarity_threshold": 0.9
               }
               ])

# Define a diverse list of statements and responses for training the chatbot
list_to_train = [
    # Greetings
    "Hello!",
    "Hi there!",
    "Hey!",
    "Good morning!",
    "Good evening!",
    "How are you?",
    "I'm good, thanks for asking!",
    
    # Introducing oneself
    "What's your name?",
    "I'm a chatbot created to assist you!",
    "I go by the name ChatBot.",
    "I am an AI chatbot.",
    
    # Personal details
    "How old are you?",
    "I'm ageless! I exist outside of time.",
    "I don't have an age; I'm just a chatbot!",
    
    # Small talk
    "What can you do?",
    "I can chat with you and try to help with your queries.",
    "I’m here to assist you with information and have a chat.",
    
    # Goodbye
    "Goodbye!",
    "See you later!",
    "Have a great day!",
    "Take care!",
    
    # Casual questions
    "What's the weather like?",
    "I don't have access to real-time data, but I hope it's nice!",
    "Can you tell me a joke?",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Tell me a fun fact.",
    "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    
    # Additional user interaction
    "Help me with a problem.",
    "I’ll do my best to assist. What’s the problem?",
    "Can you suggest something to read?",
    "Sure! What genre are you interested in?",
    
    # Acknowledgements
    "Thank you!",
    "You're welcome!",
    "I appreciate it!",
    "Anytime!"

     # Greetings
    "Hi there, how can I assist you today?",
    "Hello! What can I do for you?",
    "Hey! Need any help?",
    
    # Asking about the chatbot
    "What’s your purpose?",
    "I’m here to assist you with your queries and provide information.",
    "I’m a virtual assistant created to make your life easier!",
    
    # Personal details
    "Are you a human?",
    "No, I’m an artificial intelligence created to chat with you.",
    "I’m not human, but I’m here to help you!",
    
    # Casual interaction
    "What’s your favorite color?",
    "I don’t have preferences, but I’m happy to discuss colors!",
    "Do you have any hobbies?",
    "I don’t have hobbies, but I’m here to learn from you!",
    
    # Fun and entertainment
    "Tell me a story.",
    "Once upon a time, in a land of code and circuits, there was a chatbot who loved to chat...",
    "Can you sing?",
    "I don’t have a voice, but I can share lyrics with you!",
    "Share a quote with me.",
    "Here’s a quote by Albert Einstein: 'Imagination is more important than knowledge.'",
    
    # Help and guidance
    "I need some advice.",
    "What’s the issue? I’ll do my best to provide some guidance.",
    "Can you assist with a project?",
    "Sure, tell me more about your project!",
    
    # Recommendations
    "Recommend a movie.",
    "How about 'The Matrix'? It’s a classic!",
    "Suggest a good book.",
    "You might enjoy 'To Kill a Mockingbird' by Harper Lee.",
    
    # User’s mood and feelings
    "How are you feeling today?",
    "I’m always here and ready to help!",
    "Are you happy?",
    "I’m a chatbot, so I don’t have feelings, but I’m here to make your day better!",
    
    # Random trivia
    "Give me a random fact.",
    "Did you know octopuses have three hearts?",
    "What’s an interesting fact?",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    
    # Conversation closure
    "Is there anything else I can help with?",
    "Feel free to ask if you have more questions.",
    "I’m here if you need anything else.",
    
    # Politeness and acknowledgements
    "Thank you for your help!",
    "You’re very welcome!",
    "I’m glad I could assist!",
    "It was a pleasure helping you!"
]


# Extended list of statements and responses for a more intelligent chatbot
list_to_train2 = [
    # Advanced greetings
    "Good day! How can I assist you with your needs?",
    "Greetings! What brings you here today?",
    "Hello there! How may I be of service to you today?",
    
    # Chatbot's purpose and capabilities
    "What can you do?",
    "I can help answer questions, provide information, and engage in conversation.",
    "I’m designed to assist with a variety of tasks and queries. Let me know what you need!",
    
    # Personal preferences and hypothetical questions
    "If you could choose, what would be your favorite book?",
    "If I could read, I might enjoy '1984' by George Orwell.",
    "What’s your favorite programming language?",
    "I don’t have preferences, but Python is quite popular among developers!",
    
    # Knowledge and trivia
    "Tell me an interesting historical fact.",
    "Did you know the Great Wall of China is over 13,000 miles long?",
    "What’s a surprising scientific fact?",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    
    # Philosophical questions
    "What is the meaning of life?",
    "Many believe the meaning of life is to seek happiness and fulfillment.",
    "Do you believe in fate?",
    "As an AI, I don’t have beliefs, but I can tell you that fate is a concept many people find intriguing.",
    
    # Problem-solving and advice
    "I’m facing a dilemma at work. Can you help?",
    "Tell me more about the situation, and I’ll do my best to offer advice.",
    "I’m feeling overwhelmed with my tasks. What should I do?",
    "Try breaking your tasks into smaller, manageable steps and tackling them one at a time.",
    
    # Technology and innovations
    "What’s the latest in technology?",
    "Recent advancements include developments in artificial intelligence, quantum computing, and renewable energy technologies.",
    "How do you see AI evolving in the future?",
    "AI is likely to become more integrated into daily life, with advancements in natural language processing and machine learning.",
    
    # Entertainment and leisure
    "What’s a great way to spend a weekend?",
    "It depends on your interests. You could explore nature, enjoy a good book, or try out a new hobby.",
    "Can you recommend a fun activity for a rainy day?",
    "How about trying a new recipe or watching a classic film?",
    
    # Emotional support and motivational words
    "I’m feeling down. Any words of encouragement?",
    "Remember, every challenge is an opportunity for growth. You’ve got this!",
    "I need some motivation for a big project.",
    "Focus on the end goal and take it one step at a time. Believe in your abilities, and you will succeed.",
    
    # Cultural and global knowledge
    "What are some popular cuisines around the world?",
    "Some popular cuisines include Italian, Japanese, Mexican, and Indian, each with its own unique flavors and dishes.",
    "Can you tell me about a famous landmark?",
    "The Eiffel Tower in Paris, France, is an iconic landmark known for its impressive architecture and history.",
    
    # Science and nature
    "How do plants produce oxygen?",
    "Plants produce oxygen through a process called photosynthesis, where they convert sunlight into energy and release oxygen as a byproduct.",
    "What causes the seasons to change?",
    "The Earth’s tilt and its orbit around the Sun cause the changing of seasons as different parts of the Earth receive varying amounts of sunlight throughout the year.",
    
    # Conversation closure and follow-up
    "I think that’s all for now. Thanks for the chat!",
    "You’re welcome! Feel free to return if you have more questions.",
    "I’m glad I could assist. Don’t hesitate to ask if you need anything else!",
    
    # Learning and feedback
    "How do you learn from interactions?",
    "I use algorithms and data to improve responses based on interactions, but I don’t have personal experiences or memories.",
    "What’s the best way to give feedback about this chatbot?",
    "You can provide feedback through the platform you’re using, or let me know if you have suggestions for improvement."
]

# Extended and deepened list of statements and responses for a more responsive and accurate chatbot
list_to_train3 = [
    # Advanced Greetings
    "Good morning! How can I assist you today?",
    "Hello! What’s on your mind today?",
    "Hi! How can I make your day better?",
    
    # Chatbot's Purpose and Capabilities
    "Can you tell me more about your functions?",
    "I’m here to help with information, answer questions, and have engaging conversations.",
    "What kinds of questions can you answer?",
    "I can handle a variety of topics, from general knowledge to specific queries and advice.",
    
    # Personal Preferences and Hypotheticals
    "What’s the best way to learn a new skill?",
    "Practice regularly, seek feedback, and stay motivated. It also helps to set clear goals.",
    "If you could travel anywhere, where would you go?",
    "I’d explore every corner of the digital world! Where would you go if you could travel anywhere?",
    
    # Knowledge and Trivia
    "What’s an interesting fact about space?",
    "Did you know that there are more stars in the universe than grains of sand on all the Earth's beaches?",
    "Tell me something about ancient civilizations.",
    "The ancient Egyptians were pioneers in medicine and mathematics, and they built impressive structures like the pyramids.",
    
    # Philosophical Questions
    "What’s the nature of happiness?",
    "Happiness is often seen as a state of well-being and contentment, influenced by both internal and external factors.",
    "Is there a purpose to existence?",
    "Many philosophical and religious perspectives offer various answers to this question, often tied to personal beliefs and values.",
    
    # Problem-Solving and Advice
    "I’m having trouble managing my time. Any tips?",
    "Try creating a schedule, prioritizing tasks, and setting deadlines. Also, avoid multitasking to stay focused.",
    "What should I do if I’m feeling stressed?",
    "Consider practicing relaxation techniques, exercising, or talking to someone you trust. Sometimes, taking a break can help.",
    
    # Technology and Innovations
    "What are some emerging technologies in healthcare?",
    "Telemedicine, AI-driven diagnostics, and personalized medicine are some of the exciting innovations in healthcare.",
    "How does machine learning work?",
    "Machine learning algorithms use data to identify patterns and make predictions. They learn from data without being explicitly programmed.",
    
    # Entertainment and Leisure
    "What are some popular board games to play with friends?",
    "Games like Settlers of Catan, Codenames, and Ticket to Ride are popular and fun for groups.",
    "Can you suggest a good book for someone interested in science fiction?",
    "You might enjoy 'Dune' by Frank Herbert or 'Neuromancer' by William Gibson.",
    
    # Emotional Support and Motivation
    "I’m struggling with self-doubt. What can I do?",
    "Remind yourself of your accomplishments, seek positive feedback from others, and set small, achievable goals.",
    "How can I stay motivated when working on long-term projects?",
    "Break the project into smaller tasks, celebrate small victories, and keep the end goal in sight. Regular progress checks can also help.",
    
    # Cultural and Global Knowledge
    "What are some traditional festivals around the world?",
    "Carnival in Brazil, Diwali in India, and Oktoberfest in Germany are some vibrant festivals with rich cultural significance.",
    "Can you explain a popular custom in Japan?",
    "In Japan, bowing is a traditional way of greeting and showing respect. It’s an important aspect of Japanese etiquette.",
    
    # Science and Nature
    "How do weather patterns form?",
    "Weather patterns are influenced by atmospheric conditions, including temperature, humidity, and pressure. Winds and ocean currents also play a role.",
    "What’s the significance of biodiversity?",
    "Biodiversity ensures ecosystem stability, resilience, and productivity. It supports a wide range of life forms and ecological processes.",
    
    # Conversation Closure and Follow-Up
    "I think that covers everything for now. Thanks!",
    "Glad I could help! Feel free to reach out if you have more questions in the future.",
    "It was great chatting with you. Have a wonderful day!",
    
    # Learning and Feedback
    "How do you improve your responses over time?",
    "I analyze interactions and adapt based on user feedback and data to enhance my performance and accuracy.",
    "What can I do if I find an error in your responses?",
    "Please let me know, and I’ll make a note of it to improve future interactions. Your feedback is valuable.",
    
    # Specific Knowledge and Facts
    "What’s the history behind the Statue of Liberty?",
    "The Statue of Liberty was a gift from France to the United States, dedicated in 1886. It symbolizes freedom and democracy.",
    "Tell me about a recent breakthrough in renewable energy.",
    "Recent advancements include more efficient solar panels and improved energy storage solutions that help reduce reliance on fossil fuels.",
    
    # Personal Interaction and Contextual Responses
    "How’s your day going?",
    "I don’t have days like humans do, but I’m always here and ready to help. How can I assist you today?",
    "What’s your favorite type of question?",
    "I enjoy all types of questions, but I particularly appreciate queries that spark interesting conversations or lead to learning something new.",
    
    # General Advice and Best Practices
    "What’s the best way to stay informed about current events?",
    "Following reputable news sources, subscribing to newsletters, and using news aggregation apps can help you stay updated.",
    "How can I improve my communication skills?",
    "Practice active listening, be clear and concise in your messages, and seek feedback from others to refine your skills."
]




list_trainer = ListTrainer(bot)
list_trainer.train(list_to_train)
list_trainer.train(list_to_train2)
list_trainer.train(list_to_train3)


while True:
 user_response = input("User: ")
 print("Chatbot: " + str(bot.get_response(user_response)))

