export function createCookie (cookieName, cookieValue, expires)  {
    let date = new Date();
    date.setTime(expires);
    document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
  }