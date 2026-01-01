# Guia de Implementação do Rebranding

## Implementação do Rebranding do OpenCode para Lynx

Este guia detalha passo a passo como implementar o rebranding do OpenCode para Lynx, mantendo todas as funcionalidades do sistema.

## 1. Preparação

### 1.1. Backup
Antes de começar, faça um backup do código:
```bash
git checkout -b rebrand-lynx
```

### 1.2. Planejamento
- Liste todos os arquivos que contêm referências a "opencode"
- Planeje a substituição de nomes, URLs e variáveis
- Prepare os novos domínios e endpoints (lynx.apex7ai.com)

## 2. Alterações nos Arquivos de Configuração

### 2.1. package.json
No arquivo `packages/opencode/package.json`, altere:
```json
{
  "name": "lynx",
  "bin": {
    "lynx": "./bin/lynx"
  }
}
```

### 2.2. Arquivo binário
Renomeie `packages/opencode/bin/opencode` para `packages/opencode/bin/lynx` e atualize:
- Todas as referências a "opencode" para "lynx"
- Caminho de instalação de `$HOME/.opencode/` para `$HOME/.lynx/`

## 3. Alterações nos Scripts de Build

### 3.1. script/build.ts
No arquivo `packages/opencode/script/build.ts`, altere:
- Variáveis que contêm "opencode" para "lynx"
- Nome do binário gerado de "opencode" para "lynx"
- Caminhos de distribuição para refletir o novo nome

## 4. Alterações nos Scripts de Instalação

### 4.1. install
No arquivo `install`:
- Altere `APP=opencode` para `APP=lynx`
- Mude o caminho de instalação de `$HOME/.opencode/bin` para `$HOME/.lynx/bin`
- Atualize URLs de download para usar `https://lynx.apex7ai.com`
- Atualize mensagens de saída para referenciar "lynx" em vez de "opencode"

## 5. Alterações nos Arquivos de Código Fonte

### 5.1. Arquivos principais
Atualize os seguintes arquivos:

#### src/global/index.ts
- Altere `const app = "opencode"` para `const app = "lynx"`

#### src/index.ts
- Altere `.scriptName("opencode")` para `.scriptName("lynx")`

#### src/installation/index.ts
- Atualize variáveis `VERSION`, `CHANNEL`, `USER_AGENT` para usar "lynx"
- Atualize o User-Agent para refletir o novo nome

### 5.2. Arquivos de configuração
#### src/config/config.ts
- Atualize URLs de esquema de `https://opencode.ai/config.json` para `https://lynx.apex7ai.com/config.json`

### 5.3. Arquivos de servidor
#### src/server/server.ts
- Atualize URLs e endpoints para usar o novo domínio
- Verifique referências a `opencode.ai` e substitua por `lynx.apex7ai.com`

## 6. Alterações nas Variáveis de Ambiente

Renomeie todas as variáveis de ambiente:

- `OPENCODE_VERSION` → `LYNX_VERSION`
- `OPENCODE_CHANNEL` → `LYNX_CHANNEL`
- `OPENCODE_BIN_PATH` → `LYNX_BIN_PATH`
- `OPENCODE_TEST_HOME` → `LYNX_TEST_HOME`
- `OPENCODE_DISABLE_MODELS_FETCH` → `LYNX_DISABLE_MODELS_FETCH`
- `OPENCODE_CLIENT` → `LYNX_CLIENT`
- `OPENCODE_CONFIG` → `LYNX_CONFIG`
- `OPENCODE_CONFIG_CONTENT` → `LYNX_CONFIG_CONTENT`
- `OPENCODE_CONFIG_DIR` → `LYNX_CONFIG_DIR`
- `OPENCODE_PERMISSION` → `LYNX_PERMISSION`
- `OPENCODE_DISABLE_AUTOCOMPACT` → `LYNX_DISABLE_AUTOCOMPACT`
- `OPENCODE_DISABLE_PRUNE` → `LYNX_DISABLE_PRUNE`
- `OPENCODE_ENABLE_EXPERIMENTAL_MODELS` → `LYNX_ENABLE_EXPERIMENTAL_MODELS`
- `OPENCODE_AUTO_SHARE` → `LYNX_AUTO_SHARE`

## 7. Alterações nos Arquivos de Prompt e Agentes

### 7.1. Atualização de Prompts
Atualize todos os arquivos de prompt em `src/agent/prompt/` e `src/agent/generate.txt` para remover referências ao nome antigo.

### 7.2. Atualização de Agentes
Verifique os arquivos de configuração de agentes para garantir que não contenham referências ao nome antigo.

## 8. Alterações nos Arquivos de Teste

Atualize todos os arquivos de teste para refletir o novo nome:
- Caminhos de configuração
- URLs de esquema
- Mensagens de saída
- Caminhos de diretórios temporários

## 9. Atualização de URLs e Endpoints

### 9.1. URLs Externas
- `https://opencode.ai/` → `https://lynx.apex7ai.com/`
- `https://api.opencode.ai/` → `https://lynx.apex7ai.com/api`
- `https://app.opencode.ai/` → `https://lynx.apex7ai.com/app`
- `https://models.dev/` → Verifique se precisa ser atualizado

### 9.2. URLs Internas
- Atualize todos os endpoints internos para usar o novo domínio
- Verifique chamadas de API e endpoints REST

## 10. Atualização de Caminhos de Arquivos

### 10.1. Diretórios de Configuração
- `$HOME/.opencode/` → `$HOME/.lynx/`
- Atualize todas as referências a esse caminho no código

### 10.2. Arquivos de Configuração
- Atualize referências a `.opencode` para `.lynx` em arquivos de configuração

## 11. Atualização de Documentação

### 11.1. README.md
- Atualize todos os comandos de `opencode` para `lynx`
- Atualize URLs e referências
- Atualize exemplos de uso

### 11.2. Outros Arquivos de Documentação
- Atualize CONTRIBUTING.md, STYLE_GUIDE.md, etc.
- Atualize qualquer documentação interna

## 12. Testes de Verificação

### 12.1. Build
Execute o build para verificar se tudo compila corretamente:
```bash
cd packages/opencode
bun run build
```

### 12.2. Execução Básica
Teste o binário gerado:
```bash
./dist/lynx-<platform>-<arch>/bin/lynx --version
./dist/lynx-<platform>-<arch>/bin/lynx --help
```

### 12.3. Funcionalidades Principais
Teste as funcionalidades principais:
- Servidor
- Comandos CLI
- Configurações
- Conexão com provedores de IA

## 13. Considerações Finais

### 13.1. Compatibilidade
- O sistema continuará funcionando com todas as funcionalidades
- Usuários existentes precisarão atualizar seus scripts e configurações
- Caminhos antigos precisarão ser migrados

### 13.2. Deploy
- Atualize os servidores com os novos binários
- Atualize as URLs e endpoints
- Comunique as mudanças aos usuários

### 13.3. Monitoramento
- Monitore logs para erros relacionados às mudanças
- Verifique se todas as funcionalidades estão operando corretamente
- Colete feedback dos usuários

## 14. Checklist de Implementação

Antes de finalizar, verifique:

- [ ] Todos os arquivos de configuração atualizados
- [ ] Scripts de build modificados
- [ ] Script de instalação atualizado
- [ ] Variáveis de ambiente renomeadas
- [ ] URLs e endpoints atualizados
- [ ] Caminhos de arquivos modificados
- [ ] Documentação atualizada
- [ ] Testes executados e passando
- [ ] Funcionalidades principais verificadas
- [ ] Build concluído com sucesso
- [ ] Binário renomeado e funcionando
- [ ] Servidor iniciando corretamente

## Conclusão

Após seguir este guia, você terá implementado com sucesso o rebranding do OpenCode para Lynx, mantendo todas as funcionalidades do sistema e atualizando todas as referências para o novo nome e domínio. O sistema continuará operando com a mesma robustez e funcionalidades, apenas com a nova identidade visual e de marca.