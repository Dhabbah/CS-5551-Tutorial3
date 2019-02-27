/* var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

var speechToText = new SpeechToTextV1({
  iam_apikey: '{apikey}',
  url: '{url}'
}); */

export class WatsonAuthentication {
    iamApikey;
    url;

    constructor() {
        this.iamApikey = 'kWZxvoDq9IX1-sqUVUgtZRVRunsTgPL_cxqdtw5oK0jy';
        this.url = 'https://stream.watsonplatform.net/text-to-speech/api';
    }
}

export class SearchTerm {
    userSearch;

    constructor() {
        this.userSearch = '';
    }
}
