export function formatString(inputString: string) {
  const words = inputString.split('-');
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return formattedWords.join(' ');
}

export const getColorByCategoryAndValue = (
  category: string,
  value: string | number
): string => {
  const colors: { [key: string]: { [key: string]: string } } = {
    faculty: {
      'Teknologi Digital': 'bg-[#4caf50] text-white',
      Desain: 'bg-[#ff9800] text-white',
      Bisnis: 'bg-[#e91e63] text-white',
    },
    major: {
      'Bisnis Keberlanjutan': 'bg-[#4caf50] text-white',
      'Pembiayaan dan Optimalisasi Bisnis': 'bg-[#ff9800] text-white',
      'Teknologi Virtual Reality & Game': 'bg-[#e91e63] text-white',
      'Teknologi Internet of Things & Cyber Security':
        'bg-[#ff5722] text-white',
      'Desain Digital': 'bg-[#9c27b0] text-white',
      'Teknologi BlockChain, AI & Data Science': 'bg-[#3f51b5] text-white',
    },
    credit: {
      1: 'bg-[#f44336] text-white',
      2: 'bg-[#e91e63] text-white',
      3: 'bg-[#9c27b0] text-white',
      4: 'bg-[#673ab7] text-white',
      5: 'bg-[#3f51b5] text-white',
      6: 'bg-[#2196f3] text-white',
      7: 'bg-[#00bcd4] text-white',
      8: 'bg-[#009688] text-white',
      9: 'bg-[#4caf50] text-white',
    },
    semester: {
      1: 'bg-[#ffeb3b] text-black',
      2: 'bg-[#ffc107] text-black',
      3: 'bg-[#ff9800] text-white',
      4: 'bg-[#ff5722] text-white',
      5: 'bg-[#795548] text-white',
      6: 'bg-[#9e9e9e] text-white',
      7: 'bg-[#607d8b] text-white',
      8: 'bg-[#00bcd4] text-white',
    },
    level: {
      1: 'bg-[#4caf50] text-white',
      2: 'bg-[#8bc34a] text-white',
      3: 'bg-[#cddc39] text-black',
      4: 'bg-[#ffeb3b] text-black',
      5: 'bg-[#ffc107] text-black',
    },
  };

  return colors[category]?.[value.toString()] || 'bg-[#f44336] text-white';
};
