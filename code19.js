gdjs.Camoes_32EnigmaCode = {};
gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final = [];

gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDscoreObjects1= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects2= [];
gdjs.Camoes_32EnigmaCode.GDokObjects1= [];
gdjs.Camoes_32EnigmaCode.GDokObjects2= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects1= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects2= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects1= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects2= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects1= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects2= [];
gdjs.Camoes_32EnigmaCode.GDPos1Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos1Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos2Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos2Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos3Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos3Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos4Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos4Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos5Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos5Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos6Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos6Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos7Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos7Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos8Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos8Objects2= [];


gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos1Objects1Objects = Hashtable.newFrom({"Pos1": gdjs.Camoes_32EnigmaCode.GDPos1Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos2Objects1Objects = Hashtable.newFrom({"Pos2": gdjs.Camoes_32EnigmaCode.GDPos2Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos3Objects1Objects = Hashtable.newFrom({"Pos3": gdjs.Camoes_32EnigmaCode.GDPos3Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos4Objects1Objects = Hashtable.newFrom({"Pos4": gdjs.Camoes_32EnigmaCode.GDPos4Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos5Objects1Objects = Hashtable.newFrom({"Pos5": gdjs.Camoes_32EnigmaCode.GDPos5Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos6Objects1Objects = Hashtable.newFrom({"Pos6": gdjs.Camoes_32EnigmaCode.GDPos6Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos7Objects1Objects = Hashtable.newFrom({"Pos7": gdjs.Camoes_32EnigmaCode.GDPos7Objects1});
gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos8Objects1Objects = Hashtable.newFrom({"Pos8": gdjs.Camoes_32EnigmaCode.GDPos8Objects1});
gdjs.Camoes_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Camoes_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects2[i].getAnimation() != 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos1Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() != 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() != 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects2[i].getAnimation() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos3Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects2[i].getAnimation() != 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos4Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects2[i].getAnimation() != 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos5Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos5Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects2[i].getAnimation() != 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos6Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos6Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects2[i].getAnimation() != 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos7Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos7Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects2[i].getAnimation() != 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos8Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos8Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos4Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos4Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos5Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos5Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos6Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos6Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos7Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos7Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos8Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos8Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(7);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(3);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};

gdjs.Camoes_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length = 0;

gdjs.Camoes_32EnigmaCode.eventsList0(runtimeScene);

return;

}

gdjs['Camoes_32EnigmaCode'] = gdjs.Camoes_32EnigmaCode;
