
gdjs.evtsExt__ObjectStack__ObjectStack = gdjs.evtsExt__ObjectStack__ObjectStack || {};

/**
 * Behavior generated from Object Stack
 */
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack = class ObjectStack extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Object Stack
 */
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.SharedData = class ObjectStackSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ObjectStack_ObjectStackSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ObjectStack_ObjectStackSharedData = new gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.SharedData(
      initialData
    );
  }
  return instanceContainer._ObjectStack_ObjectStackSharedData;
}

// Methods:
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.userFunc0xce8b40 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.objectStack = [];
// Make contains(), remove() and unicity checks more efficients.
behavior.objectSet = new Set();

if (!runtimeScene.__allObjectStacks) {
  runtimeScene.__allObjectStacks = new Set();
  // Its only use is to have a O(1) check for
  // deleted objects that have never been in a stack.
  runtimeScene.__objectStacks_allUsedObjects = new Set();
  // Remove from deleted objects from stacks.
  gdjs.registerObjectDeletedFromSceneCallback(function (runtimeScene, obj) {
    if (runtimeScene.__objectStacks_allUsedObjects.has(obj)) {
      runtimeScene.__objectStacks_allUsedObjects.delete(obj);
      for (const behavior of runtimeScene.__allObjectStacks) {
        /** @type {gdjs.RuntimeObject[]} */
        const stack = behavior.objectStack;
        /** @type {Map<gdjs.RuntimeObject> */
        const objectSet = behavior.objectSet;
        if (objectSet.has(obj)) {
          // There should be only one occurrence, but check the whole array just in case.
          for (let index = stack.indexOf(obj); index >= 0; index = stack.indexOf(obj, index)) {
            stack.splice(index, 1);
          }
          objectSet.delete(obj);
        }
      }
    }
  });
}
runtimeScene.__allObjectStacks.add(behavior);
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.userFunc0xce8b40(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.userFunc0xce8b28 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

runtimeScene.__allObjectStacks.delete(behavior);

};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.userFunc0xce8b28(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.userFunc0xce8b08 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
/** @type {Map<gdjs.RuntimeObject> */
const objectSet = behavior.objectSet;
for (const element of elements) {
  if (!objectSet.has(element)) {
    stack.push(element);
    behavior.objectSet.add(element);
    runtimeScene.__objectStacks_allUsedObjects.add(element);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.userFunc0xce8b08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTop = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.AddOnTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.userFunc0xcea468 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");
const height = eventsFunctionContext.getArgument("Height");

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
/** @type {Map<gdjs.RuntimeObject> */
const objectSet = behavior.objectSet;
if (height < 0 || height > stack.length) {
  console.error(`Tried to insert in the stack at ${height} where the stack is ${stack.length} height.`);
  return;
}
for (const element of elements) {
  if (!objectSet.has(element)) {
    stack.splice(height, 0, element);
    objectSet.add(element);
    runtimeScene.__objectStacks_allUsedObjects.add(element);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.userFunc0xcea468(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Insert = function(Elements, Height, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.InsertContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.userFunc0xcea468 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
/** @type {Map<gdjs.RuntimeObject> */
const objectSet = behavior.objectSet;
for (const element of elements) {
  if (objectSet.has(element)) {
    // The top element is likely to be removed from the stack.
    // Make its removal O(1)
    if (element === stack[stack.length - 1]) {
      stack.pop();
    }
    else {
      const index = stack.indexOf(element);
      if (index >= 0) {
          stack.splice(index, 1);
      }
    }
    objectSet.delete(element);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.userFunc0xcea468(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Remove = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.RemoveContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.userFunc0xcea4a0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
/** @type {Map<gdjs.RuntimeObject> */
const objectSet = behavior.objectSet;

stack.length = 0;
objectSet.clear();
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.userFunc0xcea4a0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Clear = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ClearContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDStackObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.userFunc0xcea500 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
const stacks = eventsFunctionContext.getObjects("Stack");
const stackBehaviorName = eventsFunctionContext.getBehaviorName("StackBehavior");
let insertHeight = eventsFunctionContext.getArgument("Height");
const lowerBound = Math.max(0, eventsFunctionContext.getArgument("LowerBound"));
let upperBound = eventsFunctionContext.getArgument("UpperBound");

if (stacks && stacks.length > 0) {
  /** @type {gdjs.RuntimeObject[]} */
  const otherStack = stacks[0].getBehavior(stackBehaviorName).objectStack;
  /** @type {Map<gdjs.RuntimeObject> */
  const otherObjectSet = stacks[0].getBehavior(stackBehaviorName).objectSet;
  /** @type {gdjs.RuntimeObject[]} */
  const stack = behavior.objectStack;
  /** @type {Map<gdjs.RuntimeObject> */
  const objectSet = behavior.objectSet;
  if (insertHeight < 0 || insertHeight > stack.length) {
    console.error(`Tried to insert in the stack at ${insertHeight} where the stack is ${stack.length} height.`);
    return;
  }
  upperBound = Math.min(upperBound, otherStack.length - 1);
  for (let height = lowerBound; height <= upperBound; height++) {
    const insertedElement = otherStack[height];
    stack.splice(insertHeight, 0, insertedElement);
    objectSet.add(insertedElement);
    insertHeight++;
  }
  if (lowerBound <= upperBound) {
    for (let height = lowerBound; height <= upperBound; height++) {
      otherObjectSet.delete(otherStack[height]);
    }
    otherStack.splice(lowerBound, upperBound - lowerBound + 1);
  }
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.userFunc0xcea500(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveInto = function(Height, Stack, StackBehavior, LowerBound, UpperBound, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Height") return Height;
if (argName === "LowerBound") return LowerBound;
if (argName === "UpperBound") return UpperBound;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.GDStackObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveIntoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllIntoContext_9546GDStackObjects1Objects = Hashtable.newFrom({"Stack": gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1});
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Stack"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInto((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Height")) || 0 : 0), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllIntoContext_9546GDStackObjects1Objects, eventsFunctionContext.getBehaviorName("StackBehavior"), 0, (( gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("StackBehavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllInto = function(Height, Stack, StackBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.GDStackObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllIntoContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects2= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllOnTopContext_9546GDStackObjects1Objects = Hashtable.newFrom({"Stack": gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1});
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Stack"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveInto((gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectStack_9595_9595ObjectStack_9546ObjectStack_9546prototype_9546MoveAllOnTopContext_9546GDStackObjects1Objects, eventsFunctionContext.getBehaviorName("StackBehavior"), 0, (( gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("StackBehavior")).Height((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTop = function(Stack, StackBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Stack": Stack
},
  _objectArraysMap: {
"Object": thisObjectList
, "Stack": gdjs.objectsListsToArray(Stack)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "StackBehavior": StackBehavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.GDStackObjects2.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.MoveAllOnTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.userFunc0xcef898 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;

// Fisher–Yates shuffle
for (let i = stack.length - 1; i >= 1; i--) {
    // TODO use a seed
    const j = Math.floor(Math.random() * (i + 1));
    const swap = stack[i];
    stack[i] = stack[j]
    stack[j] = swap;
}
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.userFunc0xcef898(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Shuffle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.ShuffleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDElementsObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.userFunc0xcef860 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
const elements = eventsFunctionContext.getObjects("Elements");

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
eventsFunctionContext.returnValue = stack.indexOf(elements[0]);
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.userFunc0xcef860(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOf = function(Elements, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Elements": Elements
},
  _objectArraysMap: {
"Object": thisObjectList
, "Elements": gdjs.objectsListsToArray(Elements)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.GDElementsObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightOfContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.userFunc0xcef898 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
eventsFunctionContext.returnValue = stack.length;

};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.userFunc0xcef898(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.Height = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.HeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.userFunc0xcef898 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
const height = eventsFunctionContext.getArgument("Height");

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
eventsFunctionContext.returnValue = stack.length === height;
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.userFunc0xcef898(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeight = function(Height, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.CheckHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext = {};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1= [];


gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.userFunc0xcef898 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {gdjs.RuntimeObject[]} */
const stack = behavior.objectStack;
eventsFunctionContext.returnValue = stack.length === 0;
};
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.userFunc0xcef898(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmpty = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.IsEmptyContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ObjectStack::ObjectStack", gdjs.evtsExt__ObjectStack__ObjectStack.ObjectStack);
