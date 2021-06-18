
// semantic intuitino task (Machery)

semantic_intuition_instr = ["<p>In this game, we have 4 short stories for you and a question about each story.</p><p>Please read carefully!</p>"]

godel_1_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "<p><center>Please read carefully:</center></p><p>Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices. Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:</p>"]
godel_1_opt = ["the person who really determined the solstice times? or", "the person who stole the discovery of the solstice times?</div>"]

godel_2_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "<p><center>Please read carefully:</center></p><p>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:</p>"]
godel_2_opt = ["the person who really discovered the incompleteness of arithmetic? or", "the person who got hold of the manuscript and claimed credit for the work?</div>"]


jonah_1_story_para1 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>(Press any key to continue...)</p>"]
jonah_1_story_para2 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>"]
jonah_1_story_para3 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>(Press any key to continue...)</p>"]
jonah_1_story_all = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p><p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>When a contemporary German high school student says “Attila was the king who drove the Roman from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</p>"]
jonah_1_opt = ["He is talking about Raditra.", "He is talking about a fictional person who does not really exist.</div>"]

jonah_2_story_para1 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>(Press any key to continue...)</p>"]
jonah_2_story_para2 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Ghangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>"]
jonah_2_story_para3 = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Ghangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>(Press any key to continue...)</p>"]
jonah_2_story_all = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "<p><center>Please read carefully:</center></p><p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Ghangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</p>"]
jonah_2_opt = ["She is talking about the generous monk, Leung Yiu Pang.", "She is talking about a fictional person who does not really exist.</div>"]





///////////////////////// demog questions /////////////////////////

questions_pre_button = "Continue"
question_button = "Next"
label_done = "Done!"
demog_dropdown_placeholder = "Select your answer"
demog_require_answer = "Questions marked with <font color='brown'>*</font> require a response."


