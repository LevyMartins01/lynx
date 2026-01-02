export namespace Flag {
  export const LYNX_AUTO_SHARE = truthy("LYNX_AUTO_SHARE")
  export const LYNX_GIT_BASH_PATH = process.env["LYNX_GIT_BASH_PATH"]
  export const LYNX_CONFIG = process.env["LYNX_CONFIG"]
  export const LYNX_CONFIG_DIR = process.env["LYNX_CONFIG_DIR"]
  export const LYNX_CONFIG_CONTENT = process.env["LYNX_CONFIG_CONTENT"]
  export const LYNX_DISABLE_AUTOUPDATE = truthy("LYNX_DISABLE_AUTOUPDATE")
  export const LYNX_DISABLE_PRUNE = truthy("LYNX_DISABLE_PRUNE")
  export const LYNX_DISABLE_TERMINAL_TITLE = truthy("LYNX_DISABLE_TERMINAL_TITLE")
  export const LYNX_PERMISSION = process.env["LYNX_PERMISSION"]
  export const LYNX_DISABLE_DEFAULT_PLUGINS = truthy("LYNX_DISABLE_DEFAULT_PLUGINS")
  export const LYNX_DISABLE_LSP_DOWNLOAD = truthy("LYNX_DISABLE_LSP_DOWNLOAD")
  export const LYNX_ENABLE_EXPERIMENTAL_MODELS = truthy("LYNX_ENABLE_EXPERIMENTAL_MODELS")
  export const LYNX_DISABLE_AUTOCOMPACT = truthy("LYNX_DISABLE_AUTOCOMPACT")
  export const LYNX_DISABLE_MODELS_FETCH = truthy("LYNX_DISABLE_MODELS_FETCH")
  export const LYNX_FAKE_VCS = process.env["LYNX_FAKE_VCS"]
  export const LYNX_CLIENT = process.env["LYNX_CLIENT"] ?? "cli"

  // Experimental
  export const LYNX_EXPERIMENTAL = truthy("LYNX_EXPERIMENTAL")
  export const LYNX_EXPERIMENTAL_FILEWATCHER = truthy("LYNX_EXPERIMENTAL_FILEWATCHER")
  export const LYNX_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("LYNX_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const LYNX_EXPERIMENTAL_ICON_DISCOVERY =
    LYNX_EXPERIMENTAL || truthy("LYNX_EXPERIMENTAL_ICON_DISCOVERY")
  export const LYNX_EXPERIMENTAL_DISABLE_COPY_ON_SELECT = truthy("LYNX_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const LYNX_ENABLE_EXA =
    truthy("LYNX_ENABLE_EXA") || LYNX_EXPERIMENTAL || truthy("LYNX_EXPERIMENTAL_EXA")
  export const LYNX_EXPERIMENTAL_BASH_MAX_OUTPUT_LENGTH = number("LYNX_EXPERIMENTAL_BASH_MAX_OUTPUT_LENGTH")
  export const LYNX_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("LYNX_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const LYNX_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("LYNX_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const LYNX_EXPERIMENTAL_OXFMT = LYNX_EXPERIMENTAL || truthy("LYNX_EXPERIMENTAL_OXFMT")
  export const LYNX_EXPERIMENTAL_LSP_TY = truthy("LYNX_EXPERIMENTAL_LSP_TY")
  export const LYNX_EXPERIMENTAL_LSP_TOOL = LYNX_EXPERIMENTAL || truthy("LYNX_EXPERIMENTAL_LSP_TOOL")

  function truthy(key: string) {
    const value = process.env[key]?.toLowerCase()
    return value === "true" || value === "1"
  }

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}
