const googleTTS = require('google-tts-api'); 

const getAudioUrl = (text) => {
    const results = googleTTS.getAllAudioUrls(text, {
        lang: 'sq',
        slow: false,
        host: 'https://translate.google.com',
        splitPunct: ',.?',
      });
    return results
}

module.exports = { getAudioUrl }