function getAllMedia(bearertoken) {
    var settings = {
      "crossDomain": true,
      "url": "https://apis.voicebase.com/v3/media",
      "method": "GET",
      "headers": {
        "accept": "application/json",
        "Authorization": `Bearer ${bearertoken}`
      },
      "processData": false,
      "contentType": false,
      success: function(data) {
        console.log("success");
        },
      error: function(nodata) {
        console.log("error");
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

function getSingleMedia(bearertoken, mediaId) {
    var settings = {
      "crossDomain": true,
      "url": `https://apis.voicebase.com/v3/media/${mediaId}`,
      "method": "GET",
      "headers": {
        "accept": "application/json",
        "Authorization": `Bearer ${bearertoken}`
      },
      "processData": false,
      "contentType": false,
      success: function(data) {
        console.log("success");
        },
      error: function(nodata) {
        console.log("error");
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

function uploadMediaUrl(bearertoken, url, configuration, metadata) {
    var form = new FormData();
    form.append('mediaUrl', url);
    var settings = {
      "crossDomain": true,
      "url": "https://apis.voicebase.com/v3/media",
      "method": "POST",
      "headers": {
        "accept": "application/json",
        "Authorization": `Bearer ${bearertoken}`
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form,
      success: function(data) {
        console.log("success");
        },
      error: function(nodata) {
        console.log("error");
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

function uploadMediaFile(bearertoken, file, configuration, metadata) {
    var form = new FormData();
    form.append('media', file);
    var settings = {
      "crossDomain": true,
      "url": "https://apis.voicebase.com/v3/media",
      "method": "POST",
      "headers": {
        "accept": "application/json",
        "Authorization": `Bearer ${bearertoken}`
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form,
      success: function(data) {
        console.log("success");
        },
      error: function(nodata) {
        console.log("error");
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}