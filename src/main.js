import plugin from '../plugin.json';

const pluginId = plugin.id;
// const appSettings = acode.require('settings');
const fonts = acode.require('fonts');
// const { editor } = editorManager;

class Meslo {
  async init() {
    fonts.add(
      'MesloLGS NF',
      `@font-face {
        font-family: "MesloLGS NF";
        src: url("https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/MesloLGS%20NF%20Regular.ttf");
        font-weight: normal;
        font-style: normal;
      }`
    ),
    fonts.add(
      'MesloLGS NF Bold',
      `@font-face {
        font-family: "MesloLGS NF";
        src: url("https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/MesloLGS%20NF%20Bold.ttf");
        font-weight: bold;
        font-style: normal;
      }`
    ),
    setFont('MesloLGS NF');
  }
  async run() {}
  async destroy() {}
}

if (window.acode) {
  const acodePlugin = new Meslo();
  acode.setPluginInit(pluginId, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(pluginId, () => {
    acodePlugin.destroy();
  });
}
