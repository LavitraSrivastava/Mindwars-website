gdjs.Opening_32sceneCode = {};
gdjs.Opening_32sceneCode.GDTitle_9595holderObjects1= [];
gdjs.Opening_32sceneCode.GDTitle_9595holderObjects2= [];
gdjs.Opening_32sceneCode.GDTitle_9595holderObjects3= [];
gdjs.Opening_32sceneCode.GDmystickObjects1= [];
gdjs.Opening_32sceneCode.GDmystickObjects2= [];
gdjs.Opening_32sceneCode.GDmystickObjects3= [];
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects1= [];
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects2= [];
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects3= [];
gdjs.Opening_32sceneCode.GDCoverObjects1= [];
gdjs.Opening_32sceneCode.GDCoverObjects2= [];
gdjs.Opening_32sceneCode.GDCoverObjects3= [];
gdjs.Opening_32sceneCode.GDStickObjects1= [];
gdjs.Opening_32sceneCode.GDStickObjects2= [];
gdjs.Opening_32sceneCode.GDStickObjects3= [];
gdjs.Opening_32sceneCode.GDNameInputObjects1= [];
gdjs.Opening_32sceneCode.GDNameInputObjects2= [];
gdjs.Opening_32sceneCode.GDNameInputObjects3= [];
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects1= [];
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects2= [];
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects3= [];
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects1= [];
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects2= [];
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects3= [];
gdjs.Opening_32sceneCode.GDEnterObjects1= [];
gdjs.Opening_32sceneCode.GDEnterObjects2= [];
gdjs.Opening_32sceneCode.GDEnterObjects3= [];
gdjs.Opening_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Opening_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Opening_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Opening_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Opening_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Opening_32sceneCode.GDNewSprite2Objects3= [];


gdjs.Opening_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.Opening_32sceneCode.GDNameInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32sceneCode.GDNameInputObjects2.length;i<l;++i) {
    if ( gdjs.Opening_32sceneCode.GDNameInputObjects2[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32sceneCode.GDNameInputObjects2[k] = gdjs.Opening_32sceneCode.GDNameInputObjects2[i];
        ++k;
    }
}
gdjs.Opening_32sceneCode.GDNameInputObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Opening_32sceneCode.GDEnterObjects2);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDEnterObjects2.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDEnterObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Commander_textholder"), gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.Opening_32sceneCode.GDCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Opening_32sceneCode.GDEnterObjects1);
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.Opening_32sceneCode.GDNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite_border"), gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stick"), gdjs.Opening_32sceneCode.GDStickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title_holder"), gdjs.Opening_32sceneCode.GDTitle_9595holderObjects1);
gdjs.copyArray(runtimeScene.getObjects("by_Cypher101"), gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects1);
gdjs.copyArray(runtimeScene.getObjects("mystick"), gdjs.Opening_32sceneCode.GDmystickObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Opening_32sceneCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Opening_32sceneCode.GDNameInputObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Opening_32sceneCode.GDTitle_9595holderObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDTitle_9595holderObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDmystickObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDmystickObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDCoverObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDStickObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDStickObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDNameInputObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNameInputObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects1[i].hide();
}
for(var i = 0, len = gdjs.Opening_32sceneCode.GDEnterObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDEnterObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story  starts - banishment", false);
}}

}


};gdjs.Opening_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.Opening_32sceneCode.GDCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enter"), gdjs.Opening_32sceneCode.GDEnterObjects1);
{for(var i = 0, len = gdjs.Opening_32sceneCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDCoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Opening_32sceneCode.GDCoverObjects1[i].getBehavior("Opacity").getOpacity() - (1.5));
}
}{for(var i = 0, len = gdjs.Opening_32sceneCode.GDEnterObjects1.length ;i < len;++i) {
    gdjs.Opening_32sceneCode.GDEnterObjects1[i].hide();
}
}}

}


{


gdjs.Opening_32sceneCode.eventsList0(runtimeScene);
}


};

gdjs.Opening_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Opening_32sceneCode.GDTitle_9595holderObjects1.length = 0;
gdjs.Opening_32sceneCode.GDTitle_9595holderObjects2.length = 0;
gdjs.Opening_32sceneCode.GDTitle_9595holderObjects3.length = 0;
gdjs.Opening_32sceneCode.GDmystickObjects1.length = 0;
gdjs.Opening_32sceneCode.GDmystickObjects2.length = 0;
gdjs.Opening_32sceneCode.GDmystickObjects3.length = 0;
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects1.length = 0;
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects2.length = 0;
gdjs.Opening_32sceneCode.GDCommander_9595textholderObjects3.length = 0;
gdjs.Opening_32sceneCode.GDCoverObjects1.length = 0;
gdjs.Opening_32sceneCode.GDCoverObjects2.length = 0;
gdjs.Opening_32sceneCode.GDCoverObjects3.length = 0;
gdjs.Opening_32sceneCode.GDStickObjects1.length = 0;
gdjs.Opening_32sceneCode.GDStickObjects2.length = 0;
gdjs.Opening_32sceneCode.GDStickObjects3.length = 0;
gdjs.Opening_32sceneCode.GDNameInputObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNameInputObjects2.length = 0;
gdjs.Opening_32sceneCode.GDNameInputObjects3.length = 0;
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects1.length = 0;
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects2.length = 0;
gdjs.Opening_32sceneCode.GDby_9595Cypher101Objects3.length = 0;
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects2.length = 0;
gdjs.Opening_32sceneCode.GDNewPanelSprite_9595borderObjects3.length = 0;
gdjs.Opening_32sceneCode.GDEnterObjects1.length = 0;
gdjs.Opening_32sceneCode.GDEnterObjects2.length = 0;
gdjs.Opening_32sceneCode.GDEnterObjects3.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Opening_32sceneCode.GDNewSprite2Objects3.length = 0;

gdjs.Opening_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Opening_32sceneCode'] = gdjs.Opening_32sceneCode;
