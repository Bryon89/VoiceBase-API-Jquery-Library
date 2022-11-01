# VoiceBase-API-Jquery-Library
Library that helps make common VoiceBase API requests with JQuery by Bryon Mathias at LivePerson.

Note that the VoiceBase API has many more capabilities than the ones supported in this library.

Library supported APIs and Documentation:

1) Upload a new media to VoiceBase by providing a media url.

    uploadMediaUrl(bearertoken, url)

2) Upload a new media to VoiceBase by providing a file.

    uploadMediaFile(bearertoken, file)

3) Get a list media that was recently uploaded to your VoiceBase account. 

    getAllMedia(bearertoken)

4) Get the transcription and analytics results for a single media.

    getSingleMedia(bearertoken, mediaId)