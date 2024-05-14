import * as vscode from 'vscode';
import { debugInTermial, runInTerminalv2 } from './run';

export class RunVitestCommand implements vscode.Command {
    static ID = 'vitest.runTest';
    title = 'Run(Vitest)';
    command = RunVitestCommand.ID;
    arguments?: [string, string];

    constructor(text: string, filename: string) {
        this.arguments = [text, filename];
    }
}

export class DebugVitestCommand implements vscode.Command {
    static ID = 'vitest.debugTest';
    title = 'Debug(Vitest)';
    command = DebugVitestCommand.ID;
    arguments?: [string, string];

    constructor(text: string, filename: string) {
        this.arguments = [text, filename];
    }
}

vscode.commands.registerCommand(
    RunVitestCommand.ID,
    (text: string, filename: string) => {
        runInTerminalv2(text, filename);
    }
);

vscode.commands.registerCommand(
    DebugVitestCommand.ID,
    (text: string, filename: string) => {
        debugInTermial(text, filename);
    }
);
