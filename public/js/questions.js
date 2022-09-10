const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'iFrames',
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'HTML5',
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'HTML5',
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'iFrames',
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'HTML5',
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'HTML5',
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'iFrames',
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'HTML5',
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Team A', 'Team B', 'Team C'],    
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 100
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['HTMLv5000', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5',
    cashPrize: 200
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 300
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 400
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'Git'],
    correctAnswer: 'iFrames',
    cashPrize: 500
  },
  {
    prompt: 'What is the expansion of HTML?',
    media: '',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 600
  },
  {
    prompt: 'What is the current version of HTML?',
    media: '',
    options: ['HTMLv5000', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5',
    cashPrize: 700
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    media: '',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 800
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    media: '',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 900
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    media: '',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'Git'],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  }
];

// export default questions;