const Data = 
    {
      title: 'Basics of HTML',
      questions: [
        {
          text: 'Which element is used for a top-level heading?',
          answers: ['div', 'h0', 'h1', 'p'],
          correctAnswer: 'h1',
        },
        {
          text: 'Which element is used for a page break?',
          correctAnswer: 'br',
          incorrectAnswers: ['div', 'break', 'p'],
        },
        {
          text: 'Which markup makes a link?',
          correctAnswer: "<a href='/cats' />",
          incorrectAnswers: [
            "<href a='/cats' />",
            "<a src='/cats' />",
            "<link href='/cats' />",
          ],
        },
        {
          text: 'Which markup correctly creates an image?',
          correctAnswer: "<img src='cat.jpg' />",
          incorrectAnswers: [
            "<src img='cat.jpg' />",
            '<img>cat.jpg</img>',
            '<src>cat.jpg</img>',
          ],
        },
      ],
    }
    
  export default Data;