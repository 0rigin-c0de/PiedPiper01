export const ImageCovert = (imageURL, providerId) => {
  let result = imageURL;
  if (providerId.includes("google")) {
    result = imageURL.replace("s96-c", "s400-c");
  }
  return result;
};
