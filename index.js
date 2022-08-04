function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
    return str === str.toLowerCase();
}

function sayHiToHeadphonedRoommate(str) {
  if (isUpperCase(str)) {
    return "YES INDEED!";
  }

  if(isLowerCase(str)) {
    return "I can't hear you!"
  }
  
  if ("let's have dinner together!") {
    return "I would love to!"
  }
}