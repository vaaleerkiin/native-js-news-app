import moment from 'moment/moment';

export function normalizeImage(img) {
  if (img[2]) {
    try {
      return img[2].url;
    } catch {
      return 'https://source.unsplash.com/random/300x300?noimage';
    }
  } else {
    try {
      return img[0]['media-metadata'][2].url;
    } catch {
      return 'https://source.unsplash.com/random/300x300?noimage';
    }
  }
}

export function normalizeTitle(title) {
  if (title.main) {
    try {
      return title.main;
    } catch {
      return 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }
  } else {
    try {
      return title;
    } catch {
      return 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }
  }
}

export function normalizeAlt(alt) {
  // console.log(alt);
  if (alt[0]) {
    if (!alt[0].value) {
      try {
        return alt.map(val => val).join(', ');
      } catch {
        return 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
      }
    } else {
      try {
        return alt.map(obj => obj.value).join(', ');
      } catch {
        return 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
      }
    }
  } else {
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
    title: normalizeTitle(title),
    url: url || '',
    info: info || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    published_date:
      moment(published_date).format('DD/MM/YYYY') ||
      moment(Date.now()).format('DD/MM/YYYY'),
    alt: normalizeAlt(alt),
    category: category,
  };
  return normData;
}
