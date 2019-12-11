import tw from 'tailwind.macro';

export function selectRandomFromArray(input: any[]) {
  if (!input) {
    throw new Error('empty/missing array');
  }

  if (input.length < 2) {
    return input[0];
  }

  return input[Math.floor(Math.random() * input.length)];
}

export function getRandomBackgroundColor() {
  const options = [
    tw`bg-blue-400`,
    tw`bg-yellow-400`,
    tw`bg-red-400`,
    tw`bg-orange-400`,
    tw`bg-green-400`,
    tw`bg-teal-400`,
    tw`bg-indigo-400`,
    tw`bg-yellow-400`,
    tw`bg-pink-400`,
    tw`bg-purple-400`,
  ];
  return selectRandomFromArray(options);
}
