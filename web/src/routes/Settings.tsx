import { PageHeader } from "@/components/PageHeader";
import { Select, Typography, Option, useColorScheme, Button, Stack, useTheme } from "@mui/joy";
import { Slider } from "@mui/joy";
import { useEffect, useState } from "react";
import { ipcRenderer } from "@/common/ipcRenderer";

export function Settings() {

  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [currentFactor, setCurrentFactor] = useState(1.0);
  const [resettingToDefault, setResettingToDefault] = useState(false);
  const [display, setDisplay] = useState(localStorage.getItem('display') || 'normal');
  const { mode, setMode } = useColorScheme();
  async function retrieveZoomFactor() {

    const newVal = await ipcRenderer.appRetrieveZoomFactor();
    setCurrentFactor(newVal);

  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      ipcRenderer.closeMessageBox('CANCELLED');
    }
  };

  useEffect(() => {

    retrieveZoomFactor();
    setLoaded(true);
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, []);

  const onZoomChanged = (_e: Event, value: number) => {

    setCurrentFactor(value);
    ipcRenderer.appChangeZoomFactor(value);

  };

  const resetToDefault = () => {
    setResettingToDefault(true);
    ipcRenderer.appChangeZoomFactor(1.0);
    localStorage.clear();
    location.reload();
  };

  const changeDisplay = (newValue: string) => {
    setDisplay(newValue);
    localStorage.setItem('display', newValue);
  };

  const close = () => {

    if (window.isModalWindow) {
      localStorage.setItem('settings-posx', window.screenX.toString());
      localStorage.setItem('settings-posy', window.screenY.toString());
    }
    window.close();
  };

  return (

    loaded && <div id="settings" className="pt-5 px-5" style={{ background: theme.palette.background.body }}>

      <PageHeader displayBackButton={false}>Settings</PageHeader>

      <Typography level="h3" sx={{ paddingBottom: 2 }} className="py-6" >
        User Interface
      </Typography>

      <div className="px-4 py-6 flex flex-col ">
        <Typography level="h4" >
          Zoom Level
        </Typography>
        <div className=" w-full flex flex-col items-center">
          <Slider
            onChange={onZoomChanged}
            sx={{ width: '90%' }}
            value={currentFactor}
            step={0.05}
            marks={[
              { value: 0.9, label: '90%' },
              { value: 0.95, label: '95%' },
              { value: 1.0, label: '100%' },
              { value: 1.05, label: '105%' },
              { value: 1.1, label: '110%' },
            ]}
            min={0.9}
            max={1.1}
          />
        </div>
      </div>
      <div className="px-4 py-6 flex flex-col">
        <Typography level="h4" >
          Theme
        </Typography>

        <Select className="my-4 w-full" placeholder="Choose one…" defaultValue={mode} onChange={(_, newValue) => setMode(newValue)}>
          <Option value="dark">Dark</Option>
          <Option value="light">Light</Option>
        </Select>
      </div>
      <div className="px-4 py-2 flex flex-col">
        <Typography level="h4" >
          Preferences
        </Typography>

        <div className="py-6 w-full flex flex-col">
          <Button variant="solid" disabled={resettingToDefault} color="primary" onClick={resetToDefault} >RESET TO DEFAULT</Button>
        </div>
      </div>
      <div className="px-4 py-6 flex flex-col">
        <Typography level="h4" >
          Display
        </Typography>

        <Select className="my-4 w-full" placeholder="Choose one…" defaultValue={display} onChange={(_, newValue) => changeDisplay(newValue)}>
          <Option value="normal">Normal</Option>
          <Option value="compact">Compact</Option>
          <Option value="minimalist">Minimalist</Option>
        </Select>

        <Stack direction="row" spacing={2} justifyContent="center" className="pt-4"
          alignItems="stretch">
          <Button color="neutral" size="lg" variant="solid" onClick={() => close()} >CLOSE</Button>
        </Stack>
      </div>
    </div>


  );
}
