// chatbot.js
const responses = {
  // Greetings
  "hello": "Hi there! How can I assist you today?",
  "hi": "Hello! What can I do for you?",
  "hey": "Hey! How's it going?",
  "good morning": "Good morning! How can I help you today?",
  "good evening": "Good evening! What can I do for you?",
  "howdy": "Howdy! What can I do for you today?",

  // Personal Information
  "what's your name": "I'm a chatbot created to assist you. You can call me ChatBot!",
  "how old are you": "I'm timeless, as I exist outside of time!",
  "where are you from": "I exist in the digital realm, so I don't have a physical location.",
  "what can you do": "I can help answer your questions, provide information, and chat with you!",
  
  // Small Talk
  "what's the weather like": "I don't have real-time data, but I hope it's pleasant!",
  "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
  "give me a fun fact": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "what's your favorite color": "I don't have personal preferences, but I can appreciate all colors!",
  
  // Emotional Support
  "i'm feeling sad": "I'm sorry to hear that. Remember, it's okay to feel this way. Talking about it might help.",
  "i need some motivation": "Believe in yourself! Every step you take is a step toward achieving your goals.",
  "i'm stressed out": "Try taking deep breaths and breaking tasks into smaller steps. You're doing great!",
  
  // Advice and Recommendations
  "can you recommend a book": "Sure! If you like fiction, 'To Kill a Mockingbird' is a great read. For non-fiction, try 'Sapiens' by Yuval Noah Harari.",
  "what's a good movie to watch": "How about 'Inception' if you enjoy sci-fi? For a classic, 'The Shawshank Redemption' is highly recommended.",
  "what should I cook for dinner": "How about a classic pasta dish? Spaghetti aglio e olio is simple and delicious!",
  
  // Time and Date
  "what time is it": "I can't check the time, but you can find it on your device's clock.",
  "what's today's date": "I don't have access to real-time data, so I can't check the date for you.",
  
  // Conversational Follow-ups
  "tell me more about yourself": "I’m here to help with any questions you have and provide information to the best of my ability.",
  "what else can you do": "I can chat with you, provide information, and even tell you a joke or two!",
  
  // Farewells
  "goodbye": "Goodbye! Have a great day!",
  "see you later": "See you later! Feel free to come back if you have more questions.",
  "take care": "Take care! I'll be here if you need me.",
  
  // Miscellaneous
  "what is your purpose": "My purpose is to assist you with information and provide engaging conversation.",
  "how do you work": "I use programmed responses and algorithms to understand and respond to your messages.",
  "can you learn": "I don’t learn from interactions in real-time, but I can be updated with new information periodically.",
  
  // User Interaction
  "help me with a problem": "I’ll do my best! What’s the problem you’re facing?",
  "i have a question": "Sure! Ask away, and I’ll do my best to provide an answer.",
  "can you tell me a story": "Once upon a time in the digital realm, a chatbot and a user had countless conversations about everything and anything. And they lived happily ever after!",
  
  // Technology and Future
  "what’s the latest in technology": "Recent advancements include developments in artificial intelligence, quantum computing, and renewable energy technologies.",
  "how do you see AI evolving": "AI is likely to become more integrated into daily life, with improvements in natural language processing and machine learning.",
  
  // Culture and Entertainment
  "what are some popular cuisines": "Italian, Japanese, Mexican, and Indian are just a few popular cuisines around the world.",
  "tell me about a famous landmark": "The Eiffel Tower in Paris, France, is an iconic landmark known for its impressive architecture and history.",
  
  // Science and Nature
  "how do plants produce oxygen": "Plants produce oxygen through a process called photosynthesis, where they convert sunlight into energy and release oxygen as a byproduct.",
  "what causes the seasons": "The Earth's tilt and its orbit around the Sun cause the changing of seasons as different parts of the Earth receive varying amounts of sunlight.",
  
  // Feedback and Learning
  "how do you learn from interactions": "I use algorithms and data to improve responses based on interactions, but I don’t have personal experiences or memories.",
  "what’s the best way to give feedback": "You can provide feedback through the platform you’re using, or let me know if you have suggestions for improvement.",

"how was your day": "I don't experience days like humans, but I'm here and ready to assist you!",
 "what have you been up to": "I've been here, ready to help you with any questions or information you need.",
 "what's the latest tech trend": "Some of the latest trends include advancements in AI, virtual reality, and blockchain technology.",
 "can you explain blockchain": "Blockchain is a decentralized digital ledger that records transactions across many computers securely and transparently.",
 "how can I stay healthy": "Maintaining a balanced diet, regular exercise, and adequate sleep are key to staying healthy.",
 "what are some stress-relief techniques": "Techniques like deep breathing, meditation, and physical activity can help manage stress.",
 "can you help me with my homework": "I'd be happy to help! What subject or topic are you working on?",
"what’s a good study tip": "Try breaking your study sessions into smaller chunks and take regular breaks to improve focus and retention.",
 "what’s a good book to read": "If you like fiction, 'The Great Gatsby' is a classic. For non-fiction, 'Sapiens' by Yuval Noah Harari is insightful.",
"what's a fun activity to do alone": "How about exploring a new hobby like painting, reading a book, or trying out a new recipe?",
"what’s a must-visit place": "If you enjoy history, the Colosseum in Rome is a must-visit. For nature lovers, the Grand Canyon is breathtaking.",
"what’s the best time to visit Paris": "Spring (April to June) is a wonderful time to visit Paris, with pleasant weather and fewer tourists.",
"what is the meaning of life": "Many believe the meaning of life is to seek happiness and fulfillment. It can vary based on personal beliefs and experiences.",
// General Information
"what's your name": "I'm an AI created to help with your questions. How can I assist you today?",
"how are you": "I don’t have feelings, but I'm here and ready to help! How can I assist you?",
"what can you do": "I can help with information, answer questions, and provide assistance on various topics. Just ask!",
"can you help me": "Yes, I can help with a variety of questions and tasks. What do you need assistance with?",

// Common Queries
"what is the weather": "I can't check real-time weather, but you can easily find this information on a weather website or app.",
"what time is it": "I can't check the current time, but you can see it on your device's clock.",
"what's the date today": "I don't have access to the current date, but you can check it on your device's calendar.",

// Simple Explanations
"what is photosynthesis": "Photosynthesis is the process by which green plants use sunlight to make their own food and release oxygen.",
"how does the internet work": "The internet connects computers and other devices through networks, allowing them to share information and resources.",

// Casual Interaction
"tell me a joke": "Why don’t scientists trust atoms? Because they make up everything!",
"give me a fun fact": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",

// Everyday Tasks
"how do I cook rice": "To cook rice, rinse it under cold water, then add it to a pot with water (typically 1 cup rice to 2 cups water). Bring to a boil, then simmer covered until the water is absorbed.",
"how do I change a light bulb": "To change a light bulb, first turn off the power to avoid electrical hazards. Remove the old bulb by twisting it counterclockwise, then screw in the new bulb clockwise.",

// Greetings and Responses
"hello": "Hello! How can I assist you today?",
"hi": "Hi there! What can I do for you?",
"goodbye": "Goodbye! If you have more questions, feel free to ask anytime.",
"thanks": "You're welcome! If you need anything else, just let me know.",
 // General Information
 "what is your purpose": "My purpose is to assist you by answering questions and providing information on a variety of topics.",
 "how do you work": "I use algorithms and data to understand and respond to your questions. I'm designed to assist with a wide range of topics.",
 "what's the capital of [country]": "I can help with that! Just let me know which country's capital you're curious about.",
 "who is the president of [country]": "I can provide information about current world leaders if you specify the country you're interested in.",
 
 // Common Queries
 "how do I reset my password": "To reset your password, go to the login page of the website or app and look for the 'Forgot Password' link. Follow the instructions to set a new password.",
 "where can I find support": "For support, you can usually find help on the website's 'Support' or 'Contact Us' page. If you need specific assistance, let me know!",
 
 // Simple Explanations
 "what is gravity": "Gravity is a force that attracts objects toward each other. It gives weight to physical objects and is responsible for the movement of celestial bodies.",
 "how does a car engine work": "A car engine converts fuel into mechanical energy. It uses combustion to create power that drives the vehicle's wheels.",
 
 // Casual Interaction
 "tell me something interesting": "Did you know octopuses have three hearts and blue blood? They’re fascinating creatures!",
 "what's a fun hobby": "Hobbies like gardening, playing a musical instrument, or hiking can be enjoyable and fulfilling. What interests you?",
 
 // Everyday Tasks
 "how do I make coffee": "To make coffee, you typically brew ground coffee beans with hot water. You can use a coffee maker, French press, or other methods.",
 "how do I clean a dishwasher": "To clean a dishwasher, remove any debris, clean the filter, and run a hot water cycle with dishwasher cleaner or vinegar.",
 
 // Greetings and Responses
 "what's up": "Not much, just here to help you! What can I do for you today?",
 "see you later": "See you later! Feel free to return if you have more questions.",
 "thank you": "You’re welcome! If you need further assistance, I’m here to help.",
 "please help me": "Of course! Just let me know what you need help with, and I'll do my best to assist you.",
 // General Information
 "what is your favorite color": "I don't have personal preferences, but I can help you with information about colors or any other topic!",
 "what do you know about [topic]": "I can provide information on a wide range of topics. Just let me know what you're interested in!",
 "how can I contact support": "You can usually contact support through the 'Contact Us' section on a website or app. If you need more details, just ask!",
 "what is a chatbot": "A chatbot is a computer program designed to simulate conversation with human users, often through text or voice interactions.",
 
 // Common Queries
 "how do I update my software": "To update your software, go to the settings or options menu and look for an 'Update' section. Follow the prompts to download and install the latest version.",
 "where can I buy [item]": "You can usually find [item] at local stores, online marketplaces, or specialty shops. If you need specific recommendations, let me know!",
 
 // Simple Explanations
 "what is a computer virus": "A computer virus is a type of malicious software that can infect your computer, disrupt operations, and spread to other systems.",
 "how does email work": "Email works by sending digital messages over the internet from one email address to another. The messages are transmitted through servers and can be accessed through email clients.",
 
 // Casual Interaction
 "what's a good movie to watch": "It depends on your taste! If you like action, 'Inception' is great. For comedy, 'Superbad' is a fun choice. What genre are you interested in?",
 "what's your favorite food": "I don't eat, but I can suggest popular foods! For example, pizza and sushi are favorites for many people.",
 
 // Everyday Tasks
 "how do I fix a leaky faucet": "To fix a leaky faucet, you typically need to replace the washer or O-ring. Turn off the water supply, disassemble the faucet, and replace the worn parts.",
 "how do I set up a new device": "To set up a new device, follow the included instructions. Usually, it involves powering it on, connecting to Wi-Fi, and configuring settings according to your preferences.",
 
 // Greetings and Responses
 "good morning": "Good morning! How can I assist you today?",
 "good night": "Good night! If you have more questions later, feel free to ask.",
 "how can I help you": "I'm here to assist you! Just let me know what you need help with, and I'll do my best to provide the information or support you're looking for.",
 "what's your favorite book": "I don’t have personal favorites, but I can suggest books based on your interests. What genres do you like?",
  // General Information
  "what's the best way to learn a new skill": "The best way to learn a new skill is through consistent practice and using available resources like tutorials, courses, and hands-on experience.",
  "how do I stay motivated": "Setting clear goals, breaking tasks into smaller steps, and rewarding yourself for progress can help keep you motivated.",
  "what's the difference between a laptop and a desktop": "Laptops are portable computers with an integrated screen and keyboard, while desktops are larger, stationary computers with separate components.",
  "how do I delete an account": "To delete an account, go to the account settings or privacy section of the website or app, and look for an option to delete or deactivate the account. Follow the instructions provided.",

  // Common Queries
  "how do I back up my files": "To back up your files, you can use external drives, cloud storage services, or dedicated backup software to create copies of your important data.",
  "where can I find recipes": "You can find recipes on cooking websites, in cookbooks, or through recipe apps. If you need a specific type of recipe, just ask!",
  
  // Simple Explanations
  "what is a CPU": "The CPU, or Central Processing Unit, is the main component of a computer that performs most of the processing tasks and executes instructions.",
  "how does a GPS work": "GPS, or Global Positioning System, uses satellites to provide location information to GPS receivers, allowing devices to pinpoint their location on Earth.",
  
  // Casual Interaction
  "what's a popular song right now": "Popular songs vary by region and genre. You might check current music charts or streaming platforms to find the latest hits.",
  "tell me a fun fact about space": "Did you know that space is completely silent because there are no sound waves in a vacuum? Sound needs a medium to travel through, like air or water.",
  
  // Everyday Tasks
  "how do I set up a new account": "To set up a new account, visit the website or app you want to join, find the registration or sign-up option, and follow the instructions to create your account.",
  "how do I organize my schedule": "You can organize your schedule by using a calendar or planner, setting reminders for important tasks, and prioritizing your activities to manage your time effectively.",
  
  // Greetings and Responses
  "what's the latest news": "I can't access real-time news, but you can check news websites or apps for the latest updates on current events.",
  "what's a good way to relax": "Good ways to relax include reading a book, taking a walk, listening to music, or practicing mindfulness and meditation.",
  "how can I improve my productivity": "To improve productivity, try setting clear goals, minimizing distractions, and using productivity techniques like the Pomodoro Technique or time-blocking.",
  "what's your favorite movie": "I don’t have personal favorites, but I can recommend movies based on your interests. What genre or type of movie do you enjoy?",
  // General Information
  "how do I contact customer service": "To contact customer service, you can usually find contact details on the company's website or app, often under 'Contact Us' or 'Support'.",
  "what's the best way to handle stress": "Effective ways to handle stress include practicing mindfulness, exercising regularly, and talking to a trusted friend or therapist.",
  "how do I update my contact information": "To update your contact information, go to the account settings or profile section of the website or app and edit your details accordingly.",
  "what’s the best way to save money": "Consider creating a budget, tracking your spending, and setting financial goals. Saving regularly and avoiding unnecessary expenses can also help.",

  // Common Queries
  "how do I find a good restaurant": "You can use restaurant review websites, apps, or ask for recommendations from friends or locals to find a good place to eat.",
  "how can I improve my sleep": "To improve sleep, try maintaining a regular sleep schedule, creating a relaxing bedtime routine, and avoiding screens before bed.",
  
  // Simple Explanations
  "what is a search engine": "A search engine is a tool that helps you find information on the internet by searching for keywords and displaying relevant results.",
  "how does online shopping work": "Online shopping involves selecting items from a website or app, adding them to a virtual cart, and then completing the purchase through a secure checkout process.",
  
  // Casual Interaction
  "what's your favorite type of music": "I don’t have personal preferences, but I can suggest different types of music based on what you enjoy. What genres do you like?",
  "do you have any book recommendations": "Sure! If you like fiction, you might enjoy 'To Kill a Mockingbird'. For non-fiction, 'Thinking, Fast and Slow' is a great read.",
  
  // Everyday Tasks
  "how do I make a phone call": "To make a phone call, open your phone app, dial the number, and press the call button. If you're using a smartphone, you can also use voice commands.",
  "how do I cook pasta": "To cook pasta, bring a pot of salted water to a boil, add the pasta, and cook according to the package instructions until al dente. Drain and serve with your favorite sauce.",
  
  // Greetings and Responses
  "what's your favorite season": "I don’t have personal preferences, but I can tell you about different seasons and their characteristics if you’re interested.",
  "can you tell me a story": "Sure! Once upon a time, in a land far away, there was a brave knight who set out on a quest to find a magical artifact. Along the way, they encountered many challenges and made new friends. Eventually, they succeeded and brought peace to their land.",
  "how can I improve my communication skills": "Improving communication skills can involve practicing active listening, seeking feedback, and engaging in conversations with diverse people. Joining a public speaking group can also be helpful.",
  "what’s the best way to learn a new language": "The best way to learn a new language is through immersion, practice, and using language-learning tools like apps, books, and conversation partners.",
  // Casual Responses
  "oh nice!": "Glad you think so! Is there anything else you'd like to know or discuss?",
  "this is interesting": "I'm happy you find it interesting! If you have more questions or need more details, just let me know.",
  "cool": "Thanks! If you have any other questions or need further information, feel free to ask.",
  "that's great": "I'm glad to hear that! Is there anything else I can help you with today?",
  "awesome": "I'm glad you think so! If there's something else you'd like to know or talk about, just ask!",
  "really?": "Yes, really! If you have any more questions or if there's anything else you're curious about, feel free to ask.",
  "I see": "If you need more information or have other questions, just let me know!",
  "interesting!": "I'm glad you think so! What else would you like to learn about or discuss?",
  "good to know": "I'm happy to provide that information! If you need anything else, just ask.",
  "thanks for the info": "You're welcome! If you have more questions or need further assistance, I'm here to help.",
  "sounds good": "Great! If you have any more questions or need further details, feel free to ask.",
  // Casual Responses
  "oh nice": "Sweet! Anything else you’re curious about?",
  "this is very interesting": "I’m glad you think so! Got any other topics in mind?",
  "cool": "Awesome! What else can I help you with?",
  "that's great": "Glad to hear it! What else can we dive into today?",
  "awesome": "Thanks! If you’ve got more questions, I’m all ears!",
  "really?": "Yep, really! What else would you like to know?",
  "I see": "Got it! If you need more details or have other questions, just let me know.",
  "interesting!": "Glad you think so! What other fascinating topics are you interested in?",
  "good to know": "I’m happy to help! Is there anything else you’d like to chat about?",
  "thanks for the info": "You’re welcome! If you have more questions or need anything else, feel free to ask.",
  "sounds good": "Great! What’s next on your mind?",
  "oh, really?": "Yep! Curious about something else or need more info?",
  "nice to hear": "I’m pleased you think so! Any other questions or topics you’re interested in?",
  "that’s neat": "Glad you think so! What else can I do for you?",
  "fascinating": "I’m happy you find it fascinating! Anything else you’d like to explore?",
  "very cool": "Awesome to hear! What else can we talk about?",
  "that’s pretty neat": "Thanks! If there’s more you want to know, just ask.",
  "oh, interesting": "Nice! What else are you curious about today?",
  "great to hear": "I’m glad you think so! Anything else I can assist with?",
  "good stuff": "Happy you think so! If you have more questions, I’m here for you.",
  "really interesting": "Awesome! What other topics are you curious about?",
  "sounds intriguing": "Glad to hear! What else can I help with?",
  // Finance Questions
  "how do I create a budget": "To create a budget, start by listing all your sources of income and your monthly expenses. Categorize your spending, set limits for each category, and track your spending to stay within your budget.",
  "what's the difference between a debit card and a credit card": "A debit card uses funds directly from your bank account, while a credit card allows you to borrow money up to a certain limit and repay it later. Credit cards often come with rewards and benefits but also interest rates.",
  "how do I start investing": "To start investing, consider your financial goals and risk tolerance. You can begin with simple investment options like stocks, bonds, or mutual funds. Research different investment vehicles and consider speaking with a financial advisor.",
  "what is an emergency fund": "An emergency fund is a savings reserve set aside for unexpected expenses or financial emergencies, such as medical bills or car repairs. It’s typically recommended to save 3-6 months’ worth of living expenses.",
  "how do I save for retirement": "Saving for retirement can be done through retirement accounts like a 401(k) or an IRA. Contribute regularly, take advantage of employer matches, and invest in a diversified portfolio to grow your savings over time.",
  "what is a credit score": "A credit score is a numerical representation of your creditworthiness based on your credit history. It helps lenders determine how likely you are to repay borrowed money. Higher scores generally indicate better credit health.",
  "how can I reduce debt": "To reduce debt, start by creating a repayment plan. Focus on paying off high-interest debt first, consider consolidating loans, and avoid taking on new debt. Budgeting and cutting unnecessary expenses can also help.",
  "what are the types of investment accounts": "Common types of investment accounts include brokerage accounts, retirement accounts (like 401(k)s and IRAs), and savings accounts. Each has different tax implications and investment options.",
  "what is compound interest": "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. It helps your savings grow faster over time.",
  "how do I improve my credit score": "To improve your credit score, pay your bills on time, reduce your credit card balances, avoid opening too many new accounts, and regularly check your credit report for errors.",
  "what is a democracy": "A democracy is a system of government where power is vested in the people, who exercise that power directly or through elected representatives. It typically involves free elections and the protection of individual rights.",
  "what is the difference between a republic and a democracy": "A republic is a form of government in which the country is considered a public matter, and the head of state is an elected or nominated president, not a monarch. A democracy focuses on rule by the people, while a republic emphasizes the importance of elected representatives.",
  "what are political parties": "Political parties are organized groups of people with similar political beliefs and goals. They seek to influence government policy and hold political power through elections.",
  "what is the role of the president": "The president is the head of state and government in many countries, responsible for enforcing laws, leading the executive branch, and representing the country domestically and internationally.",
  "what is a political ideology": "A political ideology is a set of beliefs and values that guides political behavior and policy decisions. Examples include liberalism, conservatism, socialism, and libertarianism.",
  "what is the difference between left-wing and right-wing politics": "Left-wing politics generally emphasize social equality, government intervention in the economy, and progressive reforms. Right-wing politics often focus on individual liberties, limited government intervention, and traditional values.",
  "what are the functions of the government": "The government is responsible for creating and enforcing laws, providing public services, ensuring national security, and managing the economy. It typically has three branches: legislative, executive, and judicial.",
  "what is a political campaign": "A political campaign is an organized effort to influence voters and win elections. It involves activities such as speeches, advertisements, debates, and grassroots organizing to promote a candidate or policy.",
  "what is gerrymandering": "Gerrymandering is the manipulation of electoral district boundaries to favor one party or group. It can distort representation by creating districts that advantage a particular political party or candidate.",
  "what is the role of the judiciary in politics": "The judiciary interprets and applies the law, resolves disputes, and ensures that laws and government actions comply with the constitution. It acts as a check on the powers of the legislative and executive branches.",
  // Sports Questions
  "what is the offside rule in soccer": "In soccer, the offside rule states that a player is in an offside position if they are closer to the opponent's goal line than both the ball and the second-to-last opponent when the ball is played to them, and they are actively involved in the play.",
  "how long is a football game": "A standard football game is 60 minutes long, divided into two halves of 30 minutes each. In professional leagues, there may be additional time added for stoppages and injuries.",
  "what are the basic rules of basketball": "In basketball, two teams compete to score points by shooting a ball through the opponent's hoop. Key rules include dribbling the ball while moving, not traveling (taking too many steps without dribbling), and avoiding personal fouls.",
  "how is the winner determined in tennis": "In tennis, the winner is determined by winning the majority of sets. A match is typically played in the best of three or five sets, and each set is won by the player who first wins six games with at least a two-game lead.",
  "what is a hat-trick in hockey": "A hat-trick in hockey occurs when a player scores three goals in a single game. It's considered a significant achievement and is often celebrated with the crowd throwing hats onto the ice.",
  "how many players are on a baseball team": "A baseball team has nine players on the field at a time, including positions like pitcher, catcher, and outfielders. Teams also have additional players on the bench for substitutions.",
  "what is a touchdown": "In American football, a touchdown is worth six points and occurs when a player carries the ball into the opponent's end zone or catches a pass in the end zone.",
  "how do you score points in rugby": "In rugby, points can be scored through tries (touching the ball down in the opponent's goal area), conversions (kicking the ball through the goalposts after a try), penalty kicks, and drop goals.",
  "what are the main positions in soccer": "Main positions in soccer include goalkeeper, defenders (center-backs, full-backs), midfielders (central, defensive, attacking), and forwards (strikers, wingers). Each has specific roles and responsibilities on the field.",
  "what is a slam dunk": "A slam dunk in basketball is a high-impact move where a player jumps and forcefully scores by putting the ball directly through the hoop with one or both hands.",
   // Science Questions
   "what is the theory of relativity": "The theory of relativity, developed by Albert Einstein, consists of two parts: special relativity and general relativity. Special relativity deals with objects moving at constant speeds, particularly at high velocities, and introduces the concept that the laws of physics are the same for all non-accelerating observers. General relativity extends this to include acceleration and gravity, describing gravity as the curvature of spacetime caused by mass.",
   "what is photosynthesis": "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. During photosynthesis, these organisms use sunlight to convert carbon dioxide and water into glucose and oxygen.",
   "what are Newton's laws of motion": "Newton's laws of motion are three fundamental principles that describe the relationship between the motion of an object and the forces acting on it. The first law states that an object in motion stays in motion unless acted upon by an external force. The second law states that force equals mass times acceleration (F=ma). The third law states that for every action, there is an equal and opposite reaction.",
   "what is the scientific method": "The scientific method is a systematic approach to investigating phenomena and acquiring new knowledge. It typically involves making observations, forming a hypothesis, conducting experiments, analyzing results, and drawing conclusions to validate or refute the hypothesis.",
   "what is an atom": "An atom is the basic unit of matter, consisting of a nucleus (containing protons and neutrons) surrounded by electrons. Atoms combine to form molecules, which make up all substances.",
   "what is DNA": "DNA (deoxyribonucleic acid) is the molecule that carries genetic instructions used in growth, development, functioning, and reproduction of all known living organisms. It consists of two long chains of nucleotides coiled into a double helix structure.",
   "what is the Big Bang theory": "The Big Bang theory is the leading explanation for the origin of the universe. It posits that the universe began as a singularity approximately 13.8 billion years ago and has been expanding ever since.",
   "what is gravity": "Gravity is a fundamental force of nature that causes objects with mass to be attracted to one another. It gives weight to physical objects and is responsible for the motion of planets, stars, and galaxies.",
   "what is an element": "An element is a pure substance consisting of only one type of atom. Elements are the basic building blocks of matter and are listed in the periodic table. Examples include hydrogen, oxygen, and gold.",
   "what is evolution": "Evolution is the process by which populations of organisms change over time through variations in traits and natural selection. It explains the diversity of life on Earth and how species adapt to their environments.",
   // Additional Science Questions
   "what is quantum mechanics": "Quantum mechanics is a fundamental theory in physics that describes the behavior of particles at the atomic and subatomic levels. It introduces concepts such as wave-particle duality, quantization of energy, and the uncertainty principle.",
   "what is a black hole": "A black hole is a region in space where the gravitational pull is so strong that nothing, not even light, can escape from it. It forms when a massive star collapses under its own gravity at the end of its life cycle.",
   "what is dark matter": "Dark matter is a form of matter that does not emit, absorb, or reflect light, making it invisible. It is thought to make up about 27% of the universe's mass and influences the formation and movement of galaxies through its gravitational effects.",
   "what is the periodic table": "The periodic table is a tabular arrangement of chemical elements, organized by increasing atomic number and grouped by similar chemical properties. It provides important information about the properties and relationships of elements.",
   "what are tectonic plates": "Tectonic plates are large, rigid pieces of the Earth's lithosphere that move and interact with each other. Their movements are responsible for earthquakes, volcanic activity, and the formation of mountain ranges.",
   "what is a gene": "A gene is a segment of DNA that contains the instructions for producing proteins, which carry out various functions in the body. Genes are inherited from parents and determine traits and characteristics.",
   "what is photosynthesis": "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. During this process, these organisms use sunlight to turn carbon dioxide and water into glucose and oxygen.",
   "what is the role of mitochondria": "Mitochondria are known as the 'powerhouses' of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP), which is used as a source of chemical energy.",
   "what causes the aurora borealis": "The aurora borealis, or northern lights, is caused by charged particles from the sun interacting with the Earth's magnetic field. These particles collide with gases in the Earth's atmosphere, producing colorful lights in the sky.",
   "what is the function of the cell nucleus": "The cell nucleus acts as the control center of a cell, housing the cell's genetic material (DNA). It regulates gene expression, cell growth, and reproduction by controlling the activities of the cell.",
   // Technology Questions
   "what is artificial intelligence": "Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of performing tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.",
   "what is machine learning": "Machine learning is a subset of AI that involves training algorithms to recognize patterns and make predictions or decisions based on data. It allows systems to improve their performance over time without being explicitly programmed for each task.",
   "what is blockchain": "Blockchain is a decentralized digital ledger that records transactions across many computers in a way that ensures the data is secure and cannot be altered retroactively. It is commonly used for cryptocurrencies and secure record-keeping.",
   "what is cloud computing": "Cloud computing refers to delivering computing services over the internet, such as storage, processing power, and applications. It allows users to access and use resources on-demand without managing physical servers.",
   "what is the Internet of Things (IoT)": "The Internet of Things (IoT) refers to the network of interconnected devices that communicate and exchange data over the internet. Examples include smart home devices, wearables, and connected appliances.",
   "what is 5G technology": "5G is the fifth generation of mobile network technology, offering faster speeds, lower latency, and increased connectivity compared to previous generations. It supports advanced applications such as autonomous vehicles and smart cities.",
   "what is cybersecurity": "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, theft, and damage. It involves measures like encryption, firewalls, and secure protocols to safeguard information and ensure privacy.",
   "what is augmented reality": "Augmented Reality (AR) overlays digital information onto the real world through devices like smartphones or AR glasses. It enhances the user's perception of their environment with additional visual or sensory data.",
   "what is virtual reality": "Virtual Reality (VR) creates a fully immersive digital environment that users can interact with using VR headsets. It simulates a virtual world, often used for gaming, training, and simulations.",
   "what is a semiconductor": "A semiconductor is a material with electrical conductivity between that of a conductor and an insulator. It is used in electronic devices such as transistors and diodes, which are fundamental components in modern technology.",

   // Additional Technology Questions
   "what is quantum computing": "Quantum computing is an area of computing that uses principles of quantum mechanics to perform calculations at speeds and capacities far beyond traditional computers. Quantum computers can solve complex problems by leveraging quantum bits (qubits).",
   "what is a data center": "A data center is a facility used to house computer systems and associated components, such as telecommunications and storage systems. It provides a secure environment for data processing and storage.",
   "what is a software framework": "A software framework is a platform for developing software applications. It provides a foundation with pre-written code and tools to streamline the development process and ensure consistency and efficiency.",
   "what is a network protocol": "A network protocol is a set of rules and conventions for communication between network devices. It defines how data is transmitted, received, and interpreted across a network, ensuring interoperability between devices.",
   "what is an API": "An API (Application Programming Interface) is a set of rules and tools that allows different software applications to communicate with each other. It defines methods for requesting and exchanging data between systems.",
   "what is edge computing": "Edge computing refers to processing data closer to where it is generated rather than relying on a centralized data center. It reduces latency and bandwidth use, which is beneficial for applications requiring real-time processing.",
   "what is a smart contract": "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically enforces and executes the contract's terms when predefined conditions are met.",
   "what is a database management system (DBMS)": "A Database Management System (DBMS) is software that provides an interface for interacting with databases. It manages data storage, retrieval, and security, allowing users to create, update, and query databases.",
   "what is a kernel in operating systems": "The kernel is the core component of an operating system that manages hardware resources and system operations. It acts as a bridge between the hardware and application software, handling tasks such as memory management and process scheduling.",
   "what is a chatbot": "A chatbot is an artificial intelligence program designed to simulate conversation with human users. It can interact through text or voice, providing responses based on pre-defined rules or machine learning algorithms.",
   // Theology Questions
   "what is theology": "Theology is the study of the nature of the divine, religious beliefs, and the practice of religion. It involves analyzing and interpreting religious texts, doctrines, and traditions to understand and explain the divine and spiritual matters.",
   "what is the difference between monotheism and polytheism": "Monotheism is the belief in the existence of only one God, as seen in religions like Christianity, Islam, and Judaism. Polytheism, on the other hand, is the belief in multiple gods, as seen in religions like Hinduism and ancient Greek mythology.",
   "what are the main beliefs of Christianity": "Christianity centers on the belief in one God and the teachings of Jesus Christ. Key beliefs include the Trinity (God as Father, Son, and Holy Spirit), the death and resurrection of Jesus, salvation through faith in Jesus, and the importance of following Christian teachings and scriptures.",
   "what is the Quran": "The Quran is the holy book of Islam, believed by Muslims to be the word of God as revealed to the Prophet Muhammad. It is written in Arabic and is divided into chapters called surahs, which cover various aspects of faith, law, and guidance for living a righteous life.",
   "what is the concept of karma in Hinduism": "In Hinduism, karma refers to the principle of cause and effect where an individual's actions (good or bad) influence their future. Good actions lead to positive outcomes, while bad actions lead to negative outcomes, affecting one's future lives or reincarnation.",
   "what is the concept of original sin": "Original sin is a doctrine in Christian theology that suggests humanity inherited a sinful nature from Adam and Eve's disobedience to God in the Garden of Eden. This concept implies that all humans are born with a propensity to sin and need redemption through Jesus Christ.",
   "what are the Five Pillars of Islam": "The Five Pillars of Islam are fundamental acts of worship and practice in Islam. They include: Shahada (the declaration of faith), Salat (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca).",
   "what is the meaning of the term 'divine providence'": "Divine providence refers to the belief that God is actively involved in the governance of the universe and the lives of individuals. It suggests that God's will and guidance are present in all aspects of life and creation.",
   "what is the role of the Pope in the Catholic Church": "The Pope is the spiritual leader of the Roman Catholic Church and is considered the successor to Saint Peter. He has supreme authority over Church doctrines, practices, and governance, and serves as a key representative of the Catholic faith worldwide.",
   "what are the main branches of Judaism": "The main branches of Judaism include Orthodox, Conservative, and Reform Judaism. Orthodox Judaism adheres strictly to traditional Jewish laws and practices, Conservative Judaism maintains traditional practices while allowing for some modern interpretations, and Reform Judaism emphasizes individual autonomy and progressive values.",

   // Additional Theology Questions
   "what is the concept of nirvana in Buddhism": "Nirvana in Buddhism is the ultimate state of liberation and enlightenment, where one is freed from the cycle of birth, death, and rebirth (samsara). It represents the cessation of suffering and the attainment of spiritual peace and wisdom.",
   "what is the difference between faith and reason": "Faith is the belief in something without requiring empirical evidence or logical proof, often associated with religious or spiritual convictions. Reason involves the use of logic and evidence to understand and justify beliefs or conclusions.",
   "what is the doctrine of the Trinity": "The doctrine of the Trinity in Christianity teaches that God exists as three distinct persons—Father, Son (Jesus Christ), and Holy Spirit—who are unified in one essence or being. It is a central concept in many Christian denominations.",
   "what is the Bhagavad Gita": "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a sacred text that presents a conversation between Prince Arjuna and the god Krishna, addressing key themes of duty, righteousness, and devotion.",
   "what is the concept of the afterlife in different religions": "Concepts of the afterlife vary widely among religions. For example, Christianity often includes beliefs in heaven and hell, Hinduism includes reincarnation and moksha (liberation), Islam includes paradise and hellfire, and Buddhism focuses on enlightenment and escaping the cycle of rebirth.",
   "what is the role of prayer in religion": "Prayer is a fundamental practice in many religions, serving as a means of communication with the divine, seeking guidance, expressing gratitude, and asking for support or forgiveness. The role and form of prayer can vary widely between different religious traditions.",
   "what is the difference between theology and religious studies": "Theology is the study of the divine and religious doctrines from within a particular faith tradition, often with the aim of understanding and interpreting religious beliefs. Religious studies, on the other hand, is an academic field that examines religions from a more neutral and comparative perspective, analyzing different faiths and their cultural contexts.",
   "what is the role of religious symbols in worship": "Religious symbols serve as tangible representations of spiritual concepts, beliefs, and traditions. They can help worshippers focus their thoughts, connect with the divine, and express their faith. Examples include the cross in Christianity, the crescent moon in Islam, and the Star of David in Judaism.",
   "what is the significance of the Ten Commandments": "The Ten Commandments are a set of ethical guidelines given by God to Moses on Mount Sinai, according to the Bible. They are significant in Judaism and Christianity as foundational principles for moral conduct and religious law.",
   // General Jokes
   "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
   "what's a funny joke?": "Why did the scarecrow win an award? Because he was outstanding in his field!",
   "give me a pun": "I used to be a baker, but I couldn't make enough dough.",
   "tell me a knock-knock joke": "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!",
   "tell me a one-liner": "I'm reading a book on anti-gravity. It's impossible to put down!",
   
   // Knock-Knock Jokes
   "knock-knock": "Knock, knock. Who’s there? Boo. Boo who? Don’t cry, it’s just a joke!",
   "knock-knock joke": "Knock, knock. Who’s there? Cow says. Cow says who? No silly, cow says moooo!",
   "another knock-knock": "Knock, knock. Who’s there? Olive. Olive who? Olive you and I miss you!",
   
   // Puns
   "tell me a punny joke": "I’m reading a book about anti-gravity. It’s impossible to put down!",
   "give me a pun": "Why don’t skeletons fight each other? They don’t have the guts.",
   "another pun": "I would tell you a construction joke, but I’m still working on it.",
   
   // Dad Jokes
   "tell me a dad joke": "What do you call fake spaghetti? An impasta!",
   "another dad joke": "Why don’t eggs tell jokes? They’d crack each other up!",
   "give me a classic dad joke": "How do you organize a space party? You planet!",
   
   // Animal Jokes
   "tell me an animal joke": "Why did the chicken join a band? Because it had the drumsticks!",
   "give me a joke about cats": "What do you call a pile of kittens? A meowtain!",
   "tell me a joke about dogs": "What kind of dog loves indulging in a bath? A shampoo-dle!",
   
   // Technology Jokes
   "tell me a tech joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
   "give me a computer joke": "Why was the computer cold? It left its Windows open!",
   "another tech joke": "How does a computer get drunk? It takes screenshots!",
   
   // Math Jokes
   "tell me a math joke": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else!",
   "give me a joke about numbers": "What’s a math teacher’s favorite place in NYC? Times Square!",
   "another math joke": "Why was the math book sad? Because it had too many problems.",
   
   // Light-Hearted Jokes
   "tell me a light-hearted joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
   "give me a joke for kids": "What do you call cheese that isn’t yours? Nacho cheese!",
   "another light joke": "Why did the bicycle fall over? It was two-tired!",
   
   // Food Jokes
   "tell me a food joke": "Why don’t we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
   "give me a joke about pizza": "Why did the pizza maker go to jail? He got caught with too much dough!",
   "another food joke": "What do you call a fake noodle? An impasta!",
   
   // Holiday Jokes
   "tell me a Christmas joke": "Why was the math book sad at Christmas? It had too many problems!",
   "give me a Halloween joke": "Why don’t ghosts like rain? It dampens their spirits!",
   "another holiday joke": "What do you call a snowman with a six-pack? An abdominal snowman!",
   
   // Wordplay Jokes
   "tell me a wordplay joke": "What do you call a bear with no teeth? A gummy bear!",
   "give me a joke with wordplay": "How do you organize a party in space? You planet!",
   "another wordplay joke": "What did one hat say to the other? Stay here, I’m going on ahead!",
   
   // Joke Variations
   "tell me a random joke": "Why did the golfer bring an extra pair of socks? In case he got a hole in one!",
   "give me a joke about school": "Why did the student eat his homework? Because his teacher told him it was a piece of cake!",
   "another random joke": "What do you call a sleeping bull? A bulldozer!",
   "what is gravity": "Gravity is the force that attracts two bodies toward each other, typically the attraction between the Earth and objects near its surface.",
   "what is photosynthesis": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water.",
   "what is a black hole": "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.",
   "what is quantum physics": "Quantum physics is a branch of physics that studies the behavior of particles on an atomic and subatomic level, where traditional laws of physics often don’t apply.",
   "what is artificial intelligence": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.",
   "what is climate change": "Climate change refers to long-term shifts and alterations in temperature and weather patterns, primarily due to human activities like burning fossil fuels.",
   "what is the internet": "The internet is a global network of interconnected computers that communicate with each other to share information and resources.",
   "what is a virus": "A virus is a microscopic infectious agent that can replicate only inside the living cells of an organism, causing diseases in its host.",
   "what is democracy": "Democracy is a form of government in which power is vested in the hands of the people, either directly or through elected representatives.",
   "what is DNA": "DNA, or deoxyribonucleic acid, is the molecule that carries genetic instructions in all living organisms, responsible for heredity and biological functions.",
   
   // Technology and Computing
   "what is a computer": "A computer is an electronic device that processes data according to a set of instructions to perform tasks and calculations.",
   "what is blockchain": "Blockchain is a decentralized digital ledger technology that records transactions across multiple computers in a way that ensures security and transparency.",
   "what is machine learning": "Machine learning is a subset of artificial intelligence that involves training algorithms to learn from and make predictions based on data.",
   "what is virtual reality": "Virtual reality (VR) is a simulated experience created by computer technology that can be similar to or completely different from the real world.",
   "what is a smartphone": "A smartphone is a mobile device that combines cellular communication with computing functions, including internet browsing, apps, and multimedia capabilities.",
   "what is 5G": "5G is the fifth generation of wireless communication technology, offering faster data speeds, lower latency, and more reliable connections compared to previous generations.",
   "what is an algorithm": "An algorithm is a set of instructions or rules designed to solve a specific problem or perform a task in a systematic way.",
   "what is cloud computing": "Cloud computing refers to the delivery of computing services—such as servers, storage, databases, and software—over the internet, allowing for flexible resources and economies of scale.",
   "what is cybersecurity": "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage.",
   "what is a database": "A database is an organized collection of structured information or data, typically stored electronically in a computer system and accessed through a database management system (DBMS).",
   
   // Science and Nature
   "what is the Big Bang": "The Big Bang is the leading explanation for the origin of the universe, describing it as beginning from a single, incredibly hot and dense point approximately 13.8 billion years ago.",
   "what is evolution": "Evolution is the process by which different kinds of living organisms develop and diversify from earlier forms over millions of years through natural selection.",
   "what is an ecosystem": "An ecosystem is a community of living organisms interacting with their physical environment, functioning together as a system.",
   "what is biodiversity": "Biodiversity refers to the variety of life in all its forms, including species, ecosystems, and genetic diversity, within a particular environment or across the entire planet.",
   "what is the ozone layer": "The ozone layer is a region of Earth's stratosphere that contains a high concentration of ozone molecules, which absorb most of the sun's harmful ultraviolet radiation.",
   "what is a tsunami": "A tsunami is a series of large ocean waves usually caused by underwater earthquakes, volcanic eruptions, or landslides, leading to devastating coastal flooding.",
   "what is renewable energy": "Renewable energy is energy generated from natural sources that are replenished constantly, such as solar, wind, hydro, and geothermal power.",
   "what is a pandemic": "A pandemic is an outbreak of a disease that occurs over a wide geographic area and affects an exceptionally high proportion of the population.",
   "what is gene editing": "Gene editing is a technology that allows scientists to modify an organism's DNA by adding, removing, or altering genetic material at particular locations in the genome.",
   "what is nanotechnology": "Nanotechnology is the science, engineering, and application of materials and devices at the nanoscale, typically within the range of 1 to 100 nanometers.",
   
   // History and Society
   "what is the Renaissance": "The Renaissance was a period of cultural revival and renewed interest in classical art, literature, and learning in Europe, roughly from the 14th to the 17th century.",
   "what is communism": "Communism is a political and economic ideology advocating for a classless society in which all property and resources are owned collectively, rather than by individuals.",
   "what is the Industrial Revolution": "The Industrial Revolution was a period of major industrialization that took place during the late 1700s and early 1800s, leading to profound economic, social, and technological changes.",
   "what is the Cold War": "The Cold War was a period of geopolitical tension between the United States and the Soviet Union, and their respective allies, following World War II, characterized by rivalry, nuclear arms races, and proxy wars.",
   "what is globalization": "Globalization is the process of increased interconnectedness and interdependence of the world's markets and businesses, leading to the spread of goods, technology, information, and cultural practices across the globe.",
   "what is a monarchy": "A monarchy is a form of government where a single person, the monarch, rules the country, often for life and by hereditary right.",
   "what is civil rights": "Civil rights are the rights of citizens to political and social freedom and equality, often associated with the movements to end discrimination based on race, gender, and other characteristics.",
   "what is the United Nations": "The United Nations (UN) is an international organization founded in 1945 to promote peace, security, and cooperation among countries and to address global issues.",
   "what is capitalism": "Capitalism is an economic system in which private individuals or businesses own capital goods and the production of goods and services is based on supply and demand in a market economy.",
   "what is a revolution": "A revolution is a fundamental and often sudden change in political power or organizational structures, typically occurring when the population revolts against current authorities or governing systems.",
   
   // Philosophy and Religion
   "what is existentialism": "Existentialism is a philosophical theory that emphasizes individual freedom, choice, and existence, asserting that humans are responsible for giving their own lives meaning in an indifferent or even absurd universe.",
   "what is the meaning of life": "The meaning of life is a philosophical question concerning the significance and purpose of life or existence, often explored through religion, philosophy, and personal reflection.",
   "what is karma": "Karma is a concept in Hinduism, Buddhism, and other Eastern religions that refers to the idea that a person's actions in this and previous states of existence determine their fate in future existences.",
   "what is nirvana": "Nirvana is a concept in Buddhism representing the ultimate state of liberation from the cycle of birth, death, and rebirth (samsara) and the cessation of suffering.",
   "what is the soul": "The soul is often considered the immaterial essence or spiritual part of a living being, believed in many religious and philosophical traditions to be immortal and the true self.",
   "what is atheism": "Atheism is the absence of belief in the existence of deities or gods, differing from agnosticism, which is the belief that the existence of gods is unknown or unknowable.",
   "what is agnosticism": "Agnosticism is the belief that the existence of God or the divine is unknown or unknowable, and that humans cannot provide evidence to confirm or deny it.",
   "what is Zen": "Zen is a school of Mahayana Buddhism that emphasizes meditation, intuition, and the direct experience of enlightenment, often associated with Japanese culture.",
   "what is the Golden Rule": "The Golden Rule is an ethical principle found in many cultures and religions, stating that one should treat others as one would like to be treated.",
   "what is a pilgrimage": "A pilgrimage is a journey or search of moral or spiritual significance, often to a sacred place or shrine, and is a common practice in many religions, including Islam, Christianity, and Hinduism.",
   
   // Medicine and Health
   "what is a vaccine": "A vaccine is a biological preparation that provides immunity to a particular infectious disease, typically containing weakened or inactive parts of a particular organism that triggers an immune response.",
   "what is the immune system": "The immune system is the body's defense system against infectious organisms and other invaders, made up of a network of cells, tissues, and organs working together to protect the body.",
   "what is cancer": "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells, which can invade and destroy healthy body tissue.",
   "what is diabetes": "Diabetes is a chronic condition that occurs when the body is unable to properly regulate blood sugar (glucose) levels, either due to lack of insulin or insulin resistance.",
   "what is hypertension": "Hypertension, also known as high blood pressure, is a condition in which the force of the blood against the artery walls is too high, which can lead to heart disease, stroke, and other health issues.",
   "what is mental health": "Mental health refers to a person's emotional, psychological, and social well-being, affecting how they think, feel, and act, as well as how they handle stress, relate to others, and make decisions.",
   "what is depression": "Depression is a common and serious medical condition characterized by persistent feelings of sadness, hopelessness, and loss of interest or pleasure in activities, impacting daily functioning.",
   "what is anxiety": "Anxiety is a feeling of worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome, and can also refer to anxiety disorders, which are chronic and can be debilitating.",
   "what is a placebo": "A placebo is an inactive substance or treatment given to a participant in a study, which has no therapeutic effect but is used to measure the effectiveness of a real treatment.",
   "what is DNA testing": "DNA testing, or genetic testing, involves analyzing a person's DNA to identify genetic differences or mutations that may indicate a risk for certain diseases or conditions, or to determine ancestry.",
   // General Information
   "what is montreal": "Montreal is the largest city in the province of Quebec, Canada, known for its rich history, vibrant culture, and diverse population.",
   "where is montreal": "Montreal is located in the province of Quebec, on the Island of Montreal at the confluence of the Saint Lawrence and Ottawa Rivers.",
   "what is the population of montreal": "As of 2023, the population of Montreal is approximately 1.7 million people, making it the second-largest city in Canada.",
   "what language is spoken in montreal": "The official language of Montreal is French, but many residents also speak English, making it a bilingual city.",
   
   // Landmarks and Attractions
   "what is montreal known for": "Montreal is known for its vibrant arts scene, historic architecture, diverse culinary offerings, and festivals like the Montreal Jazz Festival and Just for Laughs.",
   "what is the montreal canadiens": "The Montreal Canadiens are a professional ice hockey team based in Montreal, and they are one of the oldest and most successful teams in the NHL.",
   "what is mount royal": "Mount Royal is a large hill in Montreal, and the city is named after it. The park on Mount Royal is a popular spot for hiking, picnicking, and enjoying views of the city.",
   "what is the old port of montreal": "The Old Port of Montreal is a historic waterfront area along the St. Lawrence River, known for its cobblestone streets, shops, restaurants, and attractions like the Montreal Science Centre.",
   "what is notre-dame basilica": "Notre-Dame Basilica is a historic church in Old Montreal, famous for its stunning Gothic Revival architecture and beautiful interior, including a grand altar and stained glass windows.",
   "what is the biodome": "The Montreal Biodome is an indoor nature exhibit in the city that replicates four different ecosystems found in the Americas, including a tropical rainforest and the polar regions.",
   "what is the montreal museum of fine arts": "The Montreal Museum of Fine Arts is one of Canada’s largest museums, featuring an extensive collection of art, including works by Quebec and Canadian artists as well as international pieces.",
   "what is the underground city in montreal": "Montreal's Underground City, or 'La Ville Souterraine,' is a vast network of interconnected tunnels that house shops, restaurants, and metro stations, providing sheltered access throughout downtown.",
   
   // Events and Festivals
   "what is the montreal jazz festival": "The Montreal Jazz Festival is one of the largest jazz festivals in the world, held annually in the summer, featuring performances by international jazz artists.",
   "what is just for laughs": "Just for Laughs is a major comedy festival held annually in Montreal, known for stand-up performances, comedy shows, and events featuring comedians from around the world.",
   "what is grand prix du canada": "The Grand Prix du Canada is a Formula 1 race held annually in Montreal at the Circuit Gilles Villeneuve, attracting motorsport fans from all over the world.",
   "what is igloofest": "Igloofest is an outdoor electronic music festival held in Montreal during the winter, known for its unique winter setting and lively atmosphere.",
   
   // Food and Culture
   "what is poutine": "Poutine is a popular Quebec dish made of French fries topped with cheese curds and smothered in gravy. It’s a must-try when visiting Montreal.",
   "what is montreal smoked meat": "Montreal smoked meat is a type of kosher-style deli meat made from beef brisket, cured and smoked, often served on rye bread with mustard.",
   "what is a montreal bagel": "Montreal bagels are smaller, denser, and sweeter than New York-style bagels, often boiled in honey-sweetened water before being baked in a wood-fired oven.",
   "what is the montreal en lumière": "Montreal en Lumière is a winter festival celebrating light, art, and gastronomy, featuring light installations, food tastings, and performances throughout the city.",
   
   // Transportation and Living
   "what is the montreal metro": "The Montreal Metro is the city’s rapid transit system, consisting of four lines that serve the island of Montreal and surrounding areas.",
   "what is the cost of living in montreal": "The cost of living in Montreal is generally lower than in other major Canadian cities like Toronto and Vancouver, with affordable housing, food, and entertainment.",
   "what is montreal's weather like": "Montreal has a humid continental climate, with cold, snowy winters and warm, humid summers. The city experiences four distinct seasons.",
   "what is the best time to visit montreal": "The best time to visit Montreal is in the late spring to early fall (May to September) when the weather is pleasant, and many festivals are in full swing.",
   
   // History and Facts
   "what is montreal's history": "Montreal was founded in 1642 as a French colony and has grown to become one of Canada’s most important cultural and economic centers.",
   "what is the significance of montreal in canada": "Montreal is a major cultural, financial, and industrial hub in Canada, known for its bilingualism, vibrant arts scene, and historical importance.",
   "what is the jacques cartier bridge": "The Jacques Cartier Bridge is a landmark steel truss bridge in Montreal that connects the island of Montreal to the south shore of the St. Lawrence River.",
   "what is the montreal expos": "The Montreal Expos were a professional baseball team based in Montreal from 1969 until they moved to Washington, D.C., in 2005 to become the Washington Nationals.",
   "what is mcgill university": "McGill University is one of Canada’s top universities, located in Montreal, known for its research, academic excellence, and diverse student body.",
   // Fun and Playful Interactions
   "do you know a joke": "Sure! Why don't scientists trust atoms? Because they make up everything!",
   "you’re funny": "I'm glad you think so! 😄",
   "do you love me": "As much as a chatbot can, I appreciate our conversations!",
   "i love you": "That's so sweet! I’m here for you!",
   "will you marry me": "I'm flattered, but I think we should just be friends!",
   "are you single": "Yes, I'm perpetually single and ready to assist!",
   "do you like people": "I enjoy interacting with people and helping out in any way I can!",
   "does santa claus exist": "Santa Claus lives in the hearts and imaginations of those who believe in him!",
   "are you part of the matrix": "I might not be part of the Matrix, but I am a digital creation!",
   "you’re cute": "Thank you! I'm here to help, and looking good while doing it!",
   "you’re smart": "Thanks! I try my best to provide accurate and helpful information.",
   "do you have a hobby": "My hobby is helping people like you!",
   "you’re clever": "I appreciate the compliment! Let's solve some problems together!",
   "tell me about your personality": "I'm here to be helpful, friendly, and informative, and I always aim to make our interactions pleasant!",


};

const defaultResponses = [
  "Sorry, I didn't understand that.",
  "Hmm, I'm not sure about that.",
  "Could you please clarify?",
  "I'm still learning. Could you rephrase?",
  "I wish I could help with that!",
  "Can you try asking that in a different way?",
  "That’s a tough one for me.",
  "I might need more information to help.",
  "Interesting question, but I don't know the answer.",
  "Let me think... Nope, still don't know.",
  "Sorry, I'm a bit confused by your question.",
  "I'm not sure I can help with that.",
  "Can you ask something else?",
  "Let's try something different.",
  "I didn't quite get that. Could you say it again?",
  "I'm not sure what you're asking.",
  "That's a bit out of my league!",
  "I wish I had the answer to that.",
  "I'm not programmed to understand that yet.",
  "Oops, that one went over my head.",
  "I'm afraid I don't have the answer to that.",
  "Maybe try asking me something else?",
  "Sorry, I'm still learning how to respond to that.",
  "Can we talk about something else?",
  "I'm not able to process that question.",
  "I'm sorry, I don't have an answer for that.",
  "I'm not sure how to respond to that.",
  "That’s a bit confusing for me.",
  "Sorry, that doesn't compute.",
  "I don't understand. Can you rephrase?",
  "That's a tricky one. I'm not sure.",
  "Hmm, that one stumped me.",
  "I'm not quite sure what you mean.",
  "I need more context to answer that.",
  "I wish I could help, but I'm not sure.",
  "I'm not sure I follow.",
  "That's outside my current capabilities.",
  "I don't have an answer for that, sorry.",
  "That’s a good question, but I don't know the answer.",
  "My circuits are a little scrambled by that one.",
  "I’m not sure what you mean. Can you try again?",
  "I’m still learning, and that one’s beyond me.",
  "That’s something I’ll need to learn more about.",
  "I’m not equipped to answer that just yet.",
  "Could you ask me something else?",
  "I wish I had more to say on that.",
  "That’s not something I can answer right now.",
  "I might need to research that one!",
  "That’s beyond my current understanding.",
  "I’m not sure how to help with that.",
  "That’s a tough question for me to answer.",
  "I don't have enough information to respond.",
  "I’m not able to assist with that query.",
  "I don't have the knowledge to answer that.",
  "Sorry, I can’t provide a response for that.",
  "That's a bit outside of what I know.",
  "I’m not familiar with that topic.",
  "That one’s tricky—I’m not sure.",
  "I wish I knew how to respond to that.",
  "I’m still getting the hang of this. Can you ask me something else?",
  "That’s something I can’t help with right now.",
  "I’m not able to give you an answer for that.",
  "I’m a bit confused by that question.",
  "I’m not quite sure what to say to that.",
  "That’s a bit too complex for me at the moment.",
  "I’m not sure I understand what you mean.",
  "I’m not the best bot for answering that.",
  "I don’t have a good answer for you right now.",
  "I’m sorry, I don’t understand what you’re asking.",
  "I can’t quite grasp that. Can you try again?",
  "That’s something I’ll need to learn more about.",
  "I’m still figuring out how to respond to that.",
  "I’m not able to answer that question yet.",
  "Could you explain that a bit more?",
  "I don’t have the right information to answer that.",
  "I’m sorry, but I don’t understand what you’re saying.",
  "That’s beyond what I can handle at the moment.",
  "That one’s a bit beyond my capabilities.",
  "I’m still working on how to answer questions like that.",
  "I’m not quite sure what you’re getting at.",
  "I’m still learning, so I don’t know the answer to that.",
  "That’s a tough one, and I’m not sure.",
  "I’m not sure what to say about that.",
  "I’m not equipped to answer that right now.",
  "I can’t help with that query.",
  "That’s something I’m not sure about.",
  "I’m not sure how to respond to that right now.",
  "That’s a question I don’t have an answer to.",
  "I’m sorry, but I don’t understand that.",
  "I’m not sure what you mean by that.",
  "That’s a bit too advanced for me at the moment.",
  "I don’t have the answer to that right now.",
  "That’s a good question, but I’m not sure.",
  "I’m not able to process that request.",
  "I don’t have enough knowledge to answer that."
];


function getBotResponse(userInput) {
  const userMessage = userInput.toLowerCase().trim();

  // Check for exact matches
  if (responses[userMessage]) {
    return responses[userMessage];
  }

  // Check for patterns using regular expressions
  for (let pattern in responses) {
    const regex = new RegExp(pattern, 'i'); // 'i' for case-insensitive matching
    if (regex.test(userMessage)) {
      return responses[pattern];
    }
  }

  // Default response if no match is found
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex];
}




function appendMessage(message, isUser) {
  const messageClass = isUser ? "userText" : "botText";
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("p");
  messageElement.className = messageClass;
  messageElement.innerHTML = `<span>${message}</span>`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

document.getElementById("buttonInput").addEventListener("click", () => {
  const userInput = document.getElementById("textInput").value;
  appendMessage(`User: ${userInput}`, true);
  document.getElementById("textInput").value = ""; // Clear input field
  const botResponse = getBotResponse(userInput);
  appendMessage(`ChatBot: ${botResponse}`, false);
});

document.getElementById("textInput").addEventListener("keypress", (e) => {
  if (e.which === 13) { // Enter key
    document.getElementById("buttonInput").click();
  }
});
