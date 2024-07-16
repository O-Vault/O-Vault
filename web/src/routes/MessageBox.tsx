import { ipcRenderer } from "@/common/ipcRenderer";
import { Button, Stack } from "@mui/joy";
import { useEffect } from "react";

export type MessageBoxReturnCode = 'OK' | 'CANCELLED';

export interface MessageBoxResult {
    returnCode: MessageBoxReturnCode
}

export interface MessageBoxArgs {
    text: string,
    title: string,
    okBtnLabel: string,
    cancelBtnLabel: string
}

export function MessageBox() {

    const args = window.modalArgs as MessageBoxArgs;
    const ok = () => {

        ipcRenderer.closeMessageBox('OK');
    };

    const cancel = () => {

        ipcRenderer.closeMessageBox('CANCELLED');
    };

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            ipcRenderer.closeMessageBox('CANCELLED');
        }
    };

    useEffect(() => {

        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, []);

    return (
        <div className="flex flex-col h-full justify-center items-center" >
            <div className="grow my-5 mx-5  flex justify-center items-center"
                style={{ whiteSpace: 'pre-line' }}>
                {args.text}
            </div>
            <Stack className="mx-5 mb-4" direction="row"  >
                <Button color="neutral" style={{ marginRight: '10px', width: '100px' }}
                    onClick={cancel} size="md"
                    variant="solid">{args.cancelBtnLabel}</Button>
                <Button color="primary" style={{ marginLeft: '10px', width: '100px' }}
                    onClick={ok} size="md"
                    variant="solid">{args.okBtnLabel}</Button>
            </Stack>
        </div>

    );
}