const questions = [
  /* Category 1 Questions */
  {
    category: category[0],
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[0],
    prompt: 'What is the current version of HTML?',
    media: '',
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
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
];

// export default questions;