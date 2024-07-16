/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Select, Typography, Option, Button, Stack } from "@mui/joy";
import { useState } from "react";

export function Design() {

    const [level, setLevel] = useState<any>('body-md');
    const [variant, setVariant] = useState<any>('plain');
    const [color, setColor] = useState<any>('neutral');

    return (
        <div style={{ width: '90%' }} className="flex  flex-col px-6 py-6">

                    
            <div className="py-2 inline-block">
                <Typography level="h2" variant="plain" color="primary">Levels</Typography>
                <Typography level="h1" variant="plain" color="neutral">Typography h1</Typography>
                <Typography level="h2" variant="plain" color="neutral">Typography h2</Typography>
                <Typography level="h3" variant="plain" color="neutral">Typography h3</Typography>
                <Typography level="h4" variant="plain" color="neutral">Typography h4</Typography>
                <Typography level="body-lg" variant="plain" color="neutral">body-lg</Typography>
                <Typography level="body-md" variant="plain" color="neutral">Typography body-md</Typography>
                <Typography level="body-sm" variant="plain" color="neutral">Typography body-sm</Typography>
                <Typography level="body-xs" variant="plain" color="neutral">Typography body-xs</Typography>
            </div>
            <Divider sx={{ marginTop: 2 }} />
            <div className="py-2 inline-block">
                <Typography level="h2" variant="plain" color="primary" sx={{ paddingBottom: 1 }}>Colors</Typography>
                <Typography level="body-md" variant="plain" color="primary">primary</Typography>
                <Typography level="body-md" variant="plain" color="neutral">neutral</Typography>
                <Typography level="body-md" variant="plain" color="danger">danger</Typography>
                <Typography level="body-md" variant="plain" color="success">success</Typography>
                <Typography level="body-md" variant="plain" color="warning">warning</Typography>
            </div>
            <Divider sx={{ marginTop: 2 }} />
            <div className="py-2 inline-block" >
                <Typography level="h2" variant="plain" color="primary" sx={{ paddingBottom: 1 }} >Variants</Typography>
                <Typography level="body-md" variant="plain" color="primary" sx={{ marginBottom: 2 }}>plain</Typography>
                <Typography level="body-md" variant="outlined" color="primary" sx={{ marginBottom: 2 }}>outlined</Typography>
                <Typography level="body-md" variant="soft" color="primary" sx={{ marginBottom: 2 }}>soft</Typography>
                <Typography level="body-md" variant="solid" color="primary" sx={{ marginBottom: 2 }}>solid</Typography>
            </div>
            <Divider sx={{ marginTop: 2 }} />
            <div className="py-2 inline-block" >
                <Typography level="h2" variant="plain" color="primary" sx={{ paddingBottom: 2 }}>Typo Tester</Typography>

                <Typography level={level} variant={variant} color={color}>
                    His dog barks loudly
                </Typography>

                <div className="flex flex-row w-full pt-5">
                    <Select className="grow" value={variant} onChange={(_e, newValue) => setVariant(newValue)}>
                        <Option value={"plain"} >plain</Option>
                        <Option value={"outlined"} >outlined</Option>
                        <Option value={"soft"}>soft</Option>
                        <Option value={"solid"} >solid</Option>
                    </Select>
                    <Select className="ml-2 grow" value={color} onChange={(_e, newValue) => setColor(newValue)}>
                        <Option value={"primary"} >primary</Option>
                        <Option value={"neutral"} >neutral</Option>
                        <Option value={"danger"}>danger</Option>
                        <Option value={"success"} >success</Option>
                        <Option value={"warning"} >warning</Option>
                    </Select>
                </div>
                <div className="flex flex-row w-full pt-2">
                    <Select className="grow" value={level} onChange={(_e, newValue) => setLevel(newValue)}>
                        <Option value={"h1"} >h1</Option>
                        <Option value={"h2"} >h2</Option>
                        <Option value={"h3"}>h3</Option>
                        <Option value={"h4"} >h4</Option>
                        <Option value={"body-lg"} >body-lg</Option>
                        <Option value={"body-md"} >body-md</Option>
                        <Option value={"body-sm"} >body-sm</Option>
                        <Option value={"body-xs"} >body-xs</Option>
                    </Select>
                </div>
            </div>
            <Divider sx={{ marginTop: 2 }} />
            <div>
                <Typography level="h2" variant="plain" color="primary" >Buttons</Typography>
                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} className="py-2">
                    <Button size="sm" variant="plain">plain</Button>
                    <Button size="md" variant="plain" sx={{ marginX: 2 }}>plain</Button>
                    <Button size="lg" variant="plain">plain</Button>
                </Stack>
                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} className="py-2" >
                    <Button size="sm" variant="outlined">outlined</Button>
                    <Button size="md" variant="outlined" sx={{ marginX: 2 }}>outlined</Button>
                    <Button size="lg" variant="outlined">out...</Button>
                </Stack>
                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} className="py-2" >
                    <Button size="sm" variant="soft">soft</Button>
                    <Button size="md" variant="soft" sx={{ marginX: 2 }}>soft</Button>
                    <Button size="lg" variant="soft">soft</Button>
                </Stack>
                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} className="py-2">
                    <Button size="sm" variant="solid">solid</Button>
                    <Button size="md" variant="solid" sx={{ marginX: 2 }}>solid</Button>
                    <Button size="lg" variant="solid">solid</Button>
                </Stack>
            </div>
        </div>

    );
}