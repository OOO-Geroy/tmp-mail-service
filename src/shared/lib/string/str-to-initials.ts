export function stringToInitials(name: string) {
  const [name1, name2 = ''] = name.toLowerCase().split(' ');
  const initial1 = name1.replace(/[^\wа-я]/gi, '')[0] || '';
  const initial2 = name2.replace(/[^\wа-я]/gi, '')[0] || '';
  return `${initial1.toUpperCase()}${initial2.toUpperCase()}`;
}
