gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDscoreObjects1= [];
gdjs.LeaderboardCode.GDscoreObjects2= [];
gdjs.LeaderboardCode.GDnext_95sceneObjects1= [];
gdjs.LeaderboardCode.GDnext_95sceneObjects2= [];
gdjs.LeaderboardCode.GDURLObjects1= [];
gdjs.LeaderboardCode.GDURLObjects2= [];
gdjs.LeaderboardCode.GDURLdesvioObjects1= [];
gdjs.LeaderboardCode.GDURLdesvioObjects2= [];
gdjs.LeaderboardCode.GDDesvioObjects1= [];
gdjs.LeaderboardCode.GDDesvioObjects2= [];
gdjs.LeaderboardCode.GDokdesvioObjects1= [];
gdjs.LeaderboardCode.GDokdesvioObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12758956);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(25);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_95sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_95sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDURLdesvioObjects1.length = 0;
gdjs.LeaderboardCode.GDURLdesvioObjects2.length = 0;
gdjs.LeaderboardCode.GDDesvioObjects1.length = 0;
gdjs.LeaderboardCode.GDDesvioObjects2.length = 0;
gdjs.LeaderboardCode.GDokdesvioObjects1.length = 0;
gdjs.LeaderboardCode.GDokdesvioObjects2.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
