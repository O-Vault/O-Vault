import { Button, Dropdown, IconButton, Input, Menu, MenuButton, MenuItem, Typography, useTheme } from "@mui/joy";
import { KeyboardEvent, MouseEvent, SyntheticEvent, useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/common/GlobalContext";
import { VaultItem } from "@/common/Vault";
import { SnackBar, SnackBarState } from "@/components/SnackBar";
import { IconClear } from "@/icons/IconClear";
import { IconContextMenu } from "@/icons/IconContextMenu";
import { IconSearch } from "@/icons/IconSearch";

import { RouterContext } from "@/common/RouterContext";

import { aes } from "o-vault-lib";
import { SessionKeyContext } from "@/common/SessionKeyContext";

import { BadgeLetter } from "@/components/BadgeLetter";

export function Home() {

  const itemsFont = 'Inter';
  const theme = useTheme();

  const { route, setRoute } = useContext(RouterContext);
  const sessionKey = useContext(SessionKeyContext);
  const { context, setContext } = useContext(GlobalContext);

  const [displayType, setDisplayType] = useState(localStorage.getItem('display'));
  const [filter, setFilter] = useState("");
  const [newVaultItemBtnDisabled, setNewVaultItemBtnDisabled] = useState(false);
  const [snackBar, setSnackBar] = useState<SnackBarState>({ open: false, message: '' });

  const searchInput = useRef(null);

  const filteredItems = () => {

    if (!context.vaultLoaded) {
      return [];
    } else {
      return context.vault.items
        .filter((item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    }
  };

  const showSnackBarMessage = (e: SyntheticEvent<HTMLElement>, message: string) => {

    if (snackBar.open) {
      setTimeout(() => {
        setSnackBar({ ...snackBar, open: true, message: message });
      }, 0);
    } else {
      setSnackBar({ ...snackBar, open: true, message: message });
    }
    e.stopPropagation();
  };

  const copyUsernamePasswordToClipboard = async (e: MouseEvent<HTMLElement>, item: VaultItem) => {

    if (e.ctrlKey) {
      await navigator.clipboard.writeText(item.username);
      showSnackBarMessage(e, `Username copied for ${item.name}`);
    } else {
      await navigator.clipboard.writeText(item.password);
      showSnackBarMessage(e, `Password copied for ${item.name}`);
    }
  };

  const copyUsernameToClipboard = async (e: SyntheticEvent<HTMLElement>, item: VaultItem) => {

    e.stopPropagation();
    await navigator.clipboard.writeText(item.username);
    showSnackBarMessage(e, `Username copied for ${item.name}`);
  };

  const copyPasswordToClipboard = async (e: SyntheticEvent<HTMLElement>, item: VaultItem) => {

    e.stopPropagation();
    await navigator.clipboard.writeText(item.password);
    showSnackBarMessage(e, `Password copied for ${item.name}`);
  };

  const getLeastUsedColor = (items: VaultItem[]): number => {

    const aggregates: Map<number, number> = new Map();
    theme.palette.customColors.forEach((_value: string, index: number) => {
      aggregates.set(index, 0);
    });

    items.forEach(item => {

      aggregates.set(item.paletteIndex, aggregates.get(item.paletteIndex) + 1);
    });

    let min = items.length;
    let minPaletteIndex = 0;
    aggregates.forEach((occurence: number, color: number) => {
      if (occurence < min) {
        min = occurence;
        minPaletteIndex = color;
      }
    });
    return minPaletteIndex;
  };

  const onResetSearch = () => {
    setFilter('');
    const input = searchInput.current.querySelector('input');
    input.focus();
  };

  const addNew = async () => {

    const posX = Number(localStorage.getItem('vaultitemedit-posx') || -1);
    const posY = Number(localStorage.getItem('vaultitemedit-posy') || -1);
    setNewVaultItemBtnDisabled(true);
    context.showWaitCursor = true;
    setContext({ ...context });

    const item = new VaultItem();
    if (filter !== undefined && filter !== '' && filteredItems().length === 0) {
      item.name = filter;
    }
    item.paletteIndex = getLeastUsedColor(context.vault.items);
    const modalResult = await window.electronAPI.openVaultItemEditModal(item, 500, 470, posX, posY);
    setNewVaultItemBtnDisabled(false);

    if (modalResult !== undefined) {

      const json = await aes.decrypt(modalResult.encryptedItem, sessionKey, false);
      const item: VaultItem = JSON.parse(json);
      context.vault.items.push(item);
      context.showWaitCursor = false;
      window.electronAPI.saveVault(context.vault, context.password, sessionKey, context.vaultPath);
      setFilter(item.name);
      setContext({ ...context });
    } else {
      context.showWaitCursor = false;
      setContext({ ...context });
    }
  };

  const onDelete = async (e: SyntheticEvent<HTMLElement>, item: VaultItem) => {

    e.stopPropagation();
    const idx = context.vault.items.findIndex(curr => curr.name === item.name);
    context.vault.items.splice(idx, 1);
    await window.electronAPI.saveVault(context.vault, context.password, sessionKey, context.vaultPath);
    setContext({ ...context });
    showSnackBarMessage(e, `Entry ${item.name} was deleted`);
  };

  const onEdit = async (e: SyntheticEvent<HTMLElement>, inputItem: VaultItem) => {

    e.stopPropagation();
    const posX = Number(localStorage.getItem('vaultitemedit-posx') || -1);
    const posY = Number(localStorage.getItem('vaultitemedit-posy') || -1);

    const modalResult = await window.electronAPI.openVaultItemEditModal(inputItem, 500, 470, posX, posY);

    if (modalResult !== undefined) {

      const json = await aes.decrypt(modalResult.encryptedItem, sessionKey, false);
      const item: VaultItem = JSON.parse(json);
      if (inputItem) {
        inputItem.name = item.name;
        inputItem.username = item.username;
        inputItem.password = item.password;
        inputItem.url = item.url;
        inputItem.paletteIndex = item.paletteIndex;
      } else {
        context.vault.items.push(item);
      }
      window.electronAPI.saveVault(context.vault, context.password, sessionKey, context.vaultPath);
      setContext({ ...context });
    }
  };

  const menuItemStyling = {
    outline: 'none!important',
    ':active': {
      background: 'transparent!important'
    },
    ':focus': {
      background: `${theme.palette.background.winbar}!important`
    }
  };

  const getDisplayType = (): string => {

    if (!displayType) {
      return 'normal';
    } else {
      return displayType;
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>, item: VaultItem) => {
    if (event.code === 'ContextMenu' && document.activeElement) {
      const button: HTMLButtonElement = document.activeElement.querySelector('button.context-menu');
      button.click();
    }
    if (event.code === 'Enter' && !event.ctrlKey && document.activeElement) {

      copyPasswordToClipboard(event, item);
    } else if (event.code === 'Enter' && event.ctrlKey && document.activeElement) {

      copyUsernameToClipboard(event, item);
    }
  };

  const storageEventHandler = () => {
    setDisplayType(localStorage.getItem('display'));
  };

  const visibilityChangeHandler = () => {
    if (!document.hidden) {
      setFilter('');
    }
  };

  const onFocusHandler = () => {
    if (searchInput.current) {
      const input = searchInput.current.querySelector('input');
      input.focus();
    }
  };

  const onBlurHandler = () => {
    setSnackBar({ ...snackBar, open: false });
  };

  const onCloseVault = () => {

    context.vaultLoaded = false;
    context.password = null;
    context.vault = null;
    setContext({ ...context });
  };

  useEffect(() => {

    if (!context.vaultLoaded) {
      route.current = '/open';
      setRoute({ ...route });
    }

    window.addEventListener('storage', storageEventHandler, false);
    document.addEventListener('visibilitychange', visibilityChangeHandler, false);
    document.addEventListener('onNewEntry', addNew, false);
    document.addEventListener('onCloseVault', onCloseVault, false);
    window.addEventListener('focus', onFocusHandler, false);
    window.addEventListener('blur', onBlurHandler, false);
    return () => {
      window.removeEventListener('storage', storageEventHandler, false);
      document.removeEventListener('visibilitychange', visibilityChangeHandler, false);
      document.removeEventListener('onNewEntry', addNew, false);
      document.removeEventListener('onCloseVault', onCloseVault, false);
      window.removeEventListener('focus', onFocusHandler, false);
      window.removeEventListener('blur', onBlurHandler, false);
    };

  }, [context.vaultLoaded]);

  const sortItems = (a: VaultItem, b: VaultItem): number => {

    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  };

  const getItemColor = (item: VaultItem): string => {

    if (item.paletteIndex) {
      return theme.palette.customColors[item.paletteIndex];
    } else {
      return theme.palette.background.winbar;
    }
  };

  return (

    context.vaultLoaded && <div id="home" className="flex flex-col h-full" style={{ background: theme.palette.background.body }} >

      <style>{` 

          .vault-item {
            outline: none!important;
          }
          .vault-item:hover, .vault-item:focus {
            background:${theme.palette.background.winbar}!important;
          }
          .vault-item:hover .context-menu, .vault-item:focus .context-menu  {
            background:${theme.palette.background.winbar}!important;
            visibility: visible;
          }
      `}
      </style>

      <SnackBar snackBar={snackBar} setSnackBar={setSnackBar} />

      <div className="px-3 pt-3">

        <Input ref={searchInput} value={filter} slotProps={{ input: { spellCheck: false } }}
          onChange={(e) => setFilter(e.target.value)}
          startDecorator={
            <IconSearch style={{ padding: 1 }} />
          }
          endDecorator={
            <IconButton onClick={onResetSearch} tabIndex={-1}>
              <IconClear style={{ padding: 3, width: '18px' }} />
            </IconButton>
          }
          placeholder="Search"
          autoFocus />
      </div>
      <div className="grow overflow-auto  pt-2 custom-scrollbar mx-2">

        <div className="w-full"  >
          {
            filteredItems()
              .sort(sortItems)
              .map((item) =>
                <div key={item.name} tabIndex={0}

                  onKeyDown={(e) => onKeyDown(e, item)}
                  className={`flex flex-row items-center w-full ${getDisplayType() === 'normal' ? 'py-2' : ''} px-2 text-left rounded-md vault-item`}
                  onClick={(e) => { copyUsernamePasswordToClipboard(e, item); }}
                >
                  {getDisplayType() === 'normal' && <div>
                    <BadgeLetter itemName={item.name} paletteIndex={item.paletteIndex} />
                  </div>}
                  {getDisplayType() === 'compact' && <div>
                    <div style={{ backgroundColor: getItemColor(item), width: '14px', height: '14px' }} >
                      &nbsp;
                    </div>
                  </div>}
                  <div className="grow flex flex-col pl-3 overflow-hidden">
                    <Typography level={getDisplayType() === 'normal' ? 'body-lg' : 'body-md'} className="overflow-hidden text-ellipsis capitalize" sx={{ fontFamily: itemsFont }} >{item.name}</Typography>
                    {getDisplayType() === 'normal' && <Typography level="body-sm" className="overflow-hidden text-ellipsis" sx={{ fontFamily: itemsFont }} >{item.username}</Typography>}
                  </div>

                  <Dropdown>
                    <MenuButton variant="plain" className="context-menu " sx={{
                      outline: 'none!important',
                      padding: '4px', visibility: 'hidden'
                    }}
                      size="sm" tabIndex={-1}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IconContextMenu style={{ width: '20px', height: getDisplayType() === 'normal' ? '22px' : '18px' }} />
                    </MenuButton>
                    <Menu placement="bottom-end">
                      <MenuItem className="menuitem" sx={menuItemStyling} onClick={(e) => onEdit(e, item)}>Edit</MenuItem>
                      <MenuItem className="menuitem" sx={menuItemStyling} onClick={(e) => copyUsernameToClipboard(e, item)}>Copy username</MenuItem>
                      <MenuItem className="menuitem" sx={menuItemStyling} onClick={(e) => copyPasswordToClipboard(e, item)}>Copy password</MenuItem>
                      <MenuItem className="menuitem" sx={menuItemStyling} onClick={(e) => onDelete(e, item)} >Delete</MenuItem>
                    </Menu>
                  </Dropdown>
                </div>
              )
          }
          {
            context.vault.items.filter((item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0).length == 0 &&
            <div className="flex flex-col items-center py-2 px-2">
              <div>No record found</div>
            </div>
          }

          <div className="px-3 pt-3 pb-8 w-full flex flex-col items-center">
            <Button className="w-full" size="lg" onClick={addNew} disabled={newVaultItemBtnDisabled}>ADD NEW</Button>
          </div>

        </div>
      </div>

    </div>

  );
}
