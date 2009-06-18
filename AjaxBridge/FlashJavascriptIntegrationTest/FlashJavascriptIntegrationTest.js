/**
 * WARNING! THIS IS A GENERATED FILE, AND WILL BE RE-GENERATED EACH TIME THE
 * AJAXBRIDGE IS RUN.
 *
 * You should keep your javascript code inside this file as light as possible, 
 * and rather keep the body of your Ajax application in separate *.js files. 
 *
 * Do make a backup of your changes, before re-generating this file (AjaxBridge 
 * will display a warning message to you).
 *
 * Please refer to the built-in documentation inside the AjaxBridge application 
 * for help on using this file.
 */
 
 
/**
 * Application "FlashJavascriptIntegrationTest.mxml"
 */

/**
 * The "FlashJavascriptIntegrationTest" javascript namespace. All the functions/variables you
 * have selected under the "FlashJavascriptIntegrationTest.mxml" in the tree will be
 * available as static members of this namespace object.
 */
FlashJavascriptIntegrationTest = {};


/**
 * Listen for the instantiation of the Flex application over the bridge
 */
FABridge.addInitializationCallback("b_FlashJavascriptIntegrationTest", FlashJavascriptIntegrationTestReady);


/**
 * Hook here all the code that must run as soon as the "FlashJavascriptIntegrationTest" class
 * finishes its instantiation over the bridge.
 *
 * For basic tasks, such as running a Flex method on the click of a javascript
 * button, chances are that both Ajax and Flex may well have loaded before the 
 * user actually clicks the button.
 *
 * However, using the "FlashJavascriptIntegrationTestReady()" is the safest way, as it will 
 * let Ajax know that involved Flex classes are available for use.
 */
function FlashJavascriptIntegrationTestReady() {

	// Initialize the "root" object. This represents the actual 
	// "FlashJavascriptIntegrationTest.mxml" flex application.
	b_FlashJavascriptIntegrationTest_root = FABridge["b_FlashJavascriptIntegrationTest"].root();
	

	// Global variables in the "FlashJavascriptIntegrationTest.mxml" application (converted 
	// to getters and setters)

	// Global functions in the "FlashJavascriptIntegrationTest.mxml" application

	FlashJavascriptIntegrationTest.actionScriptFunction = function(arg) {
		b_FlashJavascriptIntegrationTest_root.actionScriptFunction(arg);
	};

}
