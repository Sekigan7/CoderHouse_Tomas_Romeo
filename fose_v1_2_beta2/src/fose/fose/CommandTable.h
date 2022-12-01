#pragma once

#include <vector>

/**** base opcodes
 *	
 *	10	begin
 *	11	end
 *	12	short		int
 *	13	long
 *	14	float
 *	15	set
 *	16	if
 *	17	else
 *	18	elseif
 *	19	endif
 *	1A	while_DEPRECATED
 *	1B	endwhile_DEPRECATED
 *	1C	.			(dot operator)
 *	1D	scriptname	scn
 *	1E	return
 *	1F	reference	ref
 *	
 ***/

enum ParamType
{
	kParamType_String =					0x00,
	kParamType_Integer =				0x01,
	kParamType_Float =					0x02,
	kParamType_InventoryObject =		0x03,	// GetItemCount				TESForm *, must pass IsInventoryObjectType check
	kParamType_ObjectRef =				0x04,	// Activate					TESObjectREFR *
	kParamType_ActorValue =				0x05,	// ModActorValue			not in switch
	kParamType_Actor =					0x06,	// ToggleAI					TESObjectREFR *, must pass IsActor
	kParamType_SpellItem =				0x07,	// AddSpell					TESForm *, must be either SpellItem or book
	kParamType_Axis =					0x08,	// Rotate					not in switch (X Y Z, passed as char)
	kParamType_Cell =					0x09,	// GetInCell				TESObjectCELL *, must pass sub_4C0780
	kParamType_AnimationGroup =			0x0A,	// PlayGroup				not in switch
	kParamType_MagicItem =				0x0B,	// Cast						MagicItem *
	kParamType_Sound =					0x0C,	// Sound					TESForm *, kFormType_Sound
	kParamType_Topic =					0x0D,	// Say						TESForm *, kFormType_Dialog
	kParamType_Quest =					0x0E,	// ShowQuestVars			TESForm *, kFormType_Quest
	kParamType_Race =					0x0F,	// GetIsRace				TESForm *, kFormType_Race
	kParamType_Class =					0x10,	// GetIsClass				TESForm *, kFormType_Class
	kParamType_Faction =				0x11,	// Faction					TESForm *, kFormType_Faction
	kParamType_Sex =					0x12,	// GetIsSex					not in switch
	kParamType_Global =					0x13,	// GetGlobalValue			TESForm *, kFormType_Global
	kParamType_Furniture =				0x14,	// IsCurrentFurnitureObj	TESForm *, kFormType_Furniture
	kParamType_TESObject =				0x15,	// PlaceAtMe				TESObject *
	kParamType_VariableName =			0x16,	// GetQuestVariable			not in switch
	kParamType_QuestStage =				0x17,	// SetStage					handled like integer
	kParamType_MapMarker =				0x18,	// ShowMap					TESObjectREFR *, base form must be dword_AF36F8
	kParamType_ActorBase =				0x19,	// SetEssential				TESActorBase *
	kParamType_Container =				0x1A,	// RemoveMe					TESObjectREFR *, must pass TESObjectREFR_GetContainer
	kParamType_WorldSpace =				0x1B,	// CenterOnWorld			TESWorldSpace *
	kParamType_CrimeType =				0x1C,	// GetCrimeKnown			not in switch
	kParamType_AIPackage =				0x1D,	// GetIsCurrentPackage		TESPackage *
	kParamType_CombatStyle =			0x1E,	// SetCombatStyle			TESCombatStyle *
	kParamType_MagicEffect =			0x1F,	// HasMagicEffect			EffectSetting *
	kParamType_FormType =				0x20,	// GetIsUsedItemType		FormType (not all types supported)
	kParamType_WeatherID =				0x21,	// GetIsCurrentWeather		TESForm *, kFormType_Weather
	kParamType_NPC =					0x22,	// unused
	kParamType_Owner =					0x23,	// IsOwner					TESForm *, kFormType_NPC or kFormType_Faction
	kParamType_EffectShader =			0x24,	// PlayMagicShaderVisuals		TESForm *, kFormType_EffectShader
	kParamType_FormList	=				0x25,	// IsInList
	kParamType_MenuIcon =				0x26,	// unused
	kParamType_Perk =					0x27,	// Add Perk	
	kParamType_Note =					0x28,	// Add Note
	kParamType_MiscellaneousStat =		0x29,	// ModPCMiscStat
	kParamType_IdleForm =				0x30,	// IsLastIdlePlayed
	kParamType_Message =				0x31,	// ShowTutorialMenu
	kParamType_InvObjOrFormList =		0x32,	// AddItem
	kParamType_Alignment =				0x33,	// GetIsAlignment
	kParamType_EquipType =				0x34,	// GetIsUsedEquipType
	kParamType_NonInvObjOrFormList =	0x35,	// GetIsUsedItem
	kParamType_Music =					0x36,	// PlayMusic
	kParamType_CriticalStage =			0x37,	// SetCriticalStage

	// added for dlc (1.1)
	kParamType_LeveledOrBaseChar =		0x38,	// AddNPCToLeveledList
	kParamType_LeveledOrBaseCreature =	0x39,	// AddCreatureToLeveledList
	kParamType_LeveledChar =			0x3A,	// AddNPCToLeveledList
	kParamType_LeveledCreature =		0x3B,	// AddCreatureToLeveledList
	kParamType_LeveledItem =			0x3C,	// AddItemToLeveledList
	kParamType_AnyForm =				0x3D,	// AddFormToFormList
};

struct ParamInfo
{
	const char	* typeStr;
	UInt32		typeID;		// ParamType
	UInt32		isOptional;	// do other bits do things?
};

struct ScriptEventList;
class TESObjectREFR;
class Script;
class TESForm;

#define COMMAND_ARGS	ParamInfo * paramInfo, void * arg1, TESObjectREFR * thisObj, TESObjectREFR * containingObj, Script * scriptObj, ScriptEventList * eventList, double * result, UInt32 * opcodeOffsetPtr
#define PASS_COMMAND_ARGS paramInfo, arg1, thisObj, containingObj, scriptObj, eventList, result, opcodeOffsetPtr
#define EXTRACT_ARGS	paramInfo, arg1, opcodeOffsetPtr, thisObj, containingObj, scriptObj, eventList
//args passed to EVAL version of command (arg1 and arg2 types vary based on ParamInfo)
#define COMMAND_ARGS_EVAL TESObjectREFR * thisObj, void * arg1, void * arg2, double * result

//Macro to make CommandInfo definitions a bit less tedious

#define DEFINE_CMD_FULL(name, altName, description, refRequired, numParams, paramInfo, parser) \
	extern bool Cmd_ ## name ## _Execute(COMMAND_ARGS); \
	static CommandInfo (kCommandInfo_ ## name) = { \
	#name, \
	#altName, \
	0, \
	#description, \
	refRequired, \
	numParams, \
	paramInfo, \
	HANDLER(Cmd_ ## name ## _Execute), \
	parser, \
	NULL, \
	0 \
	};

#define DEFINE_CMD_ALT(name, altName, description, refRequired, numParams, paramInfo) \
	DEFINE_CMD_FULL(name, altName, description, refRequired, numParams, paramInfo, Cmd_Default_Parse)	

#define DEFINE_COMMAND(name, description, refRequired, numParams, paramInfo) \
	DEFINE_CMD_FULL(name, , description, refRequired, numParams, paramInfo, Cmd_Default_Parse)	

#define DEFINE_COMMAND_PLUGIN(name, description, refRequired, numParams, paramInfo) \
	DEFINE_CMD_FULL(name, , description, refRequired, numParams, paramInfo, NULL)

// for commands which can be used as conditionals
#define DEFINE_CMD_COND(name, description, refRequired, paramInfo) \
	extern bool Cmd_ ## name ## _Execute(COMMAND_ARGS); \
	extern bool Cmd_ ## name ## _Eval(COMMAND_ARGS_EVAL); \
	static CommandInfo (kCommandInfo_ ## name) = { \
	#name,	\
	"",		\
	0,		\
	#description,	\
	refRequired,	\
	(sizeof(paramInfo) / sizeof(ParamInfo)),	\
	paramInfo,	\
	HANDLER(Cmd_ ## name ## _Execute),	\
	Cmd_Default_Parse,	\
	HANDLER_EVAL(Cmd_ ## name ## _Eval),	\
	1	\
	};

typedef bool (* Cmd_Execute)(COMMAND_ARGS);
bool Cmd_Default_Execute(COMMAND_ARGS);

typedef bool (* Cmd_Parse)(UInt32 arg0, UInt32 arg1, UInt32 arg2, UInt32 arg3);
bool Cmd_Default_Parse(UInt32 arg0, UInt32 arg1, UInt32 arg2, UInt32 arg3);

typedef bool (* Cmd_Eval)(TESObjectREFR * thisObj, void * arg1, void * arg2, double * result);
bool Cmd_Default_Eval(COMMAND_ARGS_EVAL);

#ifdef RUNTIME
#define HANDLER(x)	x
#define HANDLER_EVAL(x)	x
#else
#define HANDLER(x)	Cmd_Default_Execute
#define HANDLER_EVAL(x)	Cmd_Default_Eval
#endif

// unk3 args:
// TESObjectREFR * thisObj
// TESForm * param
// TESForm * param2
// double * result

struct CommandInfo
{
	const char	* longName;		// 00
	const char	* shortName;	// 04
	UInt32		opcode;			// 08
	const char	* helpText;		// 0C
	UInt16		needsParent;	// 10
	UInt16		numParams;		// 12
	ParamInfo	* params;		// 14

	// handlers
	Cmd_Execute	execute;		// 18
	Cmd_Parse	parse;			// 1C
	Cmd_Eval	eval;			// 20 - smaller version of Cmd_Execute with arg extracted already, used for dialog condition evaluation

	UInt32		flags;			// 24
	
	void	DumpFunctionDef() const;
	void	DumpDocs() const;
};

const UInt32 kFoseOpCodeStart = 0x1400;

class CommandTable
{
public:
	CommandTable();
	~CommandTable();

	static void	Init(void);

	void	Read(CommandInfo * start, CommandInfo * end);
	void	Add(CommandInfo * info);
	void	PadTo(UInt32 id, CommandInfo * info = NULL);

	void	SetBaseID(UInt32 id)	{ m_baseID = id; m_curID = id; }

	void	Dump(void);

	CommandInfo *	GetStart(void);
	CommandInfo *	GetEnd(void);

	CommandInfo *	GetByName(const char * name);

	UInt32	GetMaxID(void)		{ return m_baseID + m_commands.size(); }
	void	SetCurID(UInt32 id)	{ m_curID = id; }
	UInt32	GetCurID(void)		{ return m_curID; }

	void	DumpAlternateCommandNames(void);
	void	DumpCommandDocumentation(UInt32 startWithID = kFoseOpCodeStart);

private:
	typedef std::vector <CommandInfo>	CommandList;
	CommandList	m_commands;

	UInt32		m_baseID;
	UInt32		m_curID;
};

extern CommandTable	g_consoleCommands;
extern CommandTable	g_scriptCommands;
