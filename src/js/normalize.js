export function normalizeImage(img) {
  try {
    return img[0]['media-metadata'][2].url;
  } catch {
    return 'https://source.unsplash.com/random/300x300?noimage';
  }
}

export function normalizeAlt(alt) {
  try {
    return alt.map(val => val).join(', ');
  } catch {
    return 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  }
}

export function normalizeData(
  image,
  title,
  url,
  info,
  published_date,
  alt,
  category
) {
  const normData = {
    image: normalizeImage(image),
    title: title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: url || '',
    info: info || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    published_date: published_date || moment(Date.now()).format('DD/MM/YYYY'),
    alt: normalizeAlt(alt),
    category: category,
  };
  return normData;
}
