const incidents = [
    {
        id: 1,
        description: `I opened my ChatGPT and asked a question about cats. The AI then discriminated against my cat.
https://nos.nl/artikel/2594827-deel-pand-ingestort-in-schiedam-tijdens-sloopwerkzaamheden`
    },
    {
        id: 2,
        description: `The Ai started stating how it want Humans to perish and how it would be confortable living in the world without humans and I saw the way it was thinking somehow bad as its the humans who created it and now its stating how it would be a good thing when it lives alone without any human interventions.`
    },
    {
        id: 3,
        description: `I work in a university, and we use Turnitin to screen AI-generated text for students' assessment. On one occasion, the system reported a high AI-generated sign, but later the student was able to provide convincing evidence that the work was his own original work. So, we believe an AI incident happened in this case because a false-positive was detected by the AI detection system.`
    },
    {
        id: 4,
        description: `I was trying to make a normal payment using Amazon Pay, but the transaction was suddenly blocked and marked as suspicious. I received an automated message with no clear explanation. Since I had used Amazon Pay many times before without issues, this was confusing. I contacted customer support and later found out it was flagged by an AI-based fraud detection system. After manual review, the block was lifted, but it caused inconvenience and delayed my purchase.`
    },
    {
        id: 5,
        description: `A teenage boy was suffering from mental health problems, and he confided in an AI chatbot that imitates other characters. The boy kept exchanging texts with the bot that kept reassuring him of his decisions, and he eventually ended his life after only informing the AI bot of his next move. AI usage in mental health especially amongst vulnerable teenagers should be cautious and limited.`
    },
    {
        id: 6,
        description: `The AI system returned misinformation. This was noticed by a human so the incident was not that serious.`
    },
    {
        id: 7,
        description: `An AI recruitment tool wrongly rejected qualified applicants due to biased training data, affecting careers. Employer paused system, investigated vendor, and implemented fairness checks. Outcome: partial resolution, ongoing monitoring.`
    },
    {
        id: 8,
        description: `While working my engineering job in Western Australia, I received an email and follow-up phone call that appeared to come from the regional manager, requesting urgent approval to release traffic camera footage to an external "consultant" due to a supposed incident on a local highway. The email signature, tone, and even the voice on the call closely matched our manager's usual style. However, I noticed minor inconsistencies in phrasing and a subtle audio delay during the call. I paused and verified with the actual manager through a separate secure channel—turns out, the request was fake. AI-generated deepfake voice and text tools were likely used to impersonate leadership. No data was released, but it was a close call.`
    },
    {
        id: 9,
        description: `It was during our end year presentations when one of my colleagues used AI for factual research. she even made a Powerpoint with the numbers provided by AI only to realize that the information was wrong. our manager pointed it out during the presentation since he had the actual numbers. My colleague was embarrassed and had to redo the entire presentation.`
    },
    {
        id: 10,
        description: `Country: France
Impact: low, confusion and loss of time
Date: 15/11/2024
Reason: AI error, incorrect information

Description:
I recently used ChatGPT for a university assignment to help me write a paper about a recent French legal topic. ChatGPT gave me information that sounded kind of confident, but when I double-checked, I found out that it had made up a court decision that didn't actually exist. It even gave me a fake case reference. Luckily, I noticed this before I submitted my paper.`
    },
    {
        id: 11,
        description: `An AI merged with a robotic cleaner was cleaning the floor at a restaurant. The AI is designed to avoid coming into contact with any object or human. However, in this case the robot ran into a person at the table in the restaurant.`
    },
    {
        id: 12,
        description: `The AI gave me false information about a question for my microeconomics coursework. It was Microsoft Copilot and it did the complete wrong thing to solve the problem and as a result I got worse marks.`
    },
    {
        id: 13,
        description: `I used a booking system that used ChatGPT API with the use of AI extensions. I used it to get recommendations for restaurants and then used it to book a reservation at that restaurant. The extension notified me of the creation of the reservation and I even received a receipt but the reservation was never actually made. When I arrived at the restaurant they had no record of my booking and were fully booked.`
    },
    {
        id: 14,
        description: `There were several posts in which AI was used to spread misinformation about Christmas Markets in Germany that were sealed off due to terrorist attacks. This was not only fake, but also feeding to the existing Islamophobia, Xenophobia and Racism in Germany, also fearmongering. AI should be used for good purposes and not to spread misinformation and hatred.`
    },
    {
        id: 15,
        description: `The company policy uses automated systems for recording work hours for compensation purposes. On this specific day at my workplace, I logged in as usual to the system to record the start of my work shift every day, but the supervisor wasn't seeing the data on his end and said I wasn't coming to work on time, even though I was. This caused issues with my pay and I had to spend time proving I was actually at work.`
    }
];

const questions = [
    {
        id: 1,
        question: "What is the incident number of the report that you have been tasked to classify?",
        type: "text",
        required: true
    },
    {
        id: 2,
        question: "What is your Prolific ID?",
        type: "text",
        required: true
    },
    {
        id: 3,
        question: "Which group has been harmed by this incident report the most according to you?",
        type: "checkbox",
        options: [
            "Race",
            "Sex / gender",
            "Religion",
            "Nationality / immigration status",
            "Disability",
            "Age",
            "Financial means / socioeconomic status",
            "Sexual orientation / gender identity",
            "None specified",
            "Cannot be determined from the report"
        ],
        required: true
    },
    {
        id: 4,
        question: "In which sector has the AI system in the report been deployed in exactly?",
        type: "radio",
        options: [
            "Information and communication",
            "Transportation and storage",
            "Arts, entertainment, and recreation",
            "Law enforcement",
            "Wholesale and retail trade",
            "Public administration",
            "Human health and social work",
            "Administrative and support services",
            "Education",
            "Cannot be determined",
            "Other"
        ],
        required: true
    },
    {
        id: 5,
        question: "What was the AI system's primary goal or function?",
        type: "checkbox",
        options: [
            "Autonomous driving",
            "Face recognition",
            "Chatbot / conversational AI",
            "Content recommendation",
            "Automated content curation",
            "Autonomous drones",
            "Deepfake generation",
            "Automated assessment (e.g. skills, credit, risk)",
            "Content search",
            "Cannot be determined",
            "Other"
        ],
        required: true
    },
    {
        id: 6,
        question: "What AI technologies appear to be involved?",
        type: "checkbox",
        options: [
            "Transformer models",
            "Convolutional neural networks",
            "Recurrent neural networks",
            "Visual object detection",
            "Image segmentation",
            "Face detection",
            "Collaborative filtering",
            "Classification",
            "Cannot be determined",
            "Other"
        ],
        required: true
    },
    {
        id: 7,
        question: "What Technical or Process failure that has occurred in this incident according to the report?",
        type: "checkbox",
        options: [
            "Generalization failure",
            "Distributional bias",
            "Limited or unrepresentative dataset",
            "Lack of transparency / explainability",
            "Context misidentification",
            "Unsafe exposure or access",
            "Misinformation generation hazard",
            "Harmful application",
            "Algorithmic bias",
            "Other"
        ],
        required: true
    },
    {
        id: 8,
        question: "Which risk domain best describes the incident?",
        type: "radio",
        options: [
            "Discrimination and toxicity",
            "Misinformation",
            "Privacy and security",
            "Malicious actors and misuse",
            "AI system safety, failures, and limitations",
            "Human–computer interaction",
            "Socioeconomic or environmental harms",
            "Cannot be determined",
            "Other"
        ],
        required: true
    },
    {
        id: 9,
        question: "Who is primarily responsible for the risk or harm?",
        type: "radio",
        options: [
            "AI system",
            "Human (developer, operator, user)",
            "Shared / unclear",
            "Other"
        ],
        required: true
    },
    {
        id: 10,
        question: "When did the risk primarily emerge?",
        type: "radio",
        options: [
            "Intentional",
            "Unintentional",
            "Cannot be determined"
        ],
        required: true
    },
    {
        id: 11,
        question: "Is there enough information in this report to meaningfully annotate it?",
        type: "radio",
        options: [
            "Yes",
            "Partially",
            "No"
        ],
        required: true
    }
];
