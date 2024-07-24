import { CssVarsThemeOptions, extendTheme } from "@mui/joy";

declare module '@mui/joy/styles' {
   // eslint-disable-next-line no-unused-vars
   interface PaletteBackgroundOverrides {
      winbar: true;
   }

   interface PaletteOverrides {
      customColors: true;
   }
 }


const themeOptions : CssVarsThemeOptions  = {


   fontWeight:{
      sm:300,
      md:300,
      lg:300,
      xl:300
   },
  colorSchemes: {
   light: {
      palette: {
         mode: 'light',
         background: {
            body:'#eee',
            popup:'#eee',
            surface:'#eee',
            winbar: '#d2d3d5',
         },
         primary: {
            "50": "#fef2f2",
            "100": "#fee2e2",
            "200": "#fecaca",
            "300": "#fca5a5",
            "400": "#f87171",
            "500": "#ef4444",
            "600": "#dc2626",
            "700": "#b91c1c",
            "800": "#991b1b",
            "900": "#7f1d1d"
         },
         customColors: [
            '#00A35C', '#71F6BA', '#A1FA4F', '#016BF8',
            '#0498EC', '#9FFCFD', '#FFFD55', '#FF7F27',
            '#EF4B4B', '#A14CF5', '#FFA0D0', '#889397',
            '#C1C7C6', '#774342', '#B04F48', '#7F82BB'
        ]
      },
   },
    dark: {
      palette: {
         mode: 'dark',
         background: {
            body:'#141414',
            popup:'#141414',
            winbar: '#2b2c2d',
         },
        primary: {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d"
        },
        customColors: [
            '#00A35C', '#71F6BA', '#A1FA4F', '#016BF8',
            '#0498EC', '#9FFCFD', '#FFFD55', '#FF7F27',
            '#EF4B4B', '#A14CF5', '#FFA0D0', '#889397',
            '#C1C7C6', '#774342', '#B04F48', '#7F82BB'
        ]
      }
    }
      
  }
};

/* DEFAULT VALUES:
{
  "colorSchemes":{
     "light":{
        "palette":{
           "mode":"light",
           "primary":{
              "50":"#EDF5FD",
              "100":"#E3EFFB",
              "200":"#C7DFF7",
              "300":"#97C3F0",
              "400":"#4393E4",
              "500":"#0B6BCB",
              "600":"#185EA5",
              "700":"#12467B",
              "800":"#0A2744",
              "900":"#051423",
              "plainColor":"var(--joy-palette-primary-500, #0B6BCB)",
              "plainHoverBg":"var(--joy-palette-primary-100, #E3EFFB)",
              "plainActiveBg":"var(--joy-palette-primary-200, #C7DFF7)",
              "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedColor":"var(--joy-palette-primary-500, #0B6BCB)",
              "outlinedBorder":"var(--joy-palette-primary-300, #97C3F0)",
              "outlinedHoverBg":"var(--joy-palette-primary-100, #E3EFFB)",
              "outlinedActiveBg":"var(--joy-palette-primary-200, #C7DFF7)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softColor":"var(--joy-palette-primary-700, #12467B)",
              "softBg":"var(--joy-palette-primary-100, #E3EFFB)",
              "softHoverBg":"var(--joy-palette-primary-200, #C7DFF7)",
              "softActiveColor":"var(--joy-palette-primary-800, #0A2744)",
              "softActiveBg":"var(--joy-palette-primary-300, #97C3F0)",
              "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-primary-500, #0B6BCB)",
              "solidHoverBg":"var(--joy-palette-primary-600, #185EA5)",
              "solidActiveBg":"var(--joy-palette-primary-700, #12467B)",
              "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "mainChannel":"11 107 203",
              "lightChannel":"199 223 247",
              "darkChannel":"18 70 123"
           },
           "neutral":{
              "50":"#FBFCFE",
              "100":"#F0F4F8",
              "200":"#DDE7EE",
              "300":"#CDD7E1",
              "400":"#9FA6AD",
              "500":"#636B74",
              "600":"#555E68",
              "700":"#32383E",
              "800":"#171A1C",
              "900":"#0B0D0E",
              "plainColor":"var(--joy-palette-neutral-700, #32383E)",
              "plainHoverBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "plainActiveBg":"var(--joy-palette-neutral-200, #DDE7EE)",
              "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedColor":"var(--joy-palette-neutral-700, #32383E)",
              "outlinedBorder":"var(--joy-palette-neutral-300, #CDD7E1)",
              "outlinedHoverBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "outlinedActiveBg":"var(--joy-palette-neutral-200, #DDE7EE)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softColor":"var(--joy-palette-neutral-700, #32383E)",
              "softBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "softHoverBg":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softActiveColor":"var(--joy-palette-neutral-800, #171A1C)",
              "softActiveBg":"var(--joy-palette-neutral-300, #CDD7E1)",
              "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-neutral-500, #636B74)",
              "solidHoverBg":"var(--joy-palette-neutral-600, #555E68)",
              "solidActiveBg":"var(--joy-palette-neutral-700, #32383E)",
              "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "plainHoverColor":"var(--joy-palette-neutral-900, #0B0D0E)",
              "mainChannel":"99 107 116",
              "lightChannel":"221 231 238",
              "darkChannel":"50 56 62"
           },
           "danger":{
              "50":"#FEF6F6",
              "100":"#FCE4E4",
              "200":"#F7C5C5",
              "300":"#F09898",
              "400":"#E47474",
              "500":"#C41C1C",
              "600":"#A51818",
              "700":"#7D1212",
              "800":"#430A0A",
              "900":"#240505",
              "plainColor":"var(--joy-palette-danger-500, #C41C1C)",
              "plainHoverBg":"var(--joy-palette-danger-100, #FCE4E4)",
              "plainActiveBg":"var(--joy-palette-danger-200, #F7C5C5)",
              "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedColor":"var(--joy-palette-danger-500, #C41C1C)",
              "outlinedBorder":"var(--joy-palette-danger-300, #F09898)",
              "outlinedHoverBg":"var(--joy-palette-danger-100, #FCE4E4)",
              "outlinedActiveBg":"var(--joy-palette-danger-200, #F7C5C5)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softColor":"var(--joy-palette-danger-700, #7D1212)",
              "softBg":"var(--joy-palette-danger-100, #FCE4E4)",
              "softHoverBg":"var(--joy-palette-danger-200, #F7C5C5)",
              "softActiveColor":"var(--joy-palette-danger-800, #430A0A)",
              "softActiveBg":"var(--joy-palette-danger-300, #F09898)",
              "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-danger-500, #C41C1C)",
              "solidHoverBg":"var(--joy-palette-danger-600, #A51818)",
              "solidActiveBg":"var(--joy-palette-danger-700, #7D1212)",
              "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "mainChannel":"196 28 28",
              "lightChannel":"247 197 197",
              "darkChannel":"125 18 18"
           },
           "success":{
              "50":"#F6FEF6",
              "100":"#E3FBE3",
              "200":"#C7F7C7",
              "300":"#A1E8A1",
              "400":"#51BC51",
              "500":"#1F7A1F",
              "600":"#136C13",
              "700":"#0A470A",
              "800":"#042F04",
              "900":"#021D02",
              "plainColor":"var(--joy-palette-success-500, #1F7A1F)",
              "plainHoverBg":"var(--joy-palette-success-100, #E3FBE3)",
              "plainActiveBg":"var(--joy-palette-success-200, #C7F7C7)",
              "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedColor":"var(--joy-palette-success-500, #1F7A1F)",
              "outlinedBorder":"var(--joy-palette-success-300, #A1E8A1)",
              "outlinedHoverBg":"var(--joy-palette-success-100, #E3FBE3)",
              "outlinedActiveBg":"var(--joy-palette-success-200, #C7F7C7)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softColor":"var(--joy-palette-success-700, #0A470A)",
              "softBg":"var(--joy-palette-success-100, #E3FBE3)",
              "softHoverBg":"var(--joy-palette-success-200, #C7F7C7)",
              "softActiveColor":"var(--joy-palette-success-800, #042F04)",
              "softActiveBg":"var(--joy-palette-success-300, #A1E8A1)",
              "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-success-500, #1F7A1F)",
              "solidHoverBg":"var(--joy-palette-success-600, #136C13)",
              "solidActiveBg":"var(--joy-palette-success-700, #0A470A)",
              "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "mainChannel":"31 122 31",
              "lightChannel":"199 247 199",
              "darkChannel":"10 71 10"
           },
           "warning":{
              "50":"#FEFAF6",
              "100":"#FDF0E1",
              "200":"#FCE1C2",
              "300":"#F3C896",
              "400":"#EA9A3E",
              "500":"#9A5B13",
              "600":"#72430D",
              "700":"#492B08",
              "800":"#2E1B05",
              "900":"#1D1002",
              "plainColor":"var(--joy-palette-warning-500, #9A5B13)",
              "plainHoverBg":"var(--joy-palette-warning-100, #FDF0E1)",
              "plainActiveBg":"var(--joy-palette-warning-200, #FCE1C2)",
              "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedColor":"var(--joy-palette-warning-500, #9A5B13)",
              "outlinedBorder":"var(--joy-palette-warning-300, #F3C896)",
              "outlinedHoverBg":"var(--joy-palette-warning-100, #FDF0E1)",
              "outlinedActiveBg":"var(--joy-palette-warning-200, #FCE1C2)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softColor":"var(--joy-palette-warning-700, #492B08)",
              "softBg":"var(--joy-palette-warning-100, #FDF0E1)",
              "softHoverBg":"var(--joy-palette-warning-200, #FCE1C2)",
              "softActiveColor":"var(--joy-palette-warning-800, #2E1B05)",
              "softActiveBg":"var(--joy-palette-warning-300, #F3C896)",
              "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-warning-500, #9A5B13)",
              "solidHoverBg":"var(--joy-palette-warning-600, #72430D)",
              "solidActiveBg":"var(--joy-palette-warning-700, #492B08)",
              "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
              "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
              "mainChannel":"154 91 19",
              "lightChannel":"252 225 194",
              "darkChannel":"73 43 8"
           },
           "common":{
              "white":"#FFF",
              "black":"#000"
           },
           "text":{
              "primary":"var(--joy-palette-neutral-800, #171A1C)",
              "secondary":"var(--joy-palette-neutral-700, #32383E)",
              "tertiary":"var(--joy-palette-neutral-600, #555E68)",
              "icon":"var(--joy-palette-neutral-500, #636B74)"
           },
           "background":{
              "body":"var(--joy-palette-common-white, #FFF)",
              "surface":"var(--joy-palette-neutral-50, #FBFCFE)",
              "popup":"var(--joy-palette-common-white, #FFF)",
              "level1":"var(--joy-palette-neutral-100, #F0F4F8)",
              "level2":"var(--joy-palette-neutral-200, #DDE7EE)",
              "level3":"var(--joy-palette-neutral-300, #CDD7E1)",
              "tooltip":"var(--joy-palette-neutral-500, #636B74)",
              "backdrop":"rgba(var(--joy-palette-neutral-darkChannel, 11 13 14) / 0.25)"
           },
           "divider":"rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)",
           "focusVisible":"var(--joy-palette-primary-500, #0B6BCB)"
        },
        "shadowRing":"0 0 #000",
        "shadowChannel":"21 21 21",
        "shadowOpacity":"0.08"
     },
     "dark":{
        "palette":{
           "mode":"dark",
           "primary":{
              "50":"#EDF5FD",
              "100":"#E3EFFB",
              "200":"#C7DFF7",
              "300":"#97C3F0",
              "400":"#4393E4",
              "500":"#0B6BCB",
              "600":"#185EA5",
              "700":"#12467B",
              "800":"#0A2744",
              "900":"#051423",
              "plainColor":"var(--joy-palette-primary-300, #97C3F0)",
              "plainHoverBg":"var(--joy-palette-primary-800, #0A2744)",
              "plainActiveBg":"var(--joy-palette-primary-700, #12467B)",
              "plainDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedColor":"var(--joy-palette-primary-200, #C7DFF7)",
              "outlinedBorder":"var(--joy-palette-primary-700, #12467B)",
              "outlinedHoverBg":"var(--joy-palette-primary-800, #0A2744)",
              "outlinedActiveBg":"var(--joy-palette-primary-700, #12467B)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-800, #171A1C)",
              "softColor":"var(--joy-palette-primary-200, #C7DFF7)",
              "softBg":"var(--joy-palette-primary-800, #0A2744)",
              "softHoverBg":"var(--joy-palette-primary-700, #12467B)",
              "softActiveColor":"var(--joy-palette-primary-100, #E3EFFB)",
              "softActiveBg":"var(--joy-palette-primary-600, #185EA5)",
              "softDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "softDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-primary-500, #0B6BCB)",
              "solidHoverBg":"var(--joy-palette-primary-600, #185EA5)",
              "solidActiveBg":"var(--joy-palette-primary-700, #12467B)",
              "solidDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "solidDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "mainChannel":"67 147 228",
              "lightChannel":"199 223 247",
              "darkChannel":"18 70 123"
           },
           "neutral":{
              "50":"#FBFCFE",
              "100":"#F0F4F8",
              "200":"#DDE7EE",
              "300":"#CDD7E1",
              "400":"#9FA6AD",
              "500":"#636B74",
              "600":"#555E68",
              "700":"#32383E",
              "800":"#171A1C",
              "900":"#0B0D0E",
              "plainColor":"var(--joy-palette-neutral-300, #CDD7E1)",
              "plainHoverBg":"var(--joy-palette-neutral-800, #171A1C)",
              "plainActiveBg":"var(--joy-palette-neutral-700, #32383E)",
              "plainDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedColor":"var(--joy-palette-neutral-200, #DDE7EE)",
              "outlinedBorder":"var(--joy-palette-neutral-700, #32383E)",
              "outlinedHoverBg":"var(--joy-palette-neutral-800, #171A1C)",
              "outlinedActiveBg":"var(--joy-palette-neutral-700, #32383E)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-800, #171A1C)",
              "softColor":"var(--joy-palette-neutral-200, #DDE7EE)",
              "softBg":"var(--joy-palette-neutral-800, #171A1C)",
              "softHoverBg":"var(--joy-palette-neutral-700, #32383E)",
              "softActiveColor":"var(--joy-palette-neutral-100, #F0F4F8)",
              "softActiveBg":"var(--joy-palette-neutral-600, #555E68)",
              "softDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "softDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-neutral-500, #636B74)",
              "solidHoverBg":"var(--joy-palette-neutral-600, #555E68)",
              "solidActiveBg":"var(--joy-palette-neutral-700, #32383E)",
              "solidDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "solidDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "plainHoverColor":"var(--joy-palette-neutral-300, #CDD7E1)",
              "mainChannel":"159 166 173",
              "lightChannel":"221 231 238",
              "darkChannel":"50 56 62"
           },
           "danger":{
              "50":"#FEF6F6",
              "100":"#FCE4E4",
              "200":"#F7C5C5",
              "300":"#F09898",
              "400":"#E47474",
              "500":"#C41C1C",
              "600":"#A51818",
              "700":"#7D1212",
              "800":"#430A0A",
              "900":"#240505",
              "plainColor":"var(--joy-palette-danger-300, #F09898)",
              "plainHoverBg":"var(--joy-palette-danger-800, #430A0A)",
              "plainActiveBg":"var(--joy-palette-danger-700, #7D1212)",
              "plainDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedColor":"var(--joy-palette-danger-200, #F7C5C5)",
              "outlinedBorder":"var(--joy-palette-danger-700, #7D1212)",
              "outlinedHoverBg":"var(--joy-palette-danger-800, #430A0A)",
              "outlinedActiveBg":"var(--joy-palette-danger-700, #7D1212)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-800, #171A1C)",
              "softColor":"var(--joy-palette-danger-200, #F7C5C5)",
              "softBg":"var(--joy-palette-danger-800, #430A0A)",
              "softHoverBg":"var(--joy-palette-danger-700, #7D1212)",
              "softActiveColor":"var(--joy-palette-danger-100, #FCE4E4)",
              "softActiveBg":"var(--joy-palette-danger-600, #A51818)",
              "softDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "softDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-danger-500, #C41C1C)",
              "solidHoverBg":"var(--joy-palette-danger-600, #A51818)",
              "solidActiveBg":"var(--joy-palette-danger-700, #7D1212)",
              "solidDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "solidDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "mainChannel":"228 116 116",
              "lightChannel":"247 197 197",
              "darkChannel":"125 18 18"
           },
           "success":{
              "50":"#F6FEF6",
              "100":"#E3FBE3",
              "200":"#C7F7C7",
              "300":"#A1E8A1",
              "400":"#51BC51",
              "500":"#1F7A1F",
              "600":"#136C13",
              "700":"#0A470A",
              "800":"#042F04",
              "900":"#021D02",
              "plainColor":"var(--joy-palette-success-300, #A1E8A1)",
              "plainHoverBg":"var(--joy-palette-success-800, #042F04)",
              "plainActiveBg":"var(--joy-palette-success-700, #0A470A)",
              "plainDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedColor":"var(--joy-palette-success-200, #C7F7C7)",
              "outlinedBorder":"var(--joy-palette-success-700, #0A470A)",
              "outlinedHoverBg":"var(--joy-palette-success-800, #042F04)",
              "outlinedActiveBg":"var(--joy-palette-success-700, #0A470A)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-800, #171A1C)",
              "softColor":"var(--joy-palette-success-200, #C7F7C7)",
              "softBg":"var(--joy-palette-success-800, #042F04)",
              "softHoverBg":"var(--joy-palette-success-700, #0A470A)",
              "softActiveColor":"var(--joy-palette-success-100, #E3FBE3)",
              "softActiveBg":"var(--joy-palette-success-600, #136C13)",
              "softDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "softDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-success-500, #1F7A1F)",
              "solidHoverBg":"var(--joy-palette-success-600, #136C13)",
              "solidActiveBg":"var(--joy-palette-success-700, #0A470A)",
              "solidDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "solidDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "mainChannel":"81 188 81",
              "lightChannel":"199 247 199",
              "darkChannel":"10 71 10"
           },
           "warning":{
              "50":"#FEFAF6",
              "100":"#FDF0E1",
              "200":"#FCE1C2",
              "300":"#F3C896",
              "400":"#EA9A3E",
              "500":"#9A5B13",
              "600":"#72430D",
              "700":"#492B08",
              "800":"#2E1B05",
              "900":"#1D1002",
              "plainColor":"var(--joy-palette-warning-300, #F3C896)",
              "plainHoverBg":"var(--joy-palette-warning-800, #2E1B05)",
              "plainActiveBg":"var(--joy-palette-warning-700, #492B08)",
              "plainDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedColor":"var(--joy-palette-warning-200, #FCE1C2)",
              "outlinedBorder":"var(--joy-palette-warning-700, #492B08)",
              "outlinedHoverBg":"var(--joy-palette-warning-800, #2E1B05)",
              "outlinedActiveBg":"var(--joy-palette-warning-700, #492B08)",
              "outlinedDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "outlinedDisabledBorder":"var(--joy-palette-neutral-800, #171A1C)",
              "softColor":"var(--joy-palette-warning-200, #FCE1C2)",
              "softBg":"var(--joy-palette-warning-800, #2E1B05)",
              "softHoverBg":"var(--joy-palette-warning-700, #492B08)",
              "softActiveColor":"var(--joy-palette-warning-100, #FDF0E1)",
              "softActiveBg":"var(--joy-palette-warning-600, #72430D)",
              "softDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "softDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "solidColor":"var(--joy-palette-common-white, #FFF)",
              "solidBg":"var(--joy-palette-warning-500, #9A5B13)",
              "solidHoverBg":"var(--joy-palette-warning-600, #72430D)",
              "solidActiveBg":"var(--joy-palette-warning-700, #492B08)",
              "solidDisabledColor":"var(--joy-palette-neutral-500, #636B74)",
              "solidDisabledBg":"var(--joy-palette-neutral-800, #171A1C)",
              "mainChannel":"234 154 62",
              "lightChannel":"252 225 194",
              "darkChannel":"73 43 8"
           },
           "common":{
              "white":"#FFF",
              "black":"#000"
           },
           "text":{
              "primary":"var(--joy-palette-neutral-100, #F0F4F8)",
              "secondary":"var(--joy-palette-neutral-300, #CDD7E1)",
              "tertiary":"var(--joy-palette-neutral-400, #9FA6AD)",
              "icon":"var(--joy-palette-neutral-400, #9FA6AD)"
           },
           "background":{
              "body":"var(--joy-palette-common-black, #000)",
              "surface":"var(--joy-palette-neutral-900, #0B0D0E)",
              "popup":"var(--joy-palette-common-black, #000)",
              "level1":"var(--joy-palette-neutral-800, #171A1C)",
              "level2":"var(--joy-palette-neutral-700, #32383E)",
              "level3":"var(--joy-palette-neutral-600, #555E68)",
              "tooltip":"var(--joy-palette-neutral-600, #555E68)",
              "backdrop":"rgba(var(--joy-palette-neutral-darkChannel, 251 252 254) / 0.25)"
           },
           "divider":"rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.16)",
           "focusVisible":"var(--joy-palette-primary-500, #0B6BCB)"
        },
        "shadowRing":"0 0 #000",
        "shadowChannel":"0 0 0",
        "shadowOpacity":"0.6"
     }
  },
  "defaultColorScheme":"light",
  "fontSize":{
     "xs":"0.75rem",
     "sm":"0.875rem",
     "md":"1rem",
     "lg":"1.125rem",
     "xl":"1.25rem",
     "xl2":"1.5rem",
     "xl3":"1.875rem",
     "xl4":"2.25rem"
  },
  "fontFamily":{
     "body":"\"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\")",
     "display":"\"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\")",
     "code":"Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
     "fallback":"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
  },
  "fontWeight":{
     "sm":300,
     "md":500,
     "lg":600,
     "xl":700
  },
  "focus":{
     "thickness":"2px",
     "selector":"&.Mui-focusVisible, &:focus-visible",
     "default":{
        "outlineOffset":"var(--focus-outline-offset, var(--joy-focus-thickness, 2px))",
        "outline":"var(--joy-focus-thickness, 2px) solid var(--joy-palette-focusVisible, #0B6BCB)"
     }
  },
  "lineHeight":{
     "xs":"1.33334",
     "sm":"1.42858",
     "md":"1.5",
     "lg":"1.55556",
     "xl":"1.66667"
  },
  "radius":{
     "xs":"2px",
     "sm":"6px",
     "md":"8px",
     "lg":"12px",
     "xl":"16px"
  },
  "shadow":{
     "xs":"var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))",
     "sm":"var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 2px 4px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))",
     "md":"var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 6px 12px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))",
     "lg":"var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 12px 16px -4px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))",
     "xl":"var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 20px 24px -4px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))"
  },
  "zIndex":{
     "badge":1,
     "table":10,
     "popup":1000,
     "modal":1300,
     "snackbar":1400,
     "tooltip":1500
  },
  "typography":{
     "h1":{
        "fontFamily":"var(--joy-fontFamily-display, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-xl, 700)",
        "fontSize":"var(--joy-fontSize-xl4, 2.25rem)",
        "lineHeight":"var(--joy-lineHeight-xs, 1.33334)",
        "letterSpacing":"-0.025em",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "h2":{
        "fontFamily":"var(--joy-fontFamily-display, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-xl, 700)",
        "fontSize":"var(--joy-fontSize-xl3, 1.875rem)",
        "lineHeight":"var(--joy-lineHeight-xs, 1.33334)",
        "letterSpacing":"-0.025em",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "h3":{
        "fontFamily":"var(--joy-fontFamily-display, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-lg, 600)",
        "fontSize":"var(--joy-fontSize-xl2, 1.5rem)",
        "lineHeight":"var(--joy-lineHeight-xs, 1.33334)",
        "letterSpacing":"-0.025em",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "h4":{
        "fontFamily":"var(--joy-fontFamily-display, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-lg, 600)",
        "fontSize":"var(--joy-fontSize-xl, 1.25rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "letterSpacing":"-0.025em",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "title-lg":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-lg, 600)",
        "fontSize":"var(--joy-fontSize-lg, 1.125rem)",
        "lineHeight":"var(--joy-lineHeight-xs, 1.33334)",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "title-md":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-md, 500)",
        "fontSize":"var(--joy-fontSize-md, 1rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "title-sm":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-md, 500)",
        "fontSize":"var(--joy-fontSize-sm, 0.875rem)",
        "lineHeight":"var(--joy-lineHeight-sm, 1.42858)",
        "color":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))"
     },
     "body-lg":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontSize":"var(--joy-fontSize-lg, 1.125rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "color":"var(--joy-palette-text-secondary, var(--joy-palette-neutral-700, #32383E))"
     },
     "body-md":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontSize":"var(--joy-fontSize-md, 1rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "color":"var(--joy-palette-text-secondary, var(--joy-palette-neutral-700, #32383E))"
     },
     "body-sm":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontSize":"var(--joy-fontSize-sm, 0.875rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "color":"var(--joy-palette-text-tertiary, var(--joy-palette-neutral-600, #555E68))"
     },
     "body-xs":{
        "fontFamily":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "fontWeight":"var(--joy-fontWeight-md, 500)",
        "fontSize":"var(--joy-fontSize-xs, 0.75rem)",
        "lineHeight":"var(--joy-lineHeight-md, 1.5)",
        "color":"var(--joy-palette-text-tertiary, var(--joy-palette-neutral-600, #555E68))"
     }
  },
  "breakpoints":{
     "keys":[
        "xs",
        "sm",
        "md",
        "lg",
        "xl"
     ],
     "values":{
        "xs":0,
        "sm":600,
        "md":900,
        "lg":1200,
        "xl":1536
     },
     "unit":"px"
  },
  "components":{
     "MuiSvgIcon":{
        "defaultProps":{
           "fontSize":"xl2"
        },
        "styleOverrides":{
           
        }
     }
  },
  "cssVarPrefix":"joy",
  "attribute":"data-joy-color-scheme",
  "colorSchemeSelector":":root",
  "vars":{
     "fontSize":{
        "xs":"var(--joy-fontSize-xs, 0.75rem)",
        "sm":"var(--joy-fontSize-sm, 0.875rem)",
        "md":"var(--joy-fontSize-md, 1rem)",
        "lg":"var(--joy-fontSize-lg, 1.125rem)",
        "xl":"var(--joy-fontSize-xl, 1.25rem)",
        "xl2":"var(--joy-fontSize-xl2, 1.5rem)",
        "xl3":"var(--joy-fontSize-xl3, 1.875rem)",
        "xl4":"var(--joy-fontSize-xl4, 2.25rem)"
     },
     "fontFamily":{
        "body":"var(--joy-fontFamily-body, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "display":"var(--joy-fontFamily-display, \"Inter\", var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"))",
        "code":"var(--joy-fontFamily-code, Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace)",
        "fallback":"var(--joy-fontFamily-fallback, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\")"
     },
     "fontWeight":{
        "sm":"var(--joy-fontWeight-sm, 300)",
        "md":"var(--joy-fontWeight-md, 500)",
        "lg":"var(--joy-fontWeight-lg, 600)",
        "xl":"var(--joy-fontWeight-xl, 700)"
     },
     "focus":{
        "thickness":"var(--joy-focus-thickness, 2px)"
     },
     "lineHeight":{
        "xs":"var(--joy-lineHeight-xs, 1.33334)",
        "sm":"var(--joy-lineHeight-sm, 1.42858)",
        "md":"var(--joy-lineHeight-md, 1.5)",
        "lg":"var(--joy-lineHeight-lg, 1.55556)",
        "xl":"var(--joy-lineHeight-xl, 1.66667)"
     },
     "radius":{
        "xs":"var(--joy-radius-xs, 2px)",
        "sm":"var(--joy-radius-sm, 6px)",
        "md":"var(--joy-radius-md, 8px)",
        "lg":"var(--joy-radius-lg, 12px)",
        "xl":"var(--joy-radius-xl, 16px)"
     },
     "shadow":{
        "xs":"var(--joy-shadow-xs, var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)))",
        "sm":"var(--joy-shadow-sm, var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 2px 4px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)))",
        "md":"var(--joy-shadow-md, var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 6px 12px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)))",
        "lg":"var(--joy-shadow-lg, var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 12px 16px -4px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)))",
        "xl":"var(--joy-shadow-xl, var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 20px 24px -4px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)))"
     },
     "zIndex":{
        "badge":"var(--joy-zIndex-badge, 1)",
        "table":"var(--joy-zIndex-table, 10)",
        "popup":"var(--joy-zIndex-popup, 1000)",
        "modal":"var(--joy-zIndex-modal, 1300)",
        "snackbar":"var(--joy-zIndex-snackbar, 1400)",
        "tooltip":"var(--joy-zIndex-tooltip, 1500)"
     },
     "cssVarPrefix":"var(--joy-cssVarPrefix, joy)",
     "spacing":"var(--joy-spacing, 8px)",
     "palette":{
        "primary":{
           "50":"var(--joy-palette-primary-50, #EDF5FD)",
           "100":"var(--joy-palette-primary-100, #E3EFFB)",
           "200":"var(--joy-palette-primary-200, #C7DFF7)",
           "300":"var(--joy-palette-primary-300, #97C3F0)",
           "400":"var(--joy-palette-primary-400, #4393E4)",
           "500":"var(--joy-palette-primary-500, #0B6BCB)",
           "600":"var(--joy-palette-primary-600, #185EA5)",
           "700":"var(--joy-palette-primary-700, #12467B)",
           "800":"var(--joy-palette-primary-800, #0A2744)",
           "900":"var(--joy-palette-primary-900, #051423)",
           "plainColor":"var(--joy-palette-primary-plainColor, var(--joy-palette-primary-500, #0B6BCB))",
           "plainHoverBg":"var(--joy-palette-primary-plainHoverBg, var(--joy-palette-primary-100, #E3EFFB))",
           "plainActiveBg":"var(--joy-palette-primary-plainActiveBg, var(--joy-palette-primary-200, #C7DFF7))",
           "plainDisabledColor":"var(--joy-palette-primary-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedColor":"var(--joy-palette-primary-outlinedColor, var(--joy-palette-primary-500, #0B6BCB))",
           "outlinedBorder":"var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0))",
           "outlinedHoverBg":"var(--joy-palette-primary-outlinedHoverBg, var(--joy-palette-primary-100, #E3EFFB))",
           "outlinedActiveBg":"var(--joy-palette-primary-outlinedActiveBg, var(--joy-palette-primary-200, #C7DFF7))",
           "outlinedDisabledColor":"var(--joy-palette-primary-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedDisabledBorder":"var(--joy-palette-primary-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE))",
           "softColor":"var(--joy-palette-primary-softColor, var(--joy-palette-primary-700, #12467B))",
           "softBg":"var(--joy-palette-primary-softBg, var(--joy-palette-primary-100, #E3EFFB))",
           "softHoverBg":"var(--joy-palette-primary-softHoverBg, var(--joy-palette-primary-200, #C7DFF7))",
           "softActiveColor":"var(--joy-palette-primary-softActiveColor, var(--joy-palette-primary-800, #0A2744))",
           "softActiveBg":"var(--joy-palette-primary-softActiveBg, var(--joy-palette-primary-300, #97C3F0))",
           "softDisabledColor":"var(--joy-palette-primary-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "softDisabledBg":"var(--joy-palette-primary-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE))",
           "solidColor":"var(--joy-palette-primary-solidColor, var(--joy-palette-common-white, #FFF))",
           "solidBg":"var(--joy-palette-primary-solidBg, var(--joy-palette-primary-500, #0B6BCB))",
           "solidHoverBg":"var(--joy-palette-primary-solidHoverBg, var(--joy-palette-primary-600, #185EA5))",
           "solidActiveBg":"var(--joy-palette-primary-solidActiveBg, var(--joy-palette-primary-700, #12467B))",
           "solidDisabledColor":"var(--joy-palette-primary-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "solidDisabledBg":"var(--joy-palette-primary-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "mainChannel":"var(--joy-palette-primary-mainChannel, 11 107 203)",
           "lightChannel":"var(--joy-palette-primary-lightChannel, 199 223 247)",
           "darkChannel":"var(--joy-palette-primary-darkChannel, 18 70 123)"
        },
        "neutral":{
           "50":"var(--joy-palette-neutral-50, #FBFCFE)",
           "100":"var(--joy-palette-neutral-100, #F0F4F8)",
           "200":"var(--joy-palette-neutral-200, #DDE7EE)",
           "300":"var(--joy-palette-neutral-300, #CDD7E1)",
           "400":"var(--joy-palette-neutral-400, #9FA6AD)",
           "500":"var(--joy-palette-neutral-500, #636B74)",
           "600":"var(--joy-palette-neutral-600, #555E68)",
           "700":"var(--joy-palette-neutral-700, #32383E)",
           "800":"var(--joy-palette-neutral-800, #171A1C)",
           "900":"var(--joy-palette-neutral-900, #0B0D0E)",
           "plainColor":"var(--joy-palette-neutral-plainColor, var(--joy-palette-neutral-700, #32383E))",
           "plainHoverBg":"var(--joy-palette-neutral-plainHoverBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "plainActiveBg":"var(--joy-palette-neutral-plainActiveBg, var(--joy-palette-neutral-200, #DDE7EE))",
           "plainDisabledColor":"var(--joy-palette-neutral-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedColor":"var(--joy-palette-neutral-outlinedColor, var(--joy-palette-neutral-700, #32383E))",
           "outlinedBorder":"var(--joy-palette-neutral-outlinedBorder, var(--joy-palette-neutral-300, #CDD7E1))",
           "outlinedHoverBg":"var(--joy-palette-neutral-outlinedHoverBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "outlinedActiveBg":"var(--joy-palette-neutral-outlinedActiveBg, var(--joy-palette-neutral-200, #DDE7EE))",
           "outlinedDisabledColor":"var(--joy-palette-neutral-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedDisabledBorder":"var(--joy-palette-neutral-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE))",
           "softColor":"var(--joy-palette-neutral-softColor, var(--joy-palette-neutral-700, #32383E))",
           "softBg":"var(--joy-palette-neutral-softBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "softHoverBg":"var(--joy-palette-neutral-softHoverBg, var(--joy-palette-neutral-200, #DDE7EE))",
           "softActiveColor":"var(--joy-palette-neutral-softActiveColor, var(--joy-palette-neutral-800, #171A1C))",
           "softActiveBg":"var(--joy-palette-neutral-softActiveBg, var(--joy-palette-neutral-300, #CDD7E1))",
           "softDisabledColor":"var(--joy-palette-neutral-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "softDisabledBg":"var(--joy-palette-neutral-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE))",
           "solidColor":"var(--joy-palette-neutral-solidColor, var(--joy-palette-common-white, #FFF))",
           "solidBg":"var(--joy-palette-neutral-solidBg, var(--joy-palette-neutral-500, #636B74))",
           "solidHoverBg":"var(--joy-palette-neutral-solidHoverBg, var(--joy-palette-neutral-600, #555E68))",
           "solidActiveBg":"var(--joy-palette-neutral-solidActiveBg, var(--joy-palette-neutral-700, #32383E))",
           "solidDisabledColor":"var(--joy-palette-neutral-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "solidDisabledBg":"var(--joy-palette-neutral-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "plainHoverColor":"var(--joy-palette-neutral-plainHoverColor, var(--joy-palette-neutral-900, #0B0D0E))",
           "mainChannel":"var(--joy-palette-neutral-mainChannel, 99 107 116)",
           "lightChannel":"var(--joy-palette-neutral-lightChannel, 221 231 238)",
           "darkChannel":"var(--joy-palette-neutral-darkChannel, 50 56 62)"
        },
        "danger":{
           "50":"var(--joy-palette-danger-50, #FEF6F6)",
           "100":"var(--joy-palette-danger-100, #FCE4E4)",
           "200":"var(--joy-palette-danger-200, #F7C5C5)",
           "300":"var(--joy-palette-danger-300, #F09898)",
           "400":"var(--joy-palette-danger-400, #E47474)",
           "500":"var(--joy-palette-danger-500, #C41C1C)",
           "600":"var(--joy-palette-danger-600, #A51818)",
           "700":"var(--joy-palette-danger-700, #7D1212)",
           "800":"var(--joy-palette-danger-800, #430A0A)",
           "900":"var(--joy-palette-danger-900, #240505)",
           "plainColor":"var(--joy-palette-danger-plainColor, var(--joy-palette-danger-500, #C41C1C))",
           "plainHoverBg":"var(--joy-palette-danger-plainHoverBg, var(--joy-palette-danger-100, #FCE4E4))",
           "plainActiveBg":"var(--joy-palette-danger-plainActiveBg, var(--joy-palette-danger-200, #F7C5C5))",
           "plainDisabledColor":"var(--joy-palette-danger-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedColor":"var(--joy-palette-danger-outlinedColor, var(--joy-palette-danger-500, #C41C1C))",
           "outlinedBorder":"var(--joy-palette-danger-outlinedBorder, var(--joy-palette-danger-300, #F09898))",
           "outlinedHoverBg":"var(--joy-palette-danger-outlinedHoverBg, var(--joy-palette-danger-100, #FCE4E4))",
           "outlinedActiveBg":"var(--joy-palette-danger-outlinedActiveBg, var(--joy-palette-danger-200, #F7C5C5))",
           "outlinedDisabledColor":"var(--joy-palette-danger-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedDisabledBorder":"var(--joy-palette-danger-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE))",
           "softColor":"var(--joy-palette-danger-softColor, var(--joy-palette-danger-700, #7D1212))",
           "softBg":"var(--joy-palette-danger-softBg, var(--joy-palette-danger-100, #FCE4E4))",
           "softHoverBg":"var(--joy-palette-danger-softHoverBg, var(--joy-palette-danger-200, #F7C5C5))",
           "softActiveColor":"var(--joy-palette-danger-softActiveColor, var(--joy-palette-danger-800, #430A0A))",
           "softActiveBg":"var(--joy-palette-danger-softActiveBg, var(--joy-palette-danger-300, #F09898))",
           "softDisabledColor":"var(--joy-palette-danger-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "softDisabledBg":"var(--joy-palette-danger-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE))",
           "solidColor":"var(--joy-palette-danger-solidColor, var(--joy-palette-common-white, #FFF))",
           "solidBg":"var(--joy-palette-danger-solidBg, var(--joy-palette-danger-500, #C41C1C))",
           "solidHoverBg":"var(--joy-palette-danger-solidHoverBg, var(--joy-palette-danger-600, #A51818))",
           "solidActiveBg":"var(--joy-palette-danger-solidActiveBg, var(--joy-palette-danger-700, #7D1212))",
           "solidDisabledColor":"var(--joy-palette-danger-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "solidDisabledBg":"var(--joy-palette-danger-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "mainChannel":"var(--joy-palette-danger-mainChannel, 196 28 28)",
           "lightChannel":"var(--joy-palette-danger-lightChannel, 247 197 197)",
           "darkChannel":"var(--joy-palette-danger-darkChannel, 125 18 18)"
        },
        "success":{
           "50":"var(--joy-palette-success-50, #F6FEF6)",
           "100":"var(--joy-palette-success-100, #E3FBE3)",
           "200":"var(--joy-palette-success-200, #C7F7C7)",
           "300":"var(--joy-palette-success-300, #A1E8A1)",
           "400":"var(--joy-palette-success-400, #51BC51)",
           "500":"var(--joy-palette-success-500, #1F7A1F)",
           "600":"var(--joy-palette-success-600, #136C13)",
           "700":"var(--joy-palette-success-700, #0A470A)",
           "800":"var(--joy-palette-success-800, #042F04)",
           "900":"var(--joy-palette-success-900, #021D02)",
           "plainColor":"var(--joy-palette-success-plainColor, var(--joy-palette-success-500, #1F7A1F))",
           "plainHoverBg":"var(--joy-palette-success-plainHoverBg, var(--joy-palette-success-100, #E3FBE3))",
           "plainActiveBg":"var(--joy-palette-success-plainActiveBg, var(--joy-palette-success-200, #C7F7C7))",
           "plainDisabledColor":"var(--joy-palette-success-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedColor":"var(--joy-palette-success-outlinedColor, var(--joy-palette-success-500, #1F7A1F))",
           "outlinedBorder":"var(--joy-palette-success-outlinedBorder, var(--joy-palette-success-300, #A1E8A1))",
           "outlinedHoverBg":"var(--joy-palette-success-outlinedHoverBg, var(--joy-palette-success-100, #E3FBE3))",
           "outlinedActiveBg":"var(--joy-palette-success-outlinedActiveBg, var(--joy-palette-success-200, #C7F7C7))",
           "outlinedDisabledColor":"var(--joy-palette-success-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedDisabledBorder":"var(--joy-palette-success-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE))",
           "softColor":"var(--joy-palette-success-softColor, var(--joy-palette-success-700, #0A470A))",
           "softBg":"var(--joy-palette-success-softBg, var(--joy-palette-success-100, #E3FBE3))",
           "softHoverBg":"var(--joy-palette-success-softHoverBg, var(--joy-palette-success-200, #C7F7C7))",
           "softActiveColor":"var(--joy-palette-success-softActiveColor, var(--joy-palette-success-800, #042F04))",
           "softActiveBg":"var(--joy-palette-success-softActiveBg, var(--joy-palette-success-300, #A1E8A1))",
           "softDisabledColor":"var(--joy-palette-success-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "softDisabledBg":"var(--joy-palette-success-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE))",
           "solidColor":"var(--joy-palette-success-solidColor, var(--joy-palette-common-white, #FFF))",
           "solidBg":"var(--joy-palette-success-solidBg, var(--joy-palette-success-500, #1F7A1F))",
           "solidHoverBg":"var(--joy-palette-success-solidHoverBg, var(--joy-palette-success-600, #136C13))",
           "solidActiveBg":"var(--joy-palette-success-solidActiveBg, var(--joy-palette-success-700, #0A470A))",
           "solidDisabledColor":"var(--joy-palette-success-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "solidDisabledBg":"var(--joy-palette-success-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "mainChannel":"var(--joy-palette-success-mainChannel, 31 122 31)",
           "lightChannel":"var(--joy-palette-success-lightChannel, 199 247 199)",
           "darkChannel":"var(--joy-palette-success-darkChannel, 10 71 10)"
        },
        "warning":{
           "50":"var(--joy-palette-warning-50, #FEFAF6)",
           "100":"var(--joy-palette-warning-100, #FDF0E1)",
           "200":"var(--joy-palette-warning-200, #FCE1C2)",
           "300":"var(--joy-palette-warning-300, #F3C896)",
           "400":"var(--joy-palette-warning-400, #EA9A3E)",
           "500":"var(--joy-palette-warning-500, #9A5B13)",
           "600":"var(--joy-palette-warning-600, #72430D)",
           "700":"var(--joy-palette-warning-700, #492B08)",
           "800":"var(--joy-palette-warning-800, #2E1B05)",
           "900":"var(--joy-palette-warning-900, #1D1002)",
           "plainColor":"var(--joy-palette-warning-plainColor, var(--joy-palette-warning-500, #9A5B13))",
           "plainHoverBg":"var(--joy-palette-warning-plainHoverBg, var(--joy-palette-warning-100, #FDF0E1))",
           "plainActiveBg":"var(--joy-palette-warning-plainActiveBg, var(--joy-palette-warning-200, #FCE1C2))",
           "plainDisabledColor":"var(--joy-palette-warning-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedColor":"var(--joy-palette-warning-outlinedColor, var(--joy-palette-warning-500, #9A5B13))",
           "outlinedBorder":"var(--joy-palette-warning-outlinedBorder, var(--joy-palette-warning-300, #F3C896))",
           "outlinedHoverBg":"var(--joy-palette-warning-outlinedHoverBg, var(--joy-palette-warning-100, #FDF0E1))",
           "outlinedActiveBg":"var(--joy-palette-warning-outlinedActiveBg, var(--joy-palette-warning-200, #FCE1C2))",
           "outlinedDisabledColor":"var(--joy-palette-warning-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "outlinedDisabledBorder":"var(--joy-palette-warning-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE))",
           "softColor":"var(--joy-palette-warning-softColor, var(--joy-palette-warning-700, #492B08))",
           "softBg":"var(--joy-palette-warning-softBg, var(--joy-palette-warning-100, #FDF0E1))",
           "softHoverBg":"var(--joy-palette-warning-softHoverBg, var(--joy-palette-warning-200, #FCE1C2))",
           "softActiveColor":"var(--joy-palette-warning-softActiveColor, var(--joy-palette-warning-800, #2E1B05))",
           "softActiveBg":"var(--joy-palette-warning-softActiveBg, var(--joy-palette-warning-300, #F3C896))",
           "softDisabledColor":"var(--joy-palette-warning-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "softDisabledBg":"var(--joy-palette-warning-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE))",
           "solidColor":"var(--joy-palette-warning-solidColor, var(--joy-palette-common-white, #FFF))",
           "solidBg":"var(--joy-palette-warning-solidBg, var(--joy-palette-warning-500, #9A5B13))",
           "solidHoverBg":"var(--joy-palette-warning-solidHoverBg, var(--joy-palette-warning-600, #72430D))",
           "solidActiveBg":"var(--joy-palette-warning-solidActiveBg, var(--joy-palette-warning-700, #492B08))",
           "solidDisabledColor":"var(--joy-palette-warning-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD))",
           "solidDisabledBg":"var(--joy-palette-warning-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8))",
           "mainChannel":"var(--joy-palette-warning-mainChannel, 154 91 19)",
           "lightChannel":"var(--joy-palette-warning-lightChannel, 252 225 194)",
           "darkChannel":"var(--joy-palette-warning-darkChannel, 73 43 8)"
        },
        "common":{
           "white":"var(--joy-palette-common-white, #FFF)",
           "black":"var(--joy-palette-common-black, #000)"
        },
        "text":{
           "primary":"var(--joy-palette-text-primary, var(--joy-palette-neutral-800, #171A1C))",
           "secondary":"var(--joy-palette-text-secondary, var(--joy-palette-neutral-700, #32383E))",
           "tertiary":"var(--joy-palette-text-tertiary, var(--joy-palette-neutral-600, #555E68))",
           "icon":"var(--joy-palette-text-icon, var(--joy-palette-neutral-500, #636B74))"
        },
        "background":{
           "body":"var(--joy-palette-background-body, var(--joy-palette-common-white, #FFF))",
           "surface":"var(--joy-palette-background-surface, var(--joy-palette-neutral-50, #FBFCFE))",
           "popup":"var(--joy-palette-background-popup, var(--joy-palette-common-white, #FFF))",
           "level1":"var(--joy-palette-background-level1, var(--joy-palette-neutral-100, #F0F4F8))",
           "level2":"var(--joy-palette-background-level2, var(--joy-palette-neutral-200, #DDE7EE))",
           "level3":"var(--joy-palette-background-level3, var(--joy-palette-neutral-300, #CDD7E1))",
           "tooltip":"var(--joy-palette-background-tooltip, var(--joy-palette-neutral-500, #636B74))",
           "backdrop":"var(--joy-palette-background-backdrop, rgba(var(--joy-palette-neutral-darkChannel, 11 13 14) / 0.25))"
        },
        "divider":"var(--joy-palette-divider, rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2))",
        "focusVisible":"var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #0B6BCB))"
     },
     "shadowRing":"var(--joy-shadowRing, 0 0 #000)",
     "shadowChannel":"var(--joy-shadowChannel, 21 21 21)",
     "shadowOpacity":"var(--joy-shadowOpacity, 0.08)"
  },
  "unstable_sxConfig":{
     "border":{
        "themeKey":"borders"
     },
     "borderTop":{
        "themeKey":"borders"
     },
     "borderRight":{
        "themeKey":"borders"
     },
     "borderBottom":{
        "themeKey":"borders"
     },
     "borderLeft":{
        "themeKey":"borders"
     },
     "borderColor":{
        "themeKey":"palette"
     },
     "borderTopColor":{
        "themeKey":"palette"
     },
     "borderRightColor":{
        "themeKey":"palette"
     },
     "borderBottomColor":{
        "themeKey":"palette"
     },
     "borderLeftColor":{
        "themeKey":"palette"
     },
     "outline":{
        "themeKey":"borders"
     },
     "outlineColor":{
        "themeKey":"palette"
     },
     "borderRadius":{
        "themeKey":"radius"
     },
     "color":{
        "themeKey":"palette"
     },
     "bgcolor":{
        "themeKey":"palette",
        "cssProperty":"backgroundColor"
     },
     "backgroundColor":{
        "themeKey":"palette"
     },
     "p":{
        
     },
     "pt":{
        
     },
     "pr":{
        
     },
     "pb":{
        
     },
     "pl":{
        
     },
     "px":{
        
     },
     "py":{
        
     },
     "padding":{
        
     },
     "paddingTop":{
        
     },
     "paddingRight":{
        
     },
     "paddingBottom":{
        
     },
     "paddingLeft":{
        
     },
     "paddingX":{
        
     },
     "paddingY":{
        
     },
     "paddingInline":{
        
     },
     "paddingInlineStart":{
        
     },
     "paddingInlineEnd":{
        
     },
     "paddingBlock":{
        
     },
     "paddingBlockStart":{
        
     },
     "paddingBlockEnd":{
        
     },
     "m":{
        
     },
     "mt":{
        
     },
     "mr":{
        
     },
     "mb":{
        
     },
     "ml":{
        
     },
     "mx":{
        
     },
     "my":{
        
     },
     "margin":{
        
     },
     "marginTop":{
        
     },
     "marginRight":{
        
     },
     "marginBottom":{
        
     },
     "marginLeft":{
        
     },
     "marginX":{
        
     },
     "marginY":{
        
     },
     "marginInline":{
        
     },
     "marginInlineStart":{
        
     },
     "marginInlineEnd":{
        
     },
     "marginBlock":{
        
     },
     "marginBlockStart":{
        
     },
     "marginBlockEnd":{
        
     },
     "displayPrint":{
        "cssProperty":false
     },
     "display":{
        
     },
     "overflow":{
        
     },
     "textOverflow":{
        
     },
     "visibility":{
        
     },
     "whiteSpace":{
        
     },
     "flexBasis":{
        
     },
     "flexDirection":{
        
     },
     "flexWrap":{
        
     },
     "justifyContent":{
        
     },
     "alignItems":{
        
     },
     "alignContent":{
        
     },
     "order":{
        
     },
     "flex":{
        
     },
     "flexGrow":{
        
     },
     "flexShrink":{
        
     },
     "alignSelf":{
        
     },
     "justifyItems":{
        
     },
     "justifySelf":{
        
     },
     "gap":{
        
     },
     "rowGap":{
        
     },
     "columnGap":{
        
     },
     "gridColumn":{
        
     },
     "gridRow":{
        
     },
     "gridAutoFlow":{
        
     },
     "gridAutoColumns":{
        
     },
     "gridAutoRows":{
        
     },
     "gridTemplateColumns":{
        
     },
     "gridTemplateRows":{
        
     },
     "gridTemplateAreas":{
        
     },
     "gridArea":{
        
     },
     "position":{
        
     },
     "zIndex":{
        "themeKey":"zIndex"
     },
     "top":{
        
     },
     "right":{
        
     },
     "bottom":{
        
     },
     "left":{
        
     },
     "boxShadow":{
        "themeKey":"shadow"
     },
     "width":{
        
     },
     "maxWidth":{
        
     },
     "minWidth":{
        
     },
     "height":{
        
     },
     "maxHeight":{
        
     },
     "minHeight":{
        
     },
     "boxSizing":{
        
     },
     "font":{
        "themeKey":"font"
     },
     "fontFamily":{
        "themeKey":"fontFamily"
     },
     "fontSize":{
        "themeKey":"fontSize"
     },
     "fontStyle":{
        "themeKey":"typography"
     },
     "fontWeight":{
        "themeKey":"fontWeight"
     },
     "letterSpacing":{
        "themeKey":"letterSpacing"
     },
     "textTransform":{
        
     },
     "lineHeight":{
        "themeKey":"lineHeight"
     },
     "textAlign":{
        
     },
     "typography":{
        "cssProperty":false,
        "themeKey":"typography"
     }
  },
  "variants":{
     "plain":{
        "primary":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor, var(--joy-palette-primary-plainColor, var(--joy-palette-primary-500, #0B6BCB)))"
        },
        "neutral":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor, var(--joy-palette-neutral-plainColor, var(--joy-palette-neutral-700, #32383E)))"
        },
        "danger":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor, var(--joy-palette-danger-plainColor, var(--joy-palette-danger-500, #C41C1C)))"
        },
        "success":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor, var(--joy-palette-success-plainColor, var(--joy-palette-success-500, #1F7A1F)))"
        },
        "warning":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor, var(--joy-palette-warning-plainColor, var(--joy-palette-warning-500, #9A5B13)))"
        },
        "context":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-plainColor)"
        }
     },
     "plainHover":{
        "primary":{
           "backgroundColor":"var(--variant-plainHoverBg, var(--joy-palette-primary-plainHoverBg, var(--joy-palette-primary-100, #E3EFFB)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-plainHoverBg, var(--joy-palette-neutral-plainHoverBg, var(--joy-palette-neutral-100, #F0F4F8)))",
           "color":"var(--variant-plainHoverColor, var(--joy-palette-neutral-plainHoverColor, var(--joy-palette-neutral-900, #0B0D0E)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-plainHoverBg, var(--joy-palette-danger-plainHoverBg, var(--joy-palette-danger-100, #FCE4E4)))"
        },
        "success":{
           "backgroundColor":"var(--variant-plainHoverBg, var(--joy-palette-success-plainHoverBg, var(--joy-palette-success-100, #E3FBE3)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-plainHoverBg, var(--joy-palette-warning-plainHoverBg, var(--joy-palette-warning-100, #FDF0E1)))"
        },
        "context":{
           "color":"var(--variant-plainHoverColor)",
           "backgroundColor":"var(--variant-plainHoverBg)"
        }
     },
     "plainActive":{
        "primary":{
           "backgroundColor":"var(--variant-plainActiveBg, var(--joy-palette-primary-plainActiveBg, var(--joy-palette-primary-200, #C7DFF7)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-plainActiveBg, var(--joy-palette-neutral-plainActiveBg, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-plainActiveBg, var(--joy-palette-danger-plainActiveBg, var(--joy-palette-danger-200, #F7C5C5)))"
        },
        "success":{
           "backgroundColor":"var(--variant-plainActiveBg, var(--joy-palette-success-plainActiveBg, var(--joy-palette-success-200, #C7F7C7)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-plainActiveBg, var(--joy-palette-warning-plainActiveBg, var(--joy-palette-warning-200, #FCE1C2)))"
        },
        "context":{
           "backgroundColor":"var(--variant-plainActiveBg)"
        }
     },
     "plainDisabled":{
        "primary":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor, var(--joy-palette-primary-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))"
        },
        "neutral":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor, var(--joy-palette-neutral-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))"
        },
        "danger":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor, var(--joy-palette-danger-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))"
        },
        "success":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor, var(--joy-palette-success-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))"
        },
        "warning":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor, var(--joy-palette-warning-plainDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))"
        },
        "context":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-plainDisabledColor)"
        }
     },
     "outlined":{
        "primary":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor, var(--joy-palette-primary-outlinedColor, var(--joy-palette-primary-500, #0B6BCB)))",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder, var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0)))"
        },
        "neutral":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor, var(--joy-palette-neutral-outlinedColor, var(--joy-palette-neutral-700, #32383E)))",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder, var(--joy-palette-neutral-300, #CDD7E1)))"
        },
        "danger":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor, var(--joy-palette-danger-outlinedColor, var(--joy-palette-danger-500, #C41C1C)))",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder, var(--joy-palette-danger-outlinedBorder, var(--joy-palette-danger-300, #F09898)))"
        },
        "success":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor, var(--joy-palette-success-outlinedColor, var(--joy-palette-success-500, #1F7A1F)))",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder, var(--joy-palette-success-outlinedBorder, var(--joy-palette-success-300, #A1E8A1)))"
        },
        "warning":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor, var(--joy-palette-warning-outlinedColor, var(--joy-palette-warning-500, #9A5B13)))",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder, var(--joy-palette-warning-outlinedBorder, var(--joy-palette-warning-300, #F3C896)))"
        },
        "context":{
           "--variant-borderWidth":"1px",
           "color":"var(--variant-outlinedColor)",
           "border":"var(--variant-borderWidth) solid",
           "borderColor":"var(--variant-outlinedBorder)"
        }
     },
     "outlinedHover":{
        "primary":{
           "backgroundColor":"var(--variant-outlinedHoverBg, var(--joy-palette-primary-outlinedHoverBg, var(--joy-palette-primary-100, #E3EFFB)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-outlinedHoverBg, var(--joy-palette-neutral-outlinedHoverBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-outlinedHoverBg, var(--joy-palette-danger-outlinedHoverBg, var(--joy-palette-danger-100, #FCE4E4)))"
        },
        "success":{
           "backgroundColor":"var(--variant-outlinedHoverBg, var(--joy-palette-success-outlinedHoverBg, var(--joy-palette-success-100, #E3FBE3)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-outlinedHoverBg, var(--joy-palette-warning-outlinedHoverBg, var(--joy-palette-warning-100, #FDF0E1)))"
        },
        "context":{
           "color":"var(--variant-outlinedHoverColor)",
           "borderColor":"var(--variant-outlinedHoverBorder)",
           "backgroundColor":"var(--variant-outlinedHoverBg)"
        }
     },
     "outlinedActive":{
        "primary":{
           "backgroundColor":"var(--variant-outlinedActiveBg, var(--joy-palette-primary-outlinedActiveBg, var(--joy-palette-primary-200, #C7DFF7)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-outlinedActiveBg, var(--joy-palette-neutral-outlinedActiveBg, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-outlinedActiveBg, var(--joy-palette-danger-outlinedActiveBg, var(--joy-palette-danger-200, #F7C5C5)))"
        },
        "success":{
           "backgroundColor":"var(--variant-outlinedActiveBg, var(--joy-palette-success-outlinedActiveBg, var(--joy-palette-success-200, #C7F7C7)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-outlinedActiveBg, var(--joy-palette-warning-outlinedActiveBg, var(--joy-palette-warning-200, #FCE1C2)))"
        },
        "context":{
           "backgroundColor":"var(--variant-outlinedActiveBg)"
        }
     },
     "outlinedDisabled":{
        "primary":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor, var(--joy-palette-primary-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "borderColor":"var(--variant-outlinedDisabledBorder, var(--joy-palette-primary-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "neutral":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor, var(--joy-palette-neutral-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "borderColor":"var(--variant-outlinedDisabledBorder, var(--joy-palette-neutral-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "danger":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor, var(--joy-palette-danger-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "borderColor":"var(--variant-outlinedDisabledBorder, var(--joy-palette-danger-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "success":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor, var(--joy-palette-success-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "borderColor":"var(--variant-outlinedDisabledBorder, var(--joy-palette-success-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "warning":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor, var(--joy-palette-warning-outlinedDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "borderColor":"var(--variant-outlinedDisabledBorder, var(--joy-palette-warning-outlinedDisabledBorder, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "context":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-outlinedDisabledColor)",
           "borderColor":"var(--variant-outlinedDisabledBorder)"
        }
     },
     "soft":{
        "primary":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor, var(--joy-palette-primary-softColor, var(--joy-palette-primary-700, #12467B)))",
           "backgroundColor":"var(--variant-softBg, var(--joy-palette-primary-softBg, var(--joy-palette-primary-100, #E3EFFB)))"
        },
        "neutral":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor, var(--joy-palette-neutral-softColor, var(--joy-palette-neutral-700, #32383E)))",
           "backgroundColor":"var(--variant-softBg, var(--joy-palette-neutral-softBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "danger":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor, var(--joy-palette-danger-softColor, var(--joy-palette-danger-700, #7D1212)))",
           "backgroundColor":"var(--variant-softBg, var(--joy-palette-danger-softBg, var(--joy-palette-danger-100, #FCE4E4)))"
        },
        "success":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor, var(--joy-palette-success-softColor, var(--joy-palette-success-700, #0A470A)))",
           "backgroundColor":"var(--variant-softBg, var(--joy-palette-success-softBg, var(--joy-palette-success-100, #E3FBE3)))"
        },
        "warning":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor, var(--joy-palette-warning-softColor, var(--joy-palette-warning-700, #492B08)))",
           "backgroundColor":"var(--variant-softBg, var(--joy-palette-warning-softBg, var(--joy-palette-warning-100, #FDF0E1)))"
        },
        "context":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-softColor)",
           "backgroundColor":"var(--variant-softBg)"
        }
     },
     "softHover":{
        "primary":{
           "backgroundColor":"var(--variant-softHoverBg, var(--joy-palette-primary-softHoverBg, var(--joy-palette-primary-200, #C7DFF7)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-softHoverBg, var(--joy-palette-neutral-softHoverBg, var(--joy-palette-neutral-200, #DDE7EE)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-softHoverBg, var(--joy-palette-danger-softHoverBg, var(--joy-palette-danger-200, #F7C5C5)))"
        },
        "success":{
           "backgroundColor":"var(--variant-softHoverBg, var(--joy-palette-success-softHoverBg, var(--joy-palette-success-200, #C7F7C7)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-softHoverBg, var(--joy-palette-warning-softHoverBg, var(--joy-palette-warning-200, #FCE1C2)))"
        },
        "context":{
           "color":"var(--variant-softHoverColor)",
           "backgroundColor":"var(--variant-softHoverBg)"
        }
     },
     "softActive":{
        "primary":{
           "color":"var(--variant-softActiveColor, var(--joy-palette-primary-softActiveColor, var(--joy-palette-primary-800, #0A2744)))",
           "backgroundColor":"var(--variant-softActiveBg, var(--joy-palette-primary-softActiveBg, var(--joy-palette-primary-300, #97C3F0)))"
        },
        "neutral":{
           "color":"var(--variant-softActiveColor, var(--joy-palette-neutral-softActiveColor, var(--joy-palette-neutral-800, #171A1C)))",
           "backgroundColor":"var(--variant-softActiveBg, var(--joy-palette-neutral-softActiveBg, var(--joy-palette-neutral-300, #CDD7E1)))"
        },
        "danger":{
           "color":"var(--variant-softActiveColor, var(--joy-palette-danger-softActiveColor, var(--joy-palette-danger-800, #430A0A)))",
           "backgroundColor":"var(--variant-softActiveBg, var(--joy-palette-danger-softActiveBg, var(--joy-palette-danger-300, #F09898)))"
        },
        "success":{
           "color":"var(--variant-softActiveColor, var(--joy-palette-success-softActiveColor, var(--joy-palette-success-800, #042F04)))",
           "backgroundColor":"var(--variant-softActiveBg, var(--joy-palette-success-softActiveBg, var(--joy-palette-success-300, #A1E8A1)))"
        },
        "warning":{
           "color":"var(--variant-softActiveColor, var(--joy-palette-warning-softActiveColor, var(--joy-palette-warning-800, #2E1B05)))",
           "backgroundColor":"var(--variant-softActiveBg, var(--joy-palette-warning-softActiveBg, var(--joy-palette-warning-300, #F3C896)))"
        },
        "context":{
           "backgroundColor":"var(--variant-softActiveBg)"
        }
     },
     "softDisabled":{
        "primary":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor, var(--joy-palette-primary-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-softDisabledBg, var(--joy-palette-primary-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE)))"
        },
        "neutral":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor, var(--joy-palette-neutral-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-softDisabledBg, var(--joy-palette-neutral-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE)))"
        },
        "danger":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor, var(--joy-palette-danger-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-softDisabledBg, var(--joy-palette-danger-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE)))"
        },
        "success":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor, var(--joy-palette-success-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-softDisabledBg, var(--joy-palette-success-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE)))"
        },
        "warning":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor, var(--joy-palette-warning-softDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-softDisabledBg, var(--joy-palette-warning-softDisabledBg, var(--joy-palette-neutral-50, #FBFCFE)))"
        },
        "context":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-softDisabledColor)",
           "backgroundColor":"var(--variant-softDisabledBg)"
        }
     },
     "solid":{
        "primary":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor, var(--joy-palette-primary-solidColor, var(--joy-palette-common-white, #FFF)))",
           "backgroundColor":"var(--variant-solidBg, var(--joy-palette-primary-solidBg, var(--joy-palette-primary-500, #0B6BCB)))"
        },
        "neutral":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor, var(--joy-palette-neutral-solidColor, var(--joy-palette-common-white, #FFF)))",
           "backgroundColor":"var(--variant-solidBg, var(--joy-palette-neutral-solidBg, var(--joy-palette-neutral-500, #636B74)))"
        },
        "danger":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor, var(--joy-palette-danger-solidColor, var(--joy-palette-common-white, #FFF)))",
           "backgroundColor":"var(--variant-solidBg, var(--joy-palette-danger-solidBg, var(--joy-palette-danger-500, #C41C1C)))"
        },
        "success":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor, var(--joy-palette-success-solidColor, var(--joy-palette-common-white, #FFF)))",
           "backgroundColor":"var(--variant-solidBg, var(--joy-palette-success-solidBg, var(--joy-palette-success-500, #1F7A1F)))"
        },
        "warning":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor, var(--joy-palette-warning-solidColor, var(--joy-palette-common-white, #FFF)))",
           "backgroundColor":"var(--variant-solidBg, var(--joy-palette-warning-solidBg, var(--joy-palette-warning-500, #9A5B13)))"
        },
        "context":{
           "--variant-borderWidth":"0px",
           "color":"var(--variant-solidColor)",
           "backgroundColor":"var(--variant-solidBg)"
        }
     },
     "solidHover":{
        "primary":{
           "backgroundColor":"var(--variant-solidHoverBg, var(--joy-palette-primary-solidHoverBg, var(--joy-palette-primary-600, #185EA5)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-solidHoverBg, var(--joy-palette-neutral-solidHoverBg, var(--joy-palette-neutral-600, #555E68)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-solidHoverBg, var(--joy-palette-danger-solidHoverBg, var(--joy-palette-danger-600, #A51818)))"
        },
        "success":{
           "backgroundColor":"var(--variant-solidHoverBg, var(--joy-palette-success-solidHoverBg, var(--joy-palette-success-600, #136C13)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-solidHoverBg, var(--joy-palette-warning-solidHoverBg, var(--joy-palette-warning-600, #72430D)))"
        },
        "context":{
           "backgroundColor":"var(--variant-solidHoverBg)"
        }
     },
     "solidActive":{
        "primary":{
           "backgroundColor":"var(--variant-solidActiveBg, var(--joy-palette-primary-solidActiveBg, var(--joy-palette-primary-700, #12467B)))"
        },
        "neutral":{
           "backgroundColor":"var(--variant-solidActiveBg, var(--joy-palette-neutral-solidActiveBg, var(--joy-palette-neutral-700, #32383E)))"
        },
        "danger":{
           "backgroundColor":"var(--variant-solidActiveBg, var(--joy-palette-danger-solidActiveBg, var(--joy-palette-danger-700, #7D1212)))"
        },
        "success":{
           "backgroundColor":"var(--variant-solidActiveBg, var(--joy-palette-success-solidActiveBg, var(--joy-palette-success-700, #0A470A)))"
        },
        "warning":{
           "backgroundColor":"var(--variant-solidActiveBg, var(--joy-palette-warning-solidActiveBg, var(--joy-palette-warning-700, #492B08)))"
        },
        "context":{
           "backgroundColor":"var(--variant-solidActiveBg)"
        }
     },
     "solidDisabled":{
        "primary":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor, var(--joy-palette-primary-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-solidDisabledBg, var(--joy-palette-primary-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "neutral":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor, var(--joy-palette-neutral-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-solidDisabledBg, var(--joy-palette-neutral-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "danger":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor, var(--joy-palette-danger-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-solidDisabledBg, var(--joy-palette-danger-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "success":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor, var(--joy-palette-success-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-solidDisabledBg, var(--joy-palette-success-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "warning":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor, var(--joy-palette-warning-solidDisabledColor, var(--joy-palette-neutral-400, #9FA6AD)))",
           "backgroundColor":"var(--variant-solidDisabledBg, var(--joy-palette-warning-solidDisabledBg, var(--joy-palette-neutral-100, #F0F4F8)))"
        },
        "context":{
           "pointerEvents":"none",
           "cursor":"default",
           "--Icon-color":"currentColor",
           "color":"var(--variant-solidDisabledColor)",
           "backgroundColor":"var(--variant-solidDisabledBg)"
        }
     }
  },
  "palette":{
     "mode":"light",
     "primary":{
        "50":"#EDF5FD",
        "100":"#E3EFFB",
        "200":"#C7DFF7",
        "300":"#97C3F0",
        "400":"#4393E4",
        "500":"#0B6BCB",
        "600":"#185EA5",
        "700":"#12467B",
        "800":"#0A2744",
        "900":"#051423",
        "plainColor":"var(--joy-palette-primary-500, #0B6BCB)",
        "plainHoverBg":"var(--joy-palette-primary-100, #E3EFFB)",
        "plainActiveBg":"var(--joy-palette-primary-200, #C7DFF7)",
        "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedColor":"var(--joy-palette-primary-500, #0B6BCB)",
        "outlinedBorder":"var(--joy-palette-primary-300, #97C3F0)",
        "outlinedHoverBg":"var(--joy-palette-primary-100, #E3EFFB)",
        "outlinedActiveBg":"var(--joy-palette-primary-200, #C7DFF7)",
        "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softColor":"var(--joy-palette-primary-700, #12467B)",
        "softBg":"var(--joy-palette-primary-100, #E3EFFB)",
        "softHoverBg":"var(--joy-palette-primary-200, #C7DFF7)",
        "softActiveColor":"var(--joy-palette-primary-800, #0A2744)",
        "softActiveBg":"var(--joy-palette-primary-300, #97C3F0)",
        "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
        "solidColor":"var(--joy-palette-common-white, #FFF)",
        "solidBg":"var(--joy-palette-primary-500, #0B6BCB)",
        "solidHoverBg":"var(--joy-palette-primary-600, #185EA5)",
        "solidActiveBg":"var(--joy-palette-primary-700, #12467B)",
        "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "mainChannel":"11 107 203",
        "lightChannel":"199 223 247",
        "darkChannel":"18 70 123"
     },
     "neutral":{
        "50":"#FBFCFE",
        "100":"#F0F4F8",
        "200":"#DDE7EE",
        "300":"#CDD7E1",
        "400":"#9FA6AD",
        "500":"#636B74",
        "600":"#555E68",
        "700":"#32383E",
        "800":"#171A1C",
        "900":"#0B0D0E",
        "plainColor":"var(--joy-palette-neutral-700, #32383E)",
        "plainHoverBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "plainActiveBg":"var(--joy-palette-neutral-200, #DDE7EE)",
        "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedColor":"var(--joy-palette-neutral-700, #32383E)",
        "outlinedBorder":"var(--joy-palette-neutral-300, #CDD7E1)",
        "outlinedHoverBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "outlinedActiveBg":"var(--joy-palette-neutral-200, #DDE7EE)",
        "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softColor":"var(--joy-palette-neutral-700, #32383E)",
        "softBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "softHoverBg":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softActiveColor":"var(--joy-palette-neutral-800, #171A1C)",
        "softActiveBg":"var(--joy-palette-neutral-300, #CDD7E1)",
        "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
        "solidColor":"var(--joy-palette-common-white, #FFF)",
        "solidBg":"var(--joy-palette-neutral-500, #636B74)",
        "solidHoverBg":"var(--joy-palette-neutral-600, #555E68)",
        "solidActiveBg":"var(--joy-palette-neutral-700, #32383E)",
        "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "plainHoverColor":"var(--joy-palette-neutral-900, #0B0D0E)",
        "mainChannel":"99 107 116",
        "lightChannel":"221 231 238",
        "darkChannel":"50 56 62"
     },
     "danger":{
        "50":"#FEF6F6",
        "100":"#FCE4E4",
        "200":"#F7C5C5",
        "300":"#F09898",
        "400":"#E47474",
        "500":"#C41C1C",
        "600":"#A51818",
        "700":"#7D1212",
        "800":"#430A0A",
        "900":"#240505",
        "plainColor":"var(--joy-palette-danger-500, #C41C1C)",
        "plainHoverBg":"var(--joy-palette-danger-100, #FCE4E4)",
        "plainActiveBg":"var(--joy-palette-danger-200, #F7C5C5)",
        "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedColor":"var(--joy-palette-danger-500, #C41C1C)",
        "outlinedBorder":"var(--joy-palette-danger-300, #F09898)",
        "outlinedHoverBg":"var(--joy-palette-danger-100, #FCE4E4)",
        "outlinedActiveBg":"var(--joy-palette-danger-200, #F7C5C5)",
        "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softColor":"var(--joy-palette-danger-700, #7D1212)",
        "softBg":"var(--joy-palette-danger-100, #FCE4E4)",
        "softHoverBg":"var(--joy-palette-danger-200, #F7C5C5)",
        "softActiveColor":"var(--joy-palette-danger-800, #430A0A)",
        "softActiveBg":"var(--joy-palette-danger-300, #F09898)",
        "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
        "solidColor":"var(--joy-palette-common-white, #FFF)",
        "solidBg":"var(--joy-palette-danger-500, #C41C1C)",
        "solidHoverBg":"var(--joy-palette-danger-600, #A51818)",
        "solidActiveBg":"var(--joy-palette-danger-700, #7D1212)",
        "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "mainChannel":"196 28 28",
        "lightChannel":"247 197 197",
        "darkChannel":"125 18 18"
     },
     "success":{
        "50":"#F6FEF6",
        "100":"#E3FBE3",
        "200":"#C7F7C7",
        "300":"#A1E8A1",
        "400":"#51BC51",
        "500":"#1F7A1F",
        "600":"#136C13",
        "700":"#0A470A",
        "800":"#042F04",
        "900":"#021D02",
        "plainColor":"var(--joy-palette-success-500, #1F7A1F)",
        "plainHoverBg":"var(--joy-palette-success-100, #E3FBE3)",
        "plainActiveBg":"var(--joy-palette-success-200, #C7F7C7)",
        "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedColor":"var(--joy-palette-success-500, #1F7A1F)",
        "outlinedBorder":"var(--joy-palette-success-300, #A1E8A1)",
        "outlinedHoverBg":"var(--joy-palette-success-100, #E3FBE3)",
        "outlinedActiveBg":"var(--joy-palette-success-200, #C7F7C7)",
        "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softColor":"var(--joy-palette-success-700, #0A470A)",
        "softBg":"var(--joy-palette-success-100, #E3FBE3)",
        "softHoverBg":"var(--joy-palette-success-200, #C7F7C7)",
        "softActiveColor":"var(--joy-palette-success-800, #042F04)",
        "softActiveBg":"var(--joy-palette-success-300, #A1E8A1)",
        "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
        "solidColor":"var(--joy-palette-common-white, #FFF)",
        "solidBg":"var(--joy-palette-success-500, #1F7A1F)",
        "solidHoverBg":"var(--joy-palette-success-600, #136C13)",
        "solidActiveBg":"var(--joy-palette-success-700, #0A470A)",
        "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "mainChannel":"31 122 31",
        "lightChannel":"199 247 199",
        "darkChannel":"10 71 10"
     },
     "warning":{
        "50":"#FEFAF6",
        "100":"#FDF0E1",
        "200":"#FCE1C2",
        "300":"#F3C896",
        "400":"#EA9A3E",
        "500":"#9A5B13",
        "600":"#72430D",
        "700":"#492B08",
        "800":"#2E1B05",
        "900":"#1D1002",
        "plainColor":"var(--joy-palette-warning-500, #9A5B13)",
        "plainHoverBg":"var(--joy-palette-warning-100, #FDF0E1)",
        "plainActiveBg":"var(--joy-palette-warning-200, #FCE1C2)",
        "plainDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedColor":"var(--joy-palette-warning-500, #9A5B13)",
        "outlinedBorder":"var(--joy-palette-warning-300, #F3C896)",
        "outlinedHoverBg":"var(--joy-palette-warning-100, #FDF0E1)",
        "outlinedActiveBg":"var(--joy-palette-warning-200, #FCE1C2)",
        "outlinedDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "outlinedDisabledBorder":"var(--joy-palette-neutral-200, #DDE7EE)",
        "softColor":"var(--joy-palette-warning-700, #492B08)",
        "softBg":"var(--joy-palette-warning-100, #FDF0E1)",
        "softHoverBg":"var(--joy-palette-warning-200, #FCE1C2)",
        "softActiveColor":"var(--joy-palette-warning-800, #2E1B05)",
        "softActiveBg":"var(--joy-palette-warning-300, #F3C896)",
        "softDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "softDisabledBg":"var(--joy-palette-neutral-50, #FBFCFE)",
        "solidColor":"var(--joy-palette-common-white, #FFF)",
        "solidBg":"var(--joy-palette-warning-500, #9A5B13)",
        "solidHoverBg":"var(--joy-palette-warning-600, #72430D)",
        "solidActiveBg":"var(--joy-palette-warning-700, #492B08)",
        "solidDisabledColor":"var(--joy-palette-neutral-400, #9FA6AD)",
        "solidDisabledBg":"var(--joy-palette-neutral-100, #F0F4F8)",
        "mainChannel":"154 91 19",
        "lightChannel":"252 225 194",
        "darkChannel":"73 43 8"
     },
     "common":{
        "white":"#FFF",
        "black":"#000"
     },
     "text":{
        "primary":"var(--joy-palette-neutral-800, #171A1C)",
        "secondary":"var(--joy-palette-neutral-700, #32383E)",
        "tertiary":"var(--joy-palette-neutral-600, #555E68)",
        "icon":"var(--joy-palette-neutral-500, #636B74)"
     },
     "background":{
        "body":"var(--joy-palette-common-white, #FFF)",
        "surface":"var(--joy-palette-neutral-50, #FBFCFE)",
        "popup":"var(--joy-palette-common-white, #FFF)",
        "level1":"var(--joy-palette-neutral-100, #F0F4F8)",
        "level2":"var(--joy-palette-neutral-200, #DDE7EE)",
        "level3":"var(--joy-palette-neutral-300, #CDD7E1)",
        "tooltip":"var(--joy-palette-neutral-500, #636B74)",
        "backdrop":"rgba(var(--joy-palette-neutral-darkChannel, 11 13 14) / 0.25)"
     },
     "divider":"rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.2)",
     "focusVisible":"var(--joy-palette-primary-500, #0B6BCB)",
     "colorScheme":"light"
  },
  "shadowRing":"0 0 #000",
  "shadowChannel":"21 21 21",
  "shadowOpacity":"0.08"
} */


export const themeDefinition = extendTheme(themeOptions);

