# Rebranding do OpenCode para Lynx

## Visão Geral

Este documento descreve o processo necessário para rebranding do OpenCode para Lynx, mantendo todas as funcionalidades existentes do sistema e utilizando o domínio existente lynx.apex7ai.com.

## Componentes que precisam ser modificados

### 1. Arquivos de Configuração e Pacotes

- **package.json**: O nome do pacote precisa ser alterado de `opencode` para `lynx`
- **package-lock.json** ou **bun.lock**: Atualizar referências após mudança de nome
- **Nome do binário**: Alterar de `opencode` para `lynx` em todos os scripts

### 2. Scripts de Build

No arquivo `packages/opencode/script/build.ts`, os seguintes elementos precisam ser alterados:

- Variáveis que contêm o nome `opencode` devem ser atualizadas para `lynx`
- O nome do binário gerado (`opencode`) deve ser alterado para `lynx`
- Referências ao nome do pacote nos arquivos de distribuição

### 3. Scripts de Instalação

No arquivo `install`, as seguintes alterações são necessárias:

- Variável `APP` deve mudar de `opencode` para `lynx`
- Caminho de instalação deve mudar de `$HOME/.opencode/` para `$HOME/.lynx/`
- Mensagens de log e saída devem refletir o novo nome
- URLs de download devem ser atualizadas para `https://lynx.apex7ai.com`

### 4. Código Fonte

Vários arquivos contêm referências ao nome `opencode`:

- **src/installation/index.ts**: Variáveis `VERSION`, `CHANNEL`, `USER_AGENT` contêm referências a `opencode`
- **src/index.ts**: O nome do script no yargs precisa ser alterado
- **src/cli/ui.ts**: Mensagens de interface que contêm o nome `opencode`
- **Arquivos de prompt e agentes**: Mensagens que referenciam o nome do sistema

### 5. URLs e Endpoints

- `https://opencode.ai/` → `https://lynx.apex7ai.com/`
- `https://api.opencode.ai/` → `https://lynx.apex7ai.com/api`
- `https://app.opencode.ai/` → `https://lynx.apex7ai.com/app`
- Esquemas de configuração: `https://opencode.ai/config.json` → `https://lynx.apex7ai.com/config.json`

### 6. Variáveis de Ambiente e Constantes

- Variáveis como `OPENCODE_VERSION`, `OPENCODE_CHANNEL` podem ser renomeadas para `LYNX_VERSION`, `LYNX_CHANNEL`
- Constantes relacionadas ao nome do projeto precisam ser atualizadas

### 7. Caminhos e Diretórios

- Diretórios de configuração: `$HOME/.opencode/` → `$HOME/.lynx/`
- Caminhos de cache e dados persistentes
- Referências a caminhos no sistema de arquivos

### 8. Documentação

- Atualizar README.md e outros arquivos de documentação
- Atualizar exemplos de uso e comandos
- Atualizar URLs e referências a domínios

## Lista Completa de Arquivos que Contêm Referências a "opencode"

### Arquivos de Configuração
- `packages/opencode/bin/opencode` - Contém referências ao nome do binário e caminhos
- `packages/opencode/package.json` - Nome do pacote e caminho do binário
- `packages/opencode/src/global/index.ts` - Nome do aplicativo e variáveis de ambiente
- `packages/opencode/src/index.ts` - Nome do script no yargs e variáveis de ambiente

### Arquivos de Código Fonte
- `packages/opencode/src/mcp/index.ts` - Referências a comandos e nome do aplicativo
- `packages/opencode/src/installation/index.ts` - Variáveis de versão e canal
- `packages/opencode/src/config/config.ts` - URLs e referências a esquemas de configuração
- `packages/opencode/src/server/server.ts` - URLs e referências a endpoints
- `packages/opencode/src/cli/cmd/*` - Comandos CLI que referenciam o nome do aplicativo
- `packages/opencode/src/agent/*` - Prompts e configurações de agentes
- `packages/opencode/src/session/*` - Componentes de sessão
- `packages/opencode/src/provider/*` - Provedores e modelos
- `packages/opencode/src/util/*` - Utilitários
- `packages/opencode/src/lsp/*` - Serviços de linguagem
- `packages/opencode/src/permission/*` - Sistema de permissões
- `packages/opencode/src/project/*` - Componentes de projeto
- `packages/opencode/src/file/*` - Componentes de arquivo
- `packages/opencode/src/format/*` - Componentes de formatação
- `packages/opencode/src/auth/*` - Componentes de autenticação
- `packages/opencode/src/command/*` - Componentes de comando
- `packages/opencode/src/plugin/*` - Componentes de plugin
- `packages/opencode/src/tool/*` - Componentes de ferramentas
- `packages/opencode/src/bus/*` - Componentes de eventos
- `packages/opencode/src/pty/*` - Componentes de terminal
- `packages/opencode/src/snapshot/*` - Componentes de snapshot
- `packages/opencode/src/storage/*` - Componentes de armazenamento
- `packages/opencode/src/tui/*` - Componentes de interface TUI

### Arquivos de Teste
- `packages/opencode/test/*` - Muitos arquivos de teste contêm referências a caminhos e nomes de configuração

### Arquivos de Prompt e Agentes
- `packages/opencode/src/agent/prompt/*` - Prompts de agentes
- `packages/opencode/src/agent/generate.txt` - Prompt de geração de agentes

## Variáveis de Ambiente Específicas

- `OPENCODE_BIN_PATH` → `LYNX_BIN_PATH`
- `OPENCODE_TEST_HOME` → `LYNX_TEST_HOME`
- `OPENCODE_DISABLE_MODELS_FETCH` → `LYNX_DISABLE_MODELS_FETCH`
- `OPENCODE_VERSION` → `LYNX_VERSION`
- `OPENCODE_CHANNEL` → `LYNX_CHANNEL`
- `OPENCODE_CLIENT` → `LYNX_CLIENT`
- `OPENCODE_CONFIG` → `LYNX_CONFIG`
- `OPENCODE_CONFIG_CONTENT` → `LYNX_CONFIG_CONTENT`
- `OPENCODE_CONFIG_DIR` → `LYNX_CONFIG_DIR`
- `OPENCODE_PERMISSION` → `LYNX_PERMISSION`
- `OPENCODE_DISABLE_AUTOCOMPACT` → `LYNX_DISABLE_AUTOCOMPACT`
- `OPENCODE_DISABLE_PRUNE` → `LYNX_DISABLE_PRUNE`
- `OPENCODE_DISABLE_MODELS_FETCH` → `LYNX_DISABLE_MODELS_FETCH`
- `OPENCODE_ENABLE_EXPERIMENTAL_MODELS` → `LYNX_ENABLE_EXPERIMENTAL_MODELS`
- `OPENCODE_AUTO_SHARE` → `LYNX_AUTO_SHARE`

## Como Verificar se as Configurações estão Corretas

### 1. Teste de Build
Após as alterações, execute:
```bash
bun run build
```

### 2. Teste de Execução
Execute o binário resultante:
```bash
./dist/lynx-<platform>-<arch>/bin/lynx --version
```

### 3. Teste de Funcionalidade Básica
Verifique se os comandos básicos funcionam:
```bash
lynx --help
```

### 4. Teste de Configuração
Verifique se as configurações são carregadas corretamente:
```bash
lynx config get
```

## Impacto no Sistema

### Positivo
- O sistema mantém toda sua funcionalidade
- A arquitetura cliente-servidor permanece inalterada
- Todos os provedores de IA e funcionalidades continuam operacionais
- O sistema de plugins e extensibilidade é preservado

### Considerações de Compatibilidade
- Usuários existentes terão que atualizar seus caminhos e configurações
- Scripts de automação que usam `opencode` precisarão ser atualizados
- Configurações personalizadas (arquivos `.opencode/`) precisarão ser migradas

## Processo de Implementação

### Etapa 1: Preparação
1. Criar branch de desenvolvimento para o rebranding
2. Atualizar todos os nomes de pacotes e referências
3. Testar build localmente

### Etapa 2: Atualização de Código
1. Modificar todos os arquivos com referências a `opencode`
2. Atualizar scripts de build e instalação
3. Atualizar constantes e variáveis
4. Substituir URLs para usar `https://lynx.apex7ai.com`

### Etapa 3: Testes
1. Verificar build em diferentes plataformas (Linux, macOS, Windows)
2. Testar instalação e execução do binário
3. Validar todas as funcionalidades principais
4. Verificar se as chamadas de API usam o domínio correto

### Etapa 4: Documentação
1. Atualizar documentação de instalação
2. Atualizar exemplos e tutoriais
3. Preparar guia de migração para usuários existentes

## Conclusão

O rebranding do OpenCode para Lynx é tecnicamente viável e não afeta a funcionalidade do sistema. A maioria das alterações são cosméticas e envolvem substituição de nomes e caminhos. A arquitetura robusta do OpenCode permite essa transição com poucas mudanças estruturais.

O sistema mantém:
- Sua arquitetura cliente-servidor
- Suporte a múltiplos provedores de IA
- Sistema de plugins e extensibilidade
- Funcionalidades de TUI e CLI
- Todos os recursos de segurança e permissões

Você pode usar seu domínio existente `lynx.apex7ai.com` para hospedar o sistema após o rebranding. O sistema não será quebrado com as alterações - apenas os nomes e URLs visuais serão atualizados.