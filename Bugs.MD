<!-- BUG FIXES IN Smart Home Component | Smart Light -->

### BUG FIX 1: MODULE IMPORTS PATH
## Issue
Application UI failed to load with 404 errors for JavaScript files. The "Click to Begin" button had no functionality.

## Root Cause
Incorrect import paths in `main.js`:
*javascript*
// Wrong paths
*import Light from './ts/basicSettings';*
*import AdvanceSettings from './ts/advanceSettings';*

## Fix Solution
// Corrected paths
*import Light from './basicSettings.js';*
*import AdvanceSettings from './advanceSettings.js';*


### BUG FIX 2 : ERRORS IN MAIN.TS 
## Issue (Import Paths)
In "main.ts" *line 4 and 5*, there's an error response "Cannot find module './ts/advanceSettings' or its corresponding type declarations"

## Root Cause
Unnecessary `./ts/` prefix in import paths
## Fix/Solution
*typescript*
 // Before
*import Light from './ts/basicSettings';*
*import AdvanceSettings from './ts/advanceSettings';*

// After
*import Light from './basicSettings';*
*import AdvanceSettings from './advanceSettings';*

## CODE IMPROVEMENT IN MAIN.TS
1. Added proper TypeScript types for all variables and elements
2. Used type assertions (as HTMLElement) where appropriate
3. Generic query selectors (querySelector<HTMLButtonElement>)
## TYPESRCIPT TYPE CONVERSION ERROR
## Issue
 I got an error when passing slider.value to a method expecting a number.

## Root Cause
 HTMLInputElement.value is always a string, even for type="range".

## Fix: Convert it using Number(slider.value) 



### BUG FIX 3: ERROR FIXES IN GENERAL.TS
1. Double array brackets on line 9 - *SUCCESFULLY FIXED*
2. Added Interfaces for data structuring - *SUCESSFULLY ADDED*
3. Updated/Added Types For Class Propertes - *SUCCESSFULLY ADDED*
4. Defined a proper type for class "General" - *SUCCESSFULLY ADDED*
5. Added a guard clause to "getSelectedComponentName" to avoid runtime crashes -  *SUCCESSFULLY ADDED*
6. A null check is added to handle the case where the DOM traversal fails - *SUCCESSFULLY ADDED*
7. This method uses `insertAdjacentHTML` to efficiently insert raw HTML markup
 * without replacing the entire contents of the container. -*SUCCESSFULLY ADDED*
8. Added a "string" data type to "notification"function - *SUCCESSFULLY ADDED*
9. Added proper TypeScript types for parameters and return values for "displayNotification", "removeNotification" and "selector"
10. DOM element types specified (HTMLButtonElement)

### BUG FIX 4: ERRORS FIXES IN BASICSETTINGS.TS
1. Added proper TypeScript types for all parameters and return values
2. Used specific DOM types (HTMLImageElement, HTMLInputElement)
3. Added null checks for DOM operations
4. Removed duplicate type check in handleLightIntensitySlider


### BUG FIX 5:  SLIDER TARGET VALUE BUG 
## Issue  
The target value of the selected slider in `main.ts` (line 59) was being used as a string instead of a number, causing issues in light intensity handling.

## Root Cause  
In JavaScript/TypeScript, `HTMLInputElement.value` always returns a string — even for input types like `range`. Passing this directly to methods expecting a number leads to unintended behavior or runtime type issues in TypeScript.

## Fix Solution  
Use the **unary plus operator (`+`)** to convert `slider.value` from a string to a number before passing it into the intensity handler function.t.


### BUG FIX 6: LIGHT INTENSITY CONDITION BUG
## Issue
In basicSettings.ts (line 93),The light component's `isLightOn` property was being incorrectly set to `false`, even when `intensity > 0`. This caused the UI to reflect the bulb as "off" despite having a visible intensity.

## Root Cause
In `handleLightIntensitySlider()` (inside `basicSettings.ts` or `Light` class), the light was only toggled **off** when `intensity === 0`, but did not handle setting it **on** correctly for other cases. The value of `componentData.isLightOn` was not reliably updated based on intensity.

## Fix Solution
Update the conditional logic to explicitly set `componentData.isLightOn = true` when `intensity > 0`.


### BUG FIX 7: ROOM LIGHT ON & OFF BUG
## Issue
The room bulb does not toggle correctly between ON and OFF when triggered.

## Root Cause
This is directly caused by the faulty isLightOn logic addressed in Bug Fix 6.

## Fix Solution
Fixing the condition to check intensity > 0 automatically corrects the bulb’s ON/OFF toggle behavior.


### BUG FIX 8: CUSTOMIZE AUTOMATIC PRESET
## Issue
In advanceSettings.ts lines 162, the !! (double bang) operator is used in conditional checks inside customizeAutomaticOnPreset and customizeAutomaticOffPreset. This causes the condition to always return a boolean (true or false), which prevents the toggle logic from executing correctly.

## Root Cause
The use of !! evaluates to a truthy boolean, so the condition inside the if block always returns early, preventing light toggling.

## Fix Solution
Used a single ! (bang) to correctly evaluate the negation logic.

 