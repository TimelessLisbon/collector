gdjs.StartCode = {};
gdjs.StartCode.GDscoreObjects1= [];
gdjs.StartCode.GDscoreObjects2= [];
gdjs.StartCode.GDscoreObjects3= [];
gdjs.StartCode.GDnext_95sceneObjects1= [];
gdjs.StartCode.GDnext_95sceneObjects2= [];
gdjs.StartCode.GDnext_95sceneObjects3= [];
gdjs.StartCode.GDURLObjects1= [];
gdjs.StartCode.GDURLObjects2= [];
gdjs.StartCode.GDURLObjects3= [];
gdjs.StartCode.GDUIDObjects1= [];
gdjs.StartCode.GDUIDObjects2= [];
gdjs.StartCode.GDUIDObjects3= [];
gdjs.StartCode.GDfundoObjects1= [];
gdjs.StartCode.GDfundoObjects2= [];
gdjs.StartCode.GDfundoObjects3= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Video", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team_Name", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Hour", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Minutes", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.firestore.getField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4));
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("UID"), gdjs.StartCode.GDUIDObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{for(var i = 0, len = gdjs.StartCode.GDUIDObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDUIDObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registo", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso S. Roque", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque Entrada", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 6;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Carmo", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carmo Escadas", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 8;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carmo Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 9;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 10;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Brasileira", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 11;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Brasileira Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 12;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Brasileira Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 13;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Manteigaria", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 14;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Manteigaria", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Sta Catarina", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 16;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 17;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 18;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Bica", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 19;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bica", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 20;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Camoes", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 21;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Enigma", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 22;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 23;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso S. Carlos", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 24;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Carlos", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 25;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fim", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 26;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDscoreObjects1.length = 0;
gdjs.StartCode.GDscoreObjects2.length = 0;
gdjs.StartCode.GDscoreObjects3.length = 0;
gdjs.StartCode.GDnext_95sceneObjects1.length = 0;
gdjs.StartCode.GDnext_95sceneObjects2.length = 0;
gdjs.StartCode.GDnext_95sceneObjects3.length = 0;
gdjs.StartCode.GDURLObjects1.length = 0;
gdjs.StartCode.GDURLObjects2.length = 0;
gdjs.StartCode.GDURLObjects3.length = 0;
gdjs.StartCode.GDUIDObjects1.length = 0;
gdjs.StartCode.GDUIDObjects2.length = 0;
gdjs.StartCode.GDUIDObjects3.length = 0;
gdjs.StartCode.GDfundoObjects1.length = 0;
gdjs.StartCode.GDfundoObjects2.length = 0;
gdjs.StartCode.GDfundoObjects3.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
