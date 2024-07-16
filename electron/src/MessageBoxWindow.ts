import { BrowserWindow } from "electron";

export interface MessageBoxArgs {
    text: string,
    title: string,
    okBtnLabel: string,
    cancelBtnLabel: string
}
export type MessageBoxReturnCode = 'OK' | 'CANCELLED';

export interface MessageBoxResult {
    returnCode: MessageBoxReturnCode
}
export class MessageBoxWindow extends BrowserWindow {
    modalResult?: MessageBoxResult;
}