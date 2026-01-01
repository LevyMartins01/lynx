# Checklist de Implementação do Rebranding

## Preparação

- [ ] Fazer backup do código original
- [ ] Criar branch de desenvolvimento: `git checkout -b rebrand-lynx`
- [ ] Ler todos os guias criados (REBRANDING.md, IMPLEMENTACAO.md, EXECUCAO.md, VERIFICACAO.md, GUia_FINAL.md)

## Etapa 1: Modificações de Nomenclatura

### Arquivos de Configuração
- [ ] `packages/opencode/package.json` - Alterar nome do pacote de "opencode" para "lynx"
- [ ] `packages/opencode/package.json` - Alterar binário de "opencode" para "lynx"
- [ ] `packages/opencode/bin/opencode` - Renomear para `packages/opencode/bin/lynx`
- [ ] Atualizar conteúdo do arquivo binário para refletir o novo nome

### Scripts de Build
- [ ] `packages/opencode/script/build.ts` - Atualizar referências de "opencode" para "lynx"
- [ ] Garantir que os binários gerados tenham o nome "lynx" em vez de "opencode"

### Script de Instalação
- [ ] `install` - Alterar variável APP de "opencode" para "lynx"
- [ ] Atualizar caminho de instalação de `$HOME/.opencode/bin` para `$HOME/.lynx/bin`
- [ ] Atualizar URLs para usar `https://lynxcode.apex7ai.com`
- [ ] Atualizar todas as mensagens de saída para referenciar "lynx"

## Etapa 2: Modificações de Código Fonte

### Arquivos Principais
- [ ] `packages/opencode/src/global/index.ts` - Alterar `const app = "opencode"` para `const app = "lynx"`
- [ ] `packages/opencode/src/index.ts` - Alterar `.scriptName("opencode")` para `.scriptName("lynx")`
- [ ] `packages/opencode/src/installation/index.ts` - Atualizar variáveis VERSION, CHANNEL, USER_AGENT
- [ ] `packages/opencode/src/config/config.ts` - Atualizar URLs de esquema
- [ ] `packages/opencode/src/server/server.ts` - Atualizar URLs e endpoints

### Arquivos de Serviços
- [ ] `packages/opencode/src/mcp/index.ts` - Atualizar referências
- [ ] `packages/opencode/src/cli/cmd/serve.ts` - Atualizar mensagem de inicialização
- [ ] `packages/opencode/src/cli/cmd/web.ts` - Atualizar mensagem de inicialização

## Etapa 3: Modificações de Variáveis de Ambiente

- [ ] `OPENCODE_VERSION` → `LYNX_VERSION`
- [ ] `OPENCODE_CHANNEL` → `LYNX_CHANNEL`
- [ ] `OPENCODE_BIN_PATH` → `LYNX_BIN_PATH`
- [ ] `OPENCODE_TEST_HOME` → `LYNX_TEST_HOME`
- [ ] `OPENCODE_DISABLE_MODELS_FETCH` → `LYNX_DISABLE_MODELS_FETCH`
- [ ] `OPENCODE_CLIENT` → `LYNX_CLIENT`
- [ ] `OPENCODE_CONFIG` → `LYNX_CONFIG`
- [ ] `OPENCODE_CONFIG_CONTENT` → `LYNX_CONFIG_CONTENT`
- [ ] `OPENCODE_CONFIG_DIR` → `LYNX_CONFIG_DIR`
- [ ] `OPENCODE_PERMISSION` → `LYNX_PERMISSION`
- [ ] `OPENCODE_DISABLE_AUTOCOMPACT` → `LYNX_DISABLE_AUTOCOMPACT`
- [ ] `OPENCODE_DISABLE_PRUNE` → `LYNX_DISABLE_PRUNE`
- [ ] `OPENCODE_ENABLE_EXPERIMENTAL_MODELS` → `LYNX_ENABLE_EXPERIMENTAL_MODELS`
- [ ] `OPENCODE_AUTO_SHARE` → `LYNX_AUTO_SHARE`

## Etapa 4: Modificações de Caminhos e Diretórios

- [ ] `$HOME/.opencode/` → `$HOME/.lynx/` em todos os arquivos
- [ ] Atualizar referências a `.opencode` para `.lynx`
- [ ] Verificar arquivos de configuração e cache

## Etapa 5: Modificações de URLs e Endpoints

- [ ] `https://opencode.ai/` → `https://lynxcode.apex7ai.com/`
- [ ] `https://api.opencode.ai/` → `https://lynxcode.apex7ai.com/api`
- [ ] `https://app.opencode.ai/` → `https://lynxcode.apex7ai.com/app`
- [ ] `https://opencode.ai/config.json` → `https://lynxcode.apex7ai.com/config.json`

## Etapa 6: Modificações de Arquivos de Prompt e Agentes

- [ ] Atualizar todos os arquivos em `packages/opencode/src/agent/prompt/`
- [ ] Atualizar `packages/opencode/src/agent/generate.txt`
- [ ] Verificar outros arquivos de prompt

## Etapa 7: Modificações de Arquivos de Teste

- [ ] Atualizar todos os arquivos de teste para refletir o novo nome
- [ ] Garantir que os testes continuem passando

## Etapa 8: Build e Teste

- [ ] Executar `bun run build` para gerar os binários
- [ ] Verificar se os binários gerados têm o nome correto
- [ ] Testar o binário com `./dist/lynx-<plataforma>/bin/lynx --version`
- [ ] Testar funcionalidades básicas
- [ ] Verificar se o servidor inicia corretamente
- [ ] Testar a interface web

## Etapa 9: Atualização de Documentação

- [ ] Atualizar README.md com novos comandos
- [ ] Atualizar CONTRIBUTING.md se necessário
- [ ] Atualizar STYLE_GUIDE.md se necessário
- [ ] Atualizar qualquer outro arquivo de documentação

## Etapa 10: Verificação Final

- [ ] Executar todos os testes e garantir que passem
- [ ] Verificar se todas as funcionalidades principais estão operacionais
- [ ] Confirmar que as URLs e endpoints estão corretos
- [ ] Verificar se as variáveis de ambiente estão funcionando
- [ ] Testar a instalação com o script atualizado
- [ ] Verificar se a interface TUI mostra o nome correto

## Etapa 11: Desktop e Web

- [ ] Atualizar `packages/desktop/src-tauri/tauri.conf.json` - productName, identifier, mainBinaryName
- [ ] Atualizar ícones e recursos do desktop se necessário
- [ ] Verificar se a aplicação desktop compila e executa corretamente
- [ ] Atualizar referências no pacote web se necessário

## Pós-Implementação

- [ ] Fazer commit das alterações
- [ ] Testar build em diferentes plataformas
- [ ] Verificar compatibilidade com diferentes arquiteturas
- [ ] Documentar quaisquer peculiaridades encontradas
- [ ] Preparar guia de migração para usuários existentes (se aplicável)

## Validação Final

- [ ] O comando `lynx --version` funciona e mostra a versão correta
- [ ] O comando `lynx --help` mostra informações com o nome correto
- [ ] O servidor inicia com `lynx serve`
- [ ] A interface web funciona com `lynx web`
- [ ] Todas as funcionalidades principais estão operacionais
- [ ] As configurações são carregadas corretamente
- [ ] Os logs mostram o nome correto
- [ ] As URLs usam o domínio correto (lynxcode.apex7ai.com)