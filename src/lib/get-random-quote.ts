import quotes from '@/constants/quotes.json';

export interface Quote {
  text: string;
  source: string;
}

export function getRandomQuote(): Quote {
  const quotesArray = quotes.quotes;
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}
