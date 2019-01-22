function doGet(e) {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

// get the chart data to pass through to front-end
function getChartData() {
  
//  var sheet = SpreadsheetApp.getActiveSheet();
  var main = SpreadsheetApp.getActive().getSheetByName('main');
  var sheet = SpreadsheetApp.getActive().getSheetByName(main.getRange('B1').getValue());
//  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  
  Browser.msgBox(sheet.getName());
  
  var headings = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0].map(function(heading) {
    return heading.toLowerCase();
  });
  
  Logger.log(headings);
  
  var values = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();

  var x = [];
  var y = [];
  var sharpe = [];
  
  for(var i = 0; i < values.length; i++){
    x.push(values[i][0]);
    y.push(values[i][1]);
    sharpe.push(values[i][2]);
  }
        
  var data = [x, y, sharpe];
  
  return data;
  
}
