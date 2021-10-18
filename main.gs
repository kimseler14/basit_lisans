var tg_token = 'TOKEN';
var spreadsheetId = 'SHEETID';
var telegramUrl = 'https://api.telegram.org/bot' + tg_token;



var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName("Lisanslananlar");

function sendText(id, answer) {
  var url = telegramUrl + '/sendMessage?chat_id=' + id + '&text=' + answer;
  UrlFetchApp.fetch(url);
}

function doGet(e){
  try{
    sendText("TELEGRAM ID",e.queryString);
    id_sonuc = search(e.parameter["id"])
    Logger.log(id_sonuc);
    return ContentService.createTextOutput(JSON.stringify(id_sonuc) ).setMimeType(ContentService.MimeType.JSON); 
  }catch(e) {
    Logger.log(e);
    return ContentService.createTextOutput(false).setMimeType(ContentService.MimeType.JSON); 
  }
}

function search(id){
  var values = sheet.getRange(2,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();
  for(var i = 0;i<values.length;i++){
    if(values[i] == id){
      return true;
      }
    }
  return false;
}




















