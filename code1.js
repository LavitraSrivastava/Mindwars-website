gdjs.Story_32_32starts_32_45_32banishmentCode = {};
gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDDistanceObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDDistanceObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDNewTiledSpriteObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDNewTiledSpriteObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDblack_9595boundaryObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDblack_9595boundaryObjects2= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDinterestingObjects1= [];
gdjs.Story_32_32starts_32_45_32banishmentCode.GDinterestingObjects2= [];


gdjs.Story_32_32starts_32_45_32banishmentCode.mapOfGDgdjs_9546Story_959532_959532starts_959532_959545_959532banishmentCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1});
gdjs.Story_32_32starts_32_45_32banishmentCode.mapOfGDgdjs_9546Story_959532_959532starts_959532_959545_959532banishmentCode_9546GDBookOrangeTrimObjects1Objects = Hashtable.newFrom({"BookOrangeTrim": gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects1});
gdjs.Story_32_32starts_32_45_32banishmentCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("White"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1);
{for(var i = 0, len = gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1.length ;i < len;++i) {
    gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16944452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("fall0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BookOrangeTrim"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Story_32_32starts_32_45_32banishmentCode.mapOfGDgdjs_9546Story_959532_959532starts_959532_959545_959532banishmentCode_9546GDPlayerObjects1Objects, "Physics2", gdjs.Story_32_32starts_32_45_32banishmentCode.mapOfGDgdjs_9546Story_959532_959532starts_959532_959545_959532banishmentCode_9546GDBookOrangeTrimObjects1Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("White"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("myplatform"), gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects1);
{for(var i = 0, len = gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects1.length ;i < len;++i) {
    gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1.length ;i < len;++i) {
    gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lore display", false);
}}

}


};

gdjs.Story_32_32starts_32_45_32banishmentCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDmyplatformObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDPlayerObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDBookOrangeTrimObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDWhiteObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDDistanceObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDDistanceObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDblack_9595boundaryObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDblack_9595boundaryObjects2.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDinterestingObjects1.length = 0;
gdjs.Story_32_32starts_32_45_32banishmentCode.GDinterestingObjects2.length = 0;

gdjs.Story_32_32starts_32_45_32banishmentCode.eventsList0(runtimeScene);

return;

}

gdjs['Story_32_32starts_32_45_32banishmentCode'] = gdjs.Story_32_32starts_32_45_32banishmentCode;
