export default function canonize(url) {
  //TODO custom domain name
  const re = new RegExp('@?(https?:)?(\/\/)?((github|www|telegram|vk|twitter|xn|medium)[^\/]*\/)?(\@)?([a-zA-Z0-9\.\_]*)', 'i');
  const username = url.match(re)[6];
  return '@' + username;
}
