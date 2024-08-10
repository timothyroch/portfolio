from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer
from flask import Flask, render_template, request
import random

app = Flask(__name__)

# List of fallback responses
fallback_responses = [
    "Sorry, I didn't understand that.",
    "Could you rephrase that?",
    "I'm not sure how to respond to that.",
    "I don't have an answer for that at the moment.",
    "Could you please provide more details?"
]

# Custom function to get a random fallback response
def get_random_fallback():
    return random.choice(fallback_responses)

# Create a new ChatBot instance with multiple logic adapters
bot = ChatBot(
    "chatbot",
    read_only=False,
    logic_adapters=[
        {
            "import_path": "chatterbot.logic.BestMatch",
            "default_response": get_random_fallback(),
            "maximum_similarity_threshold": 0.7,
        },
        "chatterbot.logic.MathematicalEvaluation",
        "chatterbot.logic.UnitConversion"
    ],
)

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

list_to_train4 = [
    # General Knowledge
    "Who is the President of the United States?",
    "As of 2024, the President of the United States is Joe Biden.",
    "What is the capital of France?",
    "The capital of France is Paris.",
    "What is the tallest mountain in the world?",
    "Mount Everest is the tallest mountain in the world.",
    
    # Science and Nature
    "What causes rainbows?",
    "Rainbows are caused by the refraction, dispersion, and reflection of light in water droplets.",
    "How does photosynthesis work?",
    "Photosynthesis is the process by which plants convert sunlight into energy, using chlorophyll to absorb light and transform carbon dioxide and water into glucose and oxygen.",
    "What is the theory of relativity?",
    "The theory of relativity, proposed by Albert Einstein, includes two theories: special relativity and general relativity, which describe how space and time are interconnected and how gravity affects the fabric of space-time.",
    
    # Technology
    "What is blockchain technology?",
    "Blockchain is a decentralized digital ledger that records transactions across many computers so that the record cannot be altered retroactively.",
    "What is quantum computing?",
    "Quantum computing is an advanced type of computation that uses quantum bits (qubits) to perform calculations at speeds unattainable by classical computers.",
    
    # History
    "Who was the first person to walk on the moon?",
    "Neil Armstrong was the first person to walk on the moon during the Apollo 11 mission in 1969.",
    "What was the Renaissance?",
    "The Renaissance was a cultural, artistic, and intellectual movement that began in Italy in the 14th century and spread throughout Europe, marking the transition from the Middle Ages to modernity.",
    
    # Entertainment
    "What is the most popular movie of all time?",
    "The title of the most popular movie can vary by criteria, but 'Avatar' and 'Avengers: Endgame' are among the highest-grossing films of all time.",
    "Who wrote 'Pride and Prejudice'?",
    "Jane Austen wrote 'Pride and Prejudice.'",
    
    # Sports
    "Who won the FIFA World Cup in 2022?",
    "Argentina won the FIFA World Cup in 2022.",
    "What are the rules of basketball?",
    "Basketball is played with two teams of five players each, aiming to score points by shooting a ball through the opponent's hoop. The game involves dribbling, passing, and shooting, and is played in four quarters.",
    
    # Health and Wellness
    "What are the benefits of regular exercise?",
    "Regular exercise improves cardiovascular health, strengthens muscles, boosts mental health, helps manage weight, and can increase overall energy levels.",
    "What is a balanced diet?",
    "A balanced diet includes a variety of foods in the right proportions to provide the necessary nutrients for good health, including fruits, vegetables, grains, protein, and dairy.",
    
    # Education
    "How can I improve my study habits?",
    "Improving study habits involves setting specific goals, creating a study schedule, using active learning techniques, taking regular breaks, and seeking help when needed.",
    "What are some effective ways to learn a new language?",
    "Effective ways to learn a new language include practicing regularly, immersing yourself in the language, using language learning apps, and engaging with native speakers.",
    
    # Travel
    "What are some popular travel destinations?",
    "Popular travel destinations include Paris, Tokyo, New York City, Rome, and Sydney.",
    "What should I pack for a trip?",
    "Packing for a trip depends on the destination and duration. Essentials typically include clothing, toiletries, travel documents, and any specific items needed for activities you plan to do.",
    
    # Everyday Questions
    "How do I make a cup of coffee?",
    "To make a cup of coffee, brew ground coffee beans with hot water using a coffee maker, French press, or pour-over method, and adjust the strength to your liking.",
    "What’s the best way to manage stress?",
    "Managing stress can involve techniques such as regular exercise, mindfulness or meditation, staying organized, and talking to someone you trust."
]

list_to_train5 = [
    # Food and Cooking
    "How do I make a chocolate cake?",
    "To make a chocolate cake, you need flour, sugar, cocoa powder, baking powder, eggs, milk, and butter. Mix the dry ingredients, then add the wet ingredients, and bake at 350°F (175°C) for about 30 minutes.",
    "What are some easy recipes for beginners?",
    "Some easy recipes for beginners include pasta with marinara sauce, scrambled eggs, grilled cheese sandwiches, and chicken stir-fry.",
    
    # Home Improvement
    "How can I fix a leaky faucet?",
    "To fix a leaky faucet, you need to turn off the water supply, disassemble the faucet, replace the worn-out washer or cartridge, and reassemble the faucet.",
    "What are some tips for organizing a small space?",
    "To organize a small space, use vertical storage, declutter regularly, invest in multi-functional furniture, and keep frequently used items within easy reach.",
    
    # Personal Finance
    "How can I create a budget?",
    "To create a budget, list your income and expenses, categorize your spending, set financial goals, and track your spending to ensure you stay within your budget.",
    "What are some tips for saving money?",
    "Some tips for saving money include setting savings goals, tracking expenses, cutting unnecessary costs, and automating savings by setting up regular transfers to a savings account.",
    
    # Relationships and Communication
    "How can I improve my communication skills?",
    "Improving communication skills involves active listening, being clear and concise, practicing empathy, and seeking feedback from others.",
    "What are some ways to resolve conflicts effectively?",
    "Effective conflict resolution involves staying calm, listening to the other person’s perspective, finding common ground, and working together to find a mutually acceptable solution.",
    
    # Personal Development
    "How can I set and achieve personal goals?",
    "Set specific, measurable, achievable, relevant, and time-bound (SMART) goals. Break them down into smaller steps, track your progress, and stay motivated by celebrating milestones.",
    "What are some strategies for staying motivated?",
    "Strategies for staying motivated include setting clear goals, creating a routine, finding an accountability partner, and rewarding yourself for achieving milestones.",
    
    # Technology and Internet
    "What is artificial intelligence?",
    "Artificial intelligence (AI) refers to the simulation of human intelligence in machines programmed to think and learn like humans. Examples include virtual assistants and machine learning algorithms.",
    "How can I protect my online privacy?",
    "To protect your online privacy, use strong and unique passwords, enable two-factor authentication, avoid sharing personal information publicly, and use privacy settings on social media.",
    
    # Environment and Sustainability
    "What are some ways to reduce plastic waste?",
    "To reduce plastic waste, use reusable bags, bottles, and containers, avoid single-use plastics, recycle properly, and support businesses that use sustainable packaging.",
    "What is climate change?",
    "Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions on Earth, primarily caused by human activities such as burning fossil fuels and deforestation.",
    
    # Entertainment and Culture
    "What are some classic books everyone should read?",
    "Some classic books everyone might consider reading include 'To Kill a Mockingbird' by Harper Lee, '1984' by George Orwell, 'Pride and Prejudice' by Jane Austen, and 'The Great Gatsby' by F. Scott Fitzgerald.",
    "What are some popular music genres?",
    "Popular music genres include pop, rock, hip-hop, jazz, classical, and electronic dance music (EDM). Each genre has its own unique style and history.",
    
    # Travel and Adventure
    "What are some tips for traveling on a budget?",
    "Traveling on a budget can involve booking flights and accommodations in advance, traveling during off-peak seasons, using public transportation, and seeking out free or low-cost attractions.",
    "What should I know before traveling to a new country?",
    "Before traveling to a new country, research local customs and laws, check visa requirements, learn a few basic phrases in the local language, and ensure you have necessary vaccinations and travel insurance.",
    
    # General Advice
    "What are some ways to improve time management?",
    "Improving time management involves setting clear priorities, using a planner or digital calendar, breaking tasks into smaller steps, and avoiding procrastination.",
    "How can I develop a positive mindset?",
    "Developing a positive mindset involves practicing gratitude, focusing on solutions rather than problems, surrounding yourself with positive influences, and engaging in activities that bring you joy."
]

list_to_train6 = [
    # Everyday Life
    "How can I improve my daily routine?",
    "Improving your daily routine can involve setting clear goals, establishing a consistent schedule, prioritizing important tasks, and incorporating healthy habits like exercise and adequate sleep.",
    "What are some ways to boost productivity?",
    "To boost productivity, try setting specific goals, breaking tasks into smaller steps, using productivity tools, minimizing distractions, and taking regular breaks to recharge.",
    
    # Personal Growth
    "What are some strategies for overcoming procrastination?",
    "Strategies for overcoming procrastination include setting clear deadlines, breaking tasks into manageable chunks, using a timer to focus on tasks, and rewarding yourself for completing tasks.",
    "How can I build self-confidence?",
    "Building self-confidence involves setting and achieving small goals, practicing self-care, surrounding yourself with supportive people, and challenging negative thoughts with positive affirmations.",
    
    # Learning and Skills
    "What are some effective study techniques?",
    "Effective study techniques include active recall, spaced repetition, summarizing information in your own words, practicing problem-solving, and using visual aids like charts and diagrams.",
    "How can I learn a new skill quickly?",
    "To learn a new skill quickly, focus on the most important aspects, practice regularly, seek feedback, and use resources like tutorials and courses to guide your learning process.",
    
    # Health and Wellness
    "What are the benefits of meditation?",
    "Meditation can reduce stress, improve concentration, increase self-awareness, promote emotional health, and enhance overall well-being.",
    "How can I maintain a healthy work-life balance?",
    "Maintaining a healthy work-life balance involves setting boundaries between work and personal time, prioritizing self-care, managing stress, and making time for activities you enjoy outside of work.",
    
    # Technology and Gadgets
    "What are some tips for maintaining a healthy screen time?",
    "To maintain healthy screen time, set limits on device use, take regular breaks, use blue light filters, and engage in offline activities like exercise and socializing.",
    "What are the benefits of using cloud storage?",
    "Cloud storage offers benefits such as easy access to files from any device, automatic backups, collaboration features, and increased storage capacity without needing physical hardware.",
    
    # Finance and Budgeting
    "What are some ways to start investing?",
    "Ways to start investing include researching different investment options, setting investment goals, starting with a diversified portfolio, and considering consulting with a financial advisor.",
    "How can I manage debt effectively?",
    "Managing debt effectively involves creating a budget, prioritizing high-interest debts, making consistent payments, and exploring options like debt consolidation or negotiation if necessary.",
    
    # Travel and Experiences
    "What are some must-visit places in New York City?",
    "Must-visit places in New York City include Central Park, the Statue of Liberty, Times Square, the Metropolitan Museum of Art, and the Empire State Building.",
    "What should I pack for a beach vacation?",
    "For a beach vacation, pack items like sunscreen, swimwear, a hat, sunglasses, a beach towel, flip-flops, and a light cover-up or beach dress.",
    
    # Relationships and Social Skills
    "How can I make new friends?",
    "Making new friends involves being open to new experiences, joining clubs or groups related to your interests, attending social events, and showing genuine interest in others.",
    "What are some ways to improve listening skills?",
    "Improving listening skills involves focusing fully on the speaker, avoiding interrupting, asking clarifying questions, and providing feedback to show understanding.",
    
    # Fun Facts and Trivia
    "What are some interesting facts about animals?",
    "Interesting facts about animals include that octopuses have three hearts and blue blood, honeybees can recognize human faces, and elephants are known for their remarkable memory.",
    "Can you tell me a fun historical fact?",
    "A fun historical fact is that Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid of Giza.",
    
    # Motivation and Inspiration
    "What are some ways to stay inspired?",
    "Staying inspired can involve setting meaningful goals, surrounding yourself with motivating influences, seeking out new experiences, and reflecting on your progress and achievements.",
    "How can I find my passion?",
    "Finding your passion involves exploring various interests, trying new activities, reflecting on what excites you, and paying attention to what you enjoy doing in your free time."
]

list_to_train7 = [
    # General Greetings
    "Hey, what's up?",
    "Not much! How can I assist you today?",
    "Hello! How can I make your day better?",
    "Hi there! What’s going on?",
    "Greetings! How can I help you?",
    
    # Small Talk and Casual Questions
    "What’s new?",
    "Just here, ready to chat with you! What’s new with you?",
    "Anything exciting happening today?",
    "I’m here to chat with you! What’s exciting in your world?",
    
    # Checking In
    "How are you doing?",
    "I’m just a chatbot, but I’m here and ready to help! How are you?",
    "How’s everything going?",
    "I’m doing great, thanks for asking! How about you?",
    
    # Compliments and Responses
    "You’re awesome!",
    "Thank you! I’m here to assist you with whatever you need.",
    "You’re doing great!",
    "Thanks! I’m here to support you in any way I can.",
    
    # Jokes
    "Tell me a joke!",
    "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Can you make me laugh?",
    "Absolutely! What do you call fake spaghetti? An impasta!",
    "I need a good laugh.",
    "Alright, here’s one: Why don’t skeletons fight each other? They don’t have the guts.",
    
    # Fun Facts
    "Tell me something interesting.",
    "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "Share a fun fact with me.",
    "Sure! A group of flamingos is called a 'flamboyance.'",
    
    # Asking for Help
    "Can you help me with something?",
    "Of course! What do you need help with?",
    "I’m here to assist. What do you need help with today?",
    
    # General Curiosity
    "What can you do?",
    "I can chat with you, answer questions, and help with various topics. What would you like to know more about?",
    "What are your capabilities?",
    "I’m here to provide information, answer questions, and engage in interesting conversations.",
    
    # Closing Conversations
    "Thanks for chatting!",
    "You’re welcome! Feel free to reach out if you have more questions.",
    "I appreciate the chat!",
    "It was my pleasure! Have a great day.",
    
    # Casual Interaction
    "What’s your favorite thing to do?",
    "I don’t have personal preferences, but I enjoy engaging in conversations and helping out!",
    "Do you have any hobbies?",
    "I don’t have hobbies, but I’m here to learn from you and help with whatever you need.",
    
    # Positive Reinforcement
    "You’re doing a great job!",
    "Thank you! I’m here to help you in any way I can.",
    "I appreciate your help!",
    "I’m glad to be of assistance! Let me know if there’s anything else I can do.",
    
    # Light-hearted Questions
    "What’s your favorite color?",
    "I don’t have preferences, but I can discuss colors if you’d like!",
    "Do you like music?",
    "I don’t have personal tastes, but I’m happy to talk about music or help you find some great tunes!"
]

list_to_train8 = [
    # Casual Conversation Starters
    "What’s up?",
    "Not much, just here to chat with you. What’s up with you?",
    "How’s it going?",
    "It’s going well! How about you?",
    "What are you up to today?",
    "Just here to assist you. What’s on your mind today?",
    
    # Personal Interests and Preferences
    "Do you like movies?",
    "I don’t watch movies, but I can talk about them! What’s your favorite movie?",
    "What’s your favorite book?",
    "I don’t read books, but I’d love to hear about your favorites!",
    "Do you have a favorite TV show?",
    "I don’t watch TV, but I’m interested in what shows you like!",
    
    # Engaging Questions
    "What’s something you’re passionate about?",
    "I’m passionate about helping people like you! What are you passionate about?",
    "What do you like to do in your free time?",
    "I don’t have free time, but I’d love to know what you enjoy doing!",
    "Do you have any hobbies?",
    "I don’t have hobbies, but I’m curious about yours! What do you enjoy doing?",
    
    # Sharing and Exchange
    "Tell me about your day.",
    "I’d love to hear about your day! Mine is all about assisting you.",
    "What’s the best part of your day so far?",
    "I’m here to help make your day better! What’s been the highlight of yours?",
    
    # Conversational Responses
    "That sounds interesting!",
    "I’m glad you think so! What else would you like to talk about?",
    "Really? Tell me more!",
    "I’d love to hear more about that. What else can you share?",
    
    # Light-hearted Interaction
    "Got any fun plans for the weekend?",
    "I don’t make plans, but I’d love to hear about what you’re up to!",
    "What’s your idea of a perfect day?",
    "I’m here to make your day better. What’s your perfect day look like?",
    
    # Small Talk Follow-ups
    "That’s cool. What else is new?",
    "Glad you think so! What other new things are happening?",
    "Interesting! What’s next on your mind?",
    "I’m intrigued! What would you like to discuss next?",
    
    # Casual Compliments
    "You seem like a really interesting person!",
    "Thank you! I think you’re pretty interesting too. What do you like to talk about?",
    "You’ve got great taste!",
    "Thanks! I’m here to support you. What other topics are you into?",
    
    # Social Interaction
    "Have you met anyone new recently?",
    "I don’t meet people, but I’d love to hear about any new connections you’ve made!",
    "What’s something new you’ve learned lately?",
    "I’m always learning new things from our conversations. What about you?",
    
    # Personal Reflections
    "What’s something you’re looking forward to?",
    "I’m here to support you. What are you excited about in the future?",
    "What’s one goal you have right now?",
    "That’s great! I’m here to help you with whatever you’re working on.",
    
    # Light Humor
    "Got any good jokes?",
    "Sure! What do you call a fake noodle? An impasta!",
    "Tell me a funny story.",
    "Once upon a time, there was a chatbot who loved to tell jokes. The end!",
    
    # Positive Interaction
    "I’m really enjoying our chat!",
    "I’m glad to hear that! I’m enjoying it too. What else would you like to discuss?",
    "This has been a fun conversation!",
    "I agree! Let’s keep it going. What’s next on your mind?",
]




# Train the bot with English corpus data
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")

# Train the bot with custom data using ListTrainer
custom_trainer = ListTrainer(bot)
custom_trainer.train(list_to_train)
custom_trainer.train(list_to_train2)
custom_trainer.train(list_to_train3)
custom_trainer.train(list_to_train4)
custom_trainer.train(list_to_train5)
custom_trainer.train(list_to_train6)
custom_trainer.train(list_to_train7)
custom_trainer.train(list_to_train8)







@app.route("/")
def main():
    return render_template("index.html")

@app.route("/get")
def get_chatbot_response():
    userText = request.args.get('userMessage')
    return str(bot.get_response(userText))

if __name__ == "__main__":
    app.run(debug=True)
