import {DockitEventHandler} from "./DockitEventHandler";
import {SetupCommand} from "./SetupCommand";
import {RunCommands} from "./RunCommands";
import {DockitResource} from "./DockitResource";

export interface DockitApp {

    start();

    stop();

    registerDockitEventHandler(handler:DockitEventHandler);

    setupCommands(setupCommands:SetupCommand[]);

    runCommands(runCommands:RunCommands[])

    attachResource(resource:DockitResource);

    onStart(handler:DockitEventHandler);

    onStop(handler:DockitEventHandler);

}