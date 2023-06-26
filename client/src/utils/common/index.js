export const generatePassword = () => {
  return (
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
  );
};

export const parseJwt = (token) => {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};
