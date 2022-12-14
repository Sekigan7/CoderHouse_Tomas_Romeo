#pragma once

#include "PluginAPI.h"

extern FOSESerializationInterface	g_FOSESerializationInterface;

namespace Serialization
{

// plugin API
void	SetSaveCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);
void	SetLoadCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);
void	SetNewGameCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);

bool	WriteRecord(UInt32 type, UInt32 version, const void * buf, UInt32 length);
bool	OpenRecord(UInt32 type, UInt32 version);
bool	WriteRecordData(const void * buf, UInt32 length);

bool	GetNextRecordInfo(UInt32 * type, UInt32 * version, UInt32 * length);
UInt32	ReadRecordData(void * buf, UInt32 length);

bool	ResolveRefID(UInt32 refID, UInt32 * outRefID);

// internal event handlers
void	HandleSaveGame(const char * path);
void	HandleLoadGame(const char * path);
void	HandleDeleteGame(const char * path);
void	HandleRenameGame(const char * oldPath, const char * newPath);
void	HandleNewGame(void);

void	InternalSetSaveCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);
void	InternalSetLoadCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);
void	InternalSetNewGameCallback(PluginHandle plugin, FOSESerializationInterface::EventCallback callback);

}
