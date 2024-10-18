import Joke from '../models/domain/joke.model';

let jokes = [
  {
    setup: 'What did the cheese say when it looked in the mirror?',
    punchline: 'Hello-Me (Halloumi)',
    hidden: true,
  },
  {
    setup: 'What kind of cheese do you use to disguise a small horse?',
    punchline: 'Mask-a-pony (Mascarpone)',
    hidden: true,
  },
  {
    setup: 'A kid threw a lump of cheddar at me',
    punchline: 'I thought ‘That’s not very mature’',
    hidden: true,
  },
];

const jokesArray: Joke[] = [
  new Joke(
    'What did the cheese say when it looked in the mirror?',
    'Hello-Me (Halloumi)',
    true
  ),
  new Joke(
    'What kind of cheese do you use to disguise a small horse?',
    'Mask-a-pony (Mascarpone)',
    false
  ),
  new Joke(
    'A kid threw a lump of cheddar at me',
    'I thought ‘That’s not very mature’',
    false
  ),
];
export  { jokes, jokesArray };
