/*
 - add "dailyDouble: 'true'" and cashPrize
 - leave media empty if nothing to show
 - media checks sub folder to determine type
    - media/audio = <audio>
    - media/video = <video>
    - media/image = <img> (default)
*/

const questions = [
  /* NAPSTER Questions */
  {
    category: category[0],
    prompt: 'NAME THIS SONG',
    media: 'media/image/NAPSTER_100.png',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[0],
    prompt: 'FINISH THE LYRICS',
    media: 'media/audio/Napster_200.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[0],
    prompt: 'NAME THIS SONG',
    media: 'media/image/NAPSTER_300.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[0],
    prompt: 'FINISH THE LYRICS',
    media: 'media/audio/Napster_400.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[0],
    prompt: 'NAME THIS SONG',
    media: 'media/image/NAPSTER_500.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[0],
    prompt: 'FINISH THE LYRICS',
    media: 'media/audio/Napster_600.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[0],
    prompt: 'NAME THIS SONG',
    media: 'media/image/NAPSTER_700.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[0],
    prompt: 'FINISH THE LYRICS',
    media: 'media/audio/Napster_800.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[0],
    prompt: 'NAME THIS SONG',
    media: 'media/image/NAPSTER_900.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[0],
    prompt: 'FINISH THE LYRICS',
    media: 'media/audio/Napster_1000.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* ICON Questions */
  {
    category: category[1],
    prompt: 'NAME THIS CELEB AND THE AD',
    media: 'media/image/ICON_100.jpg',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[1],
    prompt: 'NAME THE COMPANY AND FAMOUS ‘90s PRODUCT',
    media: 'media/image/ICON_200.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[1],
    prompt: 'THESE ICONIC “SLINKY” SANDALS WERE ORIGINALLY MADE BY THIS COMPANY',
    media: 'media/image/ICON_300.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[1],
    prompt: 'NAME THIS FRAGRANCE',
    media: 'media/image/ICON_400.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[1],
    prompt: 'NAME THIS CELEB AND THIS MUST HAVE ACCESSORY FROM THE 90s',
    media: 'media/image/ICON_500.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[1],
    prompt: 'THIS SANRIO CHARACTER MADE ITS DEBUT IN 1990',
    media: 'media/image/ICON_600.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[1],
    prompt: 'THIS IS AN AD FOR',
    media: 'media/image/ICON_700.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[1],
    prompt: 'THIS IS AN AD FOR WHICH BRAND',
    media: 'media/image/ICON_800.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[1],
    prompt: 'NAME THIS AD PERFORMANCE',
    media: 'media/image/ICON_900.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[1],
    prompt: 'NAME THIS CELEB AND THE AD',
    media: 'media/image/ICON_1000.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* 626 Questions */
  {
    category: category[2],
    prompt: 'WHAT WERE MR. FAIR’S GO TO SNACKS DURING CLASS?',
    media: '',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[2],
    prompt: 'AT OUR SENIOR BREAKFAST, WHO WAS HYPNOTIZED AND PROFESSED HIS LOVE TO ONE OF OUR MEMBERS?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[2],
    prompt: 'WHAT WERE THE PREVIOUS NAME(S) OF “SPEEDZONE” IN PUENTE HILLS',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[2],
    prompt: 'WHO IN OUR GROUP HAD THE SHORTEST RELATIONSHIP AND WITH WHOM',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[2],
    prompt: 'WHICH OF OUR CLASSMATES FAMOUSLY SAID “HIYA BIFF”?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[2],
    prompt: 'WHAT SELF-PROCLAIMED “PIANO PRODIGY” THAT “COULD’VE BEEN VALEDICTORIAN” ERASED AND CHANGED THEIR GRADES WITH A PENCIL',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[2],
    prompt: 'WHO IN OUR GROUP HAD THE MOST SIGNIFICANT OTHERS (TO DATE)?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[2],
    prompt: 'WHAT CELEBRITY LOCKED JOCELYN IN WHS BATHROOM?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[2],
    prompt: 'BEFORE AMC 20, WHAT WERE THE NAMES OF THE OTHER MOVIE THEATERS IN PUENTE HILLS?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[2],
    prompt: 'WHAT IS THE BOY / GIRL RATIO OF 2ND GEN FAB?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 2000,
    dailyDouble: 'true'
  },
  /* SCREENS Questions */
  {
    category: category[3],
    prompt: 'HUM THE THEME SONG TO 90210',
    media: 'media/audio/SCREENS_100.mp3',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[3],
    prompt: 'WHAT IS FORREST GUMP’S MOST FAMOUS LINE?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[3],
    prompt: 'NAME 4 DISNEY AFTERNOON SHOWS',
    media: 'media/image/SCREENS_300.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[3],
    prompt: 'RECITE THE LINES TO THIS SCENE',
    media: 'media/video/SCREENS_400.mp4',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[3],
    prompt: 'SING THE CHORUS TO THE DAWSON’S CREEK THEME SONG',
    media: 'media/audio/SCREENS_500.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[3],
    prompt: 'THE NAME OF THIS CHARACTER AND HIS ALTER EGO',
    media: 'media/image/SCREENS_600.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[3],
    prompt: 'SING ALONG TO THE SAVED BY THE BELL THEME SONG',
    media: 'media/audio/SCREENS_700.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[3],
    prompt: 'THE NAME OF THIS ICONIC DUO AND FROM WHAT MOVIE',
    media: 'media/image/SCREENS_800.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[3],
    prompt: 'IN FRIENDS, WHILE AT THE HOSPITAL, RACHEL AND MONICA LAND DATES WITH THESE TWO HANDSOME DOCTORS. NAME THE 2 ACTORS.',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[3],
    prompt: 'DECODE THIS',
    media: 'media/image/SCREENS_1000.png',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  /* TAG Questions */
  {
    category: category[4],
    prompt: 'WHAT IS THE TAGLINE FOR THIS COMMERCIAL CAMPAIGN?',
    media: 'media/video/TAG_100.mp4',
    options: [teamA, teamB, teamC],    
    cashPrize: 100
  },
  {
    category: category[4],
    prompt: 'WHAT IS THE TAGLINE FOR THIS COMMERCIAL CAMPAIGN?',
    media: 'media/video/TAG_200.mp4',
    options: [teamA, teamB, teamC],  
    cashPrize: 200
  },
  {
    category: category[4],
    prompt: 'FINISH THE JINGLE: THE BEST PART OF WAKING UP IS…',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 300
  },
  {
    category: category[4],
    prompt: 'THE CATCHPHRASE FOR THIS PRODUCT',
    media: 'media/image/TAG_400.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 400
  },
  {
    category: category[4],
    prompt: 'WHAT JINGLE USED THE WORDS “BABY BACK”?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 500
  },
  {
    category: category[4],
    prompt: 'WHAT IS MAYBELLINE’S SLOGAN?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 600
  },
  {
    category: category[4],
    prompt: 'THE FULL NAME OF THIS COMPANY AND THE TAGLINE IT’S KNOWN FOR',
    media: 'media/image/TAG_700.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 700
  },
  {
    category: category[4],
    prompt: 'RANDY MACHO MAN SAVAGE CATCHPHRASE FOR THIS PRODUCT',
    media: 'media/image/TAG_800.jpg',
    options: [teamA, teamB, teamC],  
    cashPrize: 800
  },
  {
    category: category[4],
    prompt: 'FINISH THE LYRICS: WHAT WOULD YOU DO FOR A…',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 900
  },
  {
    category: category[4],
    prompt: '”BE LIKE MIKE” WAS A TV AD FOR WHAT AND FOR WHO?',
    media: '',
    options: [teamA, teamB, teamC],  
    cashPrize: 1000
  },
  {
    category: 'Final Jeopardy',
    prompt:  'List the next generation in order of youngest to oldest',
    media: 'media/audio/Final_Jeopardy.mp3',
    options: [teamA, teamB, teamC],  
    cashPrize: 0,
    finalJeopardy: 'true'    
  }
];

// export default questions;