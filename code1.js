gdjs.VideoCode = {};
gdjs.VideoCode.GDscoreObjects1= [];
gdjs.VideoCode.GDscoreObjects2= [];
gdjs.VideoCode.GDnext_95sceneObjects1= [];
gdjs.VideoCode.GDnext_95sceneObjects2= [];
gdjs.VideoCode.GDURLObjects1= [];
gdjs.VideoCode.GDURLObjects2= [];
gdjs.VideoCode.GDURLdesvioObjects1= [];
gdjs.VideoCode.GDURLdesvioObjects2= [];
gdjs.VideoCode.GDDesvioObjects1= [];
gdjs.VideoCode.GDDesvioObjects2= [];
gdjs.VideoCode.GDokdesvioObjects1= [];
gdjs.VideoCode.GDokdesvioObjects2= [];
gdjs.VideoCode.GDvideoObjects1= [];
gdjs.VideoCode.GDvideoObjects2= [];
gdjs.VideoCode.GDplayObjects1= [];
gdjs.VideoCode.GDplayObjects2= [];
gdjs.VideoCode.GDfundoObjects1= [];
gdjs.VideoCode.GDfundoObjects2= [];


gdjs.VideoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.VideoCode.GDplayObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.VideoCode.GDplayObjects1[i].getHeight())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideoObjects1[i].pause();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDplayObjects1[k] = gdjs.VideoCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "video");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.VideoCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDfundoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideoObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDvideoObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDvideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDvideoObjects1[k] = gdjs.VideoCode.GDvideoObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDvideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registo", false);
}}

}


};

gdjs.VideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VideoCode.GDscoreObjects1.length = 0;
gdjs.VideoCode.GDscoreObjects2.length = 0;
gdjs.VideoCode.GDnext_95sceneObjects1.length = 0;
gdjs.VideoCode.GDnext_95sceneObjects2.length = 0;
gdjs.VideoCode.GDURLObjects1.length = 0;
gdjs.VideoCode.GDURLObjects2.length = 0;
gdjs.VideoCode.GDURLdesvioObjects1.length = 0;
gdjs.VideoCode.GDURLdesvioObjects2.length = 0;
gdjs.VideoCode.GDDesvioObjects1.length = 0;
gdjs.VideoCode.GDDesvioObjects2.length = 0;
gdjs.VideoCode.GDokdesvioObjects1.length = 0;
gdjs.VideoCode.GDokdesvioObjects2.length = 0;
gdjs.VideoCode.GDvideoObjects1.length = 0;
gdjs.VideoCode.GDvideoObjects2.length = 0;
gdjs.VideoCode.GDplayObjects1.length = 0;
gdjs.VideoCode.GDplayObjects2.length = 0;
gdjs.VideoCode.GDfundoObjects1.length = 0;
gdjs.VideoCode.GDfundoObjects2.length = 0;

gdjs.VideoCode.eventsList0(runtimeScene);

return;

}

gdjs['VideoCode'] = gdjs.VideoCode;
