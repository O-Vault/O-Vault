import { RadioGroup, Box, radioClasses, Radio } from "@mui/joy";
import { Dispatch } from "react";

export type ProtectionType = 'passphrase' | 'password';

export interface ProtectionTypeParams {
    protectionType: ProtectionType,
    setProtectionType: Dispatch<React.SetStateAction<ProtectionType>>,
    // eslint-disable-next-line no-unused-vars
    onChange?: (newValue: string) => void
}

export function ProtectionTypeSelector({ protectionType, setProtectionType, onChange }: ProtectionTypeParams) {
    return (
        <RadioGroup
            orientation="horizontal"
            aria-label="Protection Type"
            name="protectionType"
            variant="outlined"
            value={protectionType}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setProtectionType(event.target.value as ProtectionType);
                if (onChange){
                    onChange(event.target.value);
                }
            }
            }>
            {['passphrase', 'password'].map((item) => (
                <Box
                    key={item}
                    sx={(theme) => ({
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                        height: 34,
                        '&:not([data-first-child])': {
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        },
                        [`&[data-first-child] .${radioClasses.action}`]: {
                            borderTopLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
                            borderBottomLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
                        },
                        [`&[data-last-child] .${radioClasses.action}`]: {
                            borderTopRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
                            borderBottomRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
                        },
                    })}
                >
                    <Radio
                        value={item}
                        disableIcon
                        overlay
                        label={
                            {
                                passphrase: 'Passphrase',
                                password: 'Password',
                            }[item]
                        }
                        variant={protectionType === item ? 'solid' : 'plain'}
                        slotProps={{
                            input: { 'aria-label': item },
                            action: {
                                sx: { borderRadius: 0, transition: 'none' },
                            },
                            label: { sx: { lineHeight: 0 } },
                        }}
                    />
                </Box>
            ))}
        </RadioGroup>
    );
}