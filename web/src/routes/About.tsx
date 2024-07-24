import { AppLogoWithText } from "@/components/AppLogoWithText";
import { IconGithub } from "@/icons/IconGithub";
import { IconWebsite } from "@/icons/IconWebsite";
import { useColorScheme, useTheme } from "@mui/joy";


export function About() {

  const colorScheme = useColorScheme();
  const theme = useTheme();

  const getNodeVersion = () => {

    return (window.electronAPI.nodeVersion.charAt(0) === 'v') ? window.electronAPI.nodeVersion.substring(1)
      : window.electronAPI.nodeVersion;
  };

  const getUserAgentVersion = (app: string) => {

    const _app = app + '/';
    if (navigator.userAgent.indexOf(_app) < 0) {
      return 'unknown';
    }
    const str = navigator.userAgent.substring(navigator.userAgent.indexOf(_app) + _app.length);
    if (str.indexOf(' ') < 0) {
      return str;
    }
    return str.substring(0, str.indexOf(' '));
  };

  return (
    <div id="about" className="py-5 px-5 flex flex-col h-full items-center">

      <div className="grow flex flex-col  items-center w-full" >

        <div className="grow text-center pb-3 pt-2">
          Thank you for using
        </div>
        <div className="flex flex-col items-center">
          <AppLogoWithText style={{ width: '256px', height: '60px' }} dark={colorScheme.mode !== 'light'} />
        </div>
        <div className="grow text-center pb-5  pt-5">
          <div>To report a Bug or request an Enhancement, please</div>
          <a href="https://github.com/O-Vault/O-Vault/issues"
            title="https://github.com/O-Vault/O-Vault/issues"
            target="_blank" style={{ color: theme.palette.primary[500] }} className="pt-2 inline-block">Create an Issue</a>
        </div>
        <div className="grow text-center pb-5">
          <div>For a Security Issue, please responsibly disclose your findings in the section </div>
          <a
            href="https://github.com/O-Vault/O-Vault/security"
            title="https://github.com/O-Vault/O-Vault/security"
            target="_blank" style={{ color: theme.palette.primary[500] }} className="pt-2 inline-block">Security</a>
        </div>
        <div className="grow text-center pb-3">
          <div>For any other topic, please share with the community in the section </div>
          <a href="https://github.com/O-Vault/O-Vault/discussions"
            title="https://github.com/O-Vault/O-Vault/discussions"
            target="_blank" style={{ color: theme.palette.primary[500] }} className="pt-2 inline-block">Discussions</a>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/2 py-2 ">

          <div className="flex flex-row py-1">
            <div className="w-full text-center  pb-2">VERSIONS</div>
          </div>

          <div className="flex flex-row py-1 text-sm">
            <div className="pr-2  w-1/2 text-right">O-Vault:</div>
            <div className="w-1/2">{window.electronAPI.appVersion}</div>
          </div>

          <div className="flex flex-row py-1 text-sm">
            <div className="pr-2 w-1/2 text-right">Chromium:</div>
            <div className="w-1/2">{getUserAgentVersion('Chrome')}</div>
          </div>

          <div className="flex flex-row py-1 text-sm">
            <div className="pr-2 w-1/2 text-right">Electron: </div>
            <div className="w-1/2">{getUserAgentVersion('Electron')}</div>
          </div>

          <div className="flex flex-row py-1 text-sm">
            <div className="pr-2 w-1/2 text-right">Node:</div>
            <div className="w-1/2">{getNodeVersion()}</div>
          </div>
        </div>
        <div className="w-1/2 py-2 ">

          <div className="flex flex-row py-1">
            <div className="w-full text-center  pb-2">LICENSE</div>
          </div>

          <div className="flex flex-row py-1 text-sm">
            <div className="w-full text-center  pb-2">
              <a href="https://github.com/O-Vault/O-Vault/blob/main/LICENSE"
                title="https://github.com/O-Vault/O-Vault/blob/main/LICENSE"
                target="_blank" style={{ color: theme.palette.primary[500] }}>Open Source / MIT</a>
            </div>
          </div>

          <div className="flex flex-row pb-1 pt-2">
            <div className="w-full text-center  pb-2">COMMUNITY</div>
          </div>

          <div className="flex flex-row py-1 text-sm items-center justify-center">

            <a href="https://www.o-vault.org/" title="www.o-vault.org" target="_blank" className="px-2">
              <IconWebsite style={{ width: '21px', height: '21px' }} />
            </a>
            <a href="https://github.com/O-Vault/O-Vault/" title="https://github.com/O-Vault/O-Vault/" target="_blank">
              <IconGithub style={{ width: '18px', height: '18px' }} />
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}