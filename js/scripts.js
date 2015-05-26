var crypto = function(sentence) {
var fixedSentence = sentence.replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
return fixedSentence;
};
