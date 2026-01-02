<p align="center">
  <a href="https://lynxcode.apex7ai.com">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Lynx logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://discord.gg/lynx"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/lynx-ai"><img alt="npm" src="https://img.shields.io/npm/v/lynx-ai?style=flat-square" /></a>
  <a href="https://github.com/sst/lynx/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/sst/lynx/publish.yml?style=flat-square&branch=dev" /></a>
</p>

[![Lynx Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://lynxcode.apex7ai.com)

---

### Installation

```bash
# YOLO
curl -fsSL https://lynxcode.apex7ai.com/install | bash

# Package managers
npm i -g lynx-ai@latest        # or bun/pnpm/yarn
scoop bucket add extras; scoop install extras/lynx  # Windows
choco install lynx             # Windows
brew install lynx              # macOS and Linux
paru -S lynx-bin               # Arch Linux
mise use -g lynx               # Any OS
nix run nixpkgs#lynx           # or github:sst/lynx for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

Lynx is also available as a desktop application. Download directly from the [releases page](https://github.com/sst/lynx/releases) or [lynxcode.apex7ai.com/download](https://lynxcode.apex7ai.com/download).

| Platform              | Download                              |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `lynx-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `lynx-desktop-darwin-x64.dmg`     |
| Windows               | `lynx-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage           |

```bash
# macOS (Homebrew)
brew install --cask lynx-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$LYNX_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if exists or can be created)
4. `$HOME/.lynx/bin` - Default fallback

```bash
# Examples
LYNX_INSTALL_DIR=/usr/local/bin curl -fsSL https://lynxcode.apex7ai.com/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://lynxcode.apex7ai.com/install | bash
```

### Agents

Lynx includes two built-in agents you can switch between,
you can switch between these using the `Tab` key.

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also, included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://lynxcode.apex7ai.com/docs/agents).

### Documentation

For more info on how to configure Lynx [**head over to our docs**](https://lynxcode.apex7ai.com/docs).

### Contributing

If you're interested in contributing to Lynx, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on Lynx

If you are working on a project that's related to Lynx and is using "lynx" as a part of its name; for example, "lynx-dashboard" or "lynx-mobile", please add a note to your README to clarify that it is not built by the Lynx team and is not affiliated with us in any way.

### FAQ

#### How is this different from Claude Code?

It's very similar to Claude Code in terms of capability. Here are the key differences:

- 100% open source
- Not coupled to any provider. Although we recommend the models we provide through [Lynx Zen](https://lynxcode.apex7ai.com/zen); Lynx can be used with Claude, OpenAI, Google or even local models. As models evolve the gaps between them will close and pricing will drop so being provider-agnostic is important.
- Out of the box LSP support
- A focus on TUI. Lynx is built by neovim users and the creators of [terminal.shop](https://terminal.shop); we are going to push the limits of what's possible in the terminal.
- A client/server architecture. This for example can allow Lynx to run on your computer, while you can drive it remotely from a mobile app. Meaning that the TUI frontend is just one of the possible clients.

#### What's the other repo?

The other confusingly named repo has no relation to this one. You can [read the story behind it here](https://x.com/thdxr/status/1933561254481666466).

---

**Join our community** [Discord](https://discord.gg/lynx) | [X.com](https://x.com/lynx)
