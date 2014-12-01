Engine.IncludeModule("common-api");

var VOID = (function() {
var m = {};

// "local" global variables for stuffs that will need a unique ID
// Note that since order of loading is alphabetic, this means this file must go before any other file using them.
m.playerGlobals = [];

m.VoidBot = function VoidBot(settings)
{
	API3.BaseAI.call(this, settings);

	this.turn = 0;
	this.playedTurn = 0;
	this.elapsedTime = 0;

	//this.Config = new m.Config();
	//this.Config.updateDifficulty(settings.difficulty);	
	//this.Config.personality = settings.personality;	

	this.savedEvents = {};
};

m.VoidBot.prototype = new API3.BaseAI();

m.VoidBot.prototype.CustomInit = function(gameState, sharedScript)
{
};

m.VoidBot.prototype.OnUpdate = function(sharedScript)
{
	
	this.turn++;
};


/*m.VoidBot.prototype.Deserialize = function(data, sharedScript)
{
};

// Override the default serializer
VoidBot.prototype.Serialize = function()
{
	return {};
};*/

return m;
}());
