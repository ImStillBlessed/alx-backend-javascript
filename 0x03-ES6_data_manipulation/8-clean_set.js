export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) =>
    value.startsWith(startString)
  );
  const cleanValues = filteredValues.map((value) =>
    value.slice(startString.length)
  );
  return cleanValues.join('-');
}
