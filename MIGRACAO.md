# Guia de Migração: De OpenCode para Lynx

## Visão Geral

Este guia ajuda usuários existentes do OpenCode a migrar para o Lynx após o rebranding. Este processo é necessário apenas se você estiver atualizando de uma versão existente do OpenCode para o Lynx.

## Diferenças Após o Rebranding

### 1. Nome do Comando
- **Antes**: `opencode`
- **Depois**: `lynx`

### 2. Caminhos de Configuração
- **Antes**: `$HOME/.opencode/`
- **Depois**: `$HOME/.lynx/`

### 3. Variáveis de Ambiente
- **Antes**: `OPENCODE_*`
- **Depois**: `LYNX_*`

### 4. URLs e Endpoints
- **Antes**: `https://opencode.ai/`
- **Depois**: `https://lynxcode.apex7ai.com/`

## Passos para Migração

### Passo 1: Remover Versão Antiga

Se você tiver o OpenCode instalado localmente:

```bash
# Remover instalação global (se aplicável)
npm uninstall -g opencode-ai
# ou
bun remove -g opencode-ai

# Remover diretório de configuração antigo (opcional)
rm -rf $HOME/.opencode
```

### Passo 2: Instalar Versão Nova

Use o novo nome para instalar:

```bash
# Usando bun
bun install -g lynx-ai@latest

# Ou usando npm
npm install -g lynx-ai@latest

# Ou usando o script de instalação atualizado
curl -fsSL https://lynxcode.apex7ai.com/install | bash
```

### Passo 3: Atualizar Scripts e Atalhos

Atualize quaisquer scripts, atalhos ou configurações que referenciem `opencode`:

```bash
# Antes
opencode run "Hello World"

# Depois
lynx run "Hello World"
```

### Passo 4: Atualizar Configurações Personalizadas

Se você tiver arquivos de configuração personalizados:

1. Mova arquivos de `$HOME/.opencode/` para `$HOME/.lynx/` se desejar mantê-los
2. Atualize referências a `opencode` para `lynx` nos arquivos de configuração
3. Atualize o `$schema` nos arquivos JSON para apontar para o novo endpoint

## Atualização de Scripts de Automação

### Exemplo de Atualização de Script

Antes:
```bash
#!/bin/bash
cd /path/to/project
opencode run "Execute tarefa"
```

Depois:
```bash
#!/bin/bash
cd /path/to/project
lynx run "Execute tarefa"
```

### Atualização de Arquivo de Configuração

Antes:
```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-3-5-sonnet"
}
```

Depois:
```json
{
  "$schema": "https://lynxcode.apex7ai.com/config.json",
  "model": "anthropic/claude-3-5-sonnet"
}
```

## Atualização de Variáveis de Ambiente

Se você usar variáveis de ambiente personalizadas:

Antes:
```bash
export OPENCODE_CONFIG_DIR="/path/to/config"
export OPENCODE_AUTO_SHARE=true
```

Depois:
```bash
export LYNX_CONFIG_DIR="/path/to/config"
export LYNX_AUTO_SHARE=true
```

## Verificação Pós-Migração

Após a migração, verifique se tudo está funcionando:

```bash
# Verifique a versão
lynx --version

# Verifique a ajuda
lynx --help

# Teste uma funcionalidade básica
lynx run "Teste de funcionamento"

# Verifique os caminhos
lynx path get
```

## Solução de Problemas

### Comando não encontrado
- Verifique se o novo binário está no PATH
- Execute `which lynx` para verificar o caminho

### Configurações não sendo carregadas
- Verifique se os arquivos de configuração estão no novo diretório `$HOME/.lynx/`
- Atualize os caminhos nos arquivos de configuração

### Erros de conexão
- Verifique se as URLs de API estão atualizadas
- Confirme que está usando o domínio correto: `https://lynxcode.apex7ai.com`

## Scripts de Migração Automática

### Script para Atualizar Arquivos de Configuração

```bash
#!/bin/bash
# Script para atualizar referências em arquivos de configuração

# Atualizar referências em arquivos JSON
find $HOME/.lynx -name "*.json" -exec sed -i 's/https:\/\/opencode\.ai/https:\/\/lynxcode.apex7ai.com/g' {} \;

# Atualizar referências em arquivos de configuração
find $HOME/.lynx -name "*.jsonc" -exec sed -i 's/https:\/\/opencode\.ai/https:\/\/lynxcode.apex7ai.com/g' {} \;
```

## Considerações Finais

- A funcionalidade do sistema permanece exatamente a mesma após o rebranding
- Apenas nomes, URLs e identificadores visuais mudam
- Todos os provedores de IA e funcionalidades continuam operacionais
- O sistema de plugins e extensibilidade é preservado

## Suporte

Se encontrar problemas durante a migração:

1. Verifique se está usando os comandos corretos com o novo nome
2. Confirme que as URLs e endpoints estão atualizados
3. Consulte a documentação atualizada em `https://lynxcode.apex7ai.com/docs`
4. Entre em contato com o suporte se precisar de assistência adicional

## Rollback (se necessário)

Se por qualquer motivo você precisar voltar ao OpenCode:

1. Desinstale o Lynx: `bun remove -g lynx-ai`
2. Reinstale o OpenCode: `bun install -g opencode-ai@latest`
3. Restaure o diretório de configuração antigo se necessário