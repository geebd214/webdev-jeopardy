/*
 - add "dailyDouble: 'true'" and cashPrize
 - leave media empty if nothing to show
 - media checks sub folder to determine type
    - media/audio = <audio>
    - media/video = <video>
    - media/image = <img> (default)
*/

const questions = [
  /* Category 1 Questions */
  {
    category: category[0],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100,    
  },
  {
    category: category[0],
    prompt: 'Finish the lyrics ...',
    media: 'media/audio/Napster_200.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[0],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[0],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[0],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[0],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[0],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[0],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[0],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[0],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* ICON Questions */
  {
    category: category[1],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[1],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[1],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[1],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[1],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: 'media/image/ICON_500.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[1],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[1],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[1],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[1],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[1],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* 626 Questions */
  {
    category: category[2],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[2],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[2],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[2],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[2],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[2],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[2],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[2],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[2],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[2],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 2000,
    dailyDouble: 'true'
  },
  /* SCREENS Questions */
  {
    category: category[3],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[3],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[3],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[3],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: 'media/video/SCREENS_400.mp4',
    options: [teamA, teamB, teamC],  
    cashPrize: 400,
  },
  {
    category: category[3],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[3],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[3],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[3],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[3],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[3],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* TAG Questions */
  {
    category: category[4],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[4],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[4],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[4],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[4],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[4],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[4],
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[4],
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[4],
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[4],
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
];

// export default questions;