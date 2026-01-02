# Resumo do Rebranding: OpenCode para Lynx

## O que foi feito

Este documento resume as principais alterações realizadas no processo de rebranding do OpenCode para Lynx, mantendo todas as funcionalidades do sistema.

### 1. Alterações de Nomenclatura

- Nome do comando: `opencode` → `lynx`
- Nome do pacote: `opencode-ai` → `lynx-ai`
- Variáveis de ambiente: `OPENCODE_*` → `LYNX_*`
- Caminhos de configuração: `$HOME/.opencode/` → `$HOME/.lynx/`
- URLs: `https://opencode.ai/` → `https://lynxcode.apex7ai.com/`

### 2. Atualizações de Interface

- Título do terminal TUI: "OpenCode" → "Lynx"
- Descrição do aplicativo: "OpenCode - The open source coding agent" → "Lynx - The open source coding agent"
- Tema OpenCode → Tema Lynx
- Outras referências à interface do usuário

### 3. Atualizações de Código

- Substituição de todas as referências a `Flag.OPENCODE_*` por `Flag.LYNX_*`
- Atualização de variáveis de ambiente e flags
- Correção de erros de typecheck relacionados às variáveis antigas

### 4. Funcionalidades Mantidas

- Todos os provedores de IA continuam funcionando
- Sistema de plugins e extensibilidade preservado
- Arquitetura cliente-servidor inalterada
- Todos os comandos e funcionalidades mantidos

## Como usar o Lynx após o rebranding

### Instalação

```bash
curl -fsSL https://lynxcode.apex7ai.com/install | bash
```

### Comandos

Após a instalação, use o comando `lynx` em vez de `opencode`:

```bash
lynx --help
lynx run "Hello World"
lynx serve
lynx web
```

## Modelo de Negócio

O Lynx é baseado no OpenCode, que oferece:

- Funcionalidade gratuita para uso pessoal
- Integração com provedores de IA existentes
- Recomendação do Zen (serviço pago de modelos otimizados) para melhor desempenho
- O Zen adiciona uma pequena taxa de processamento de pagamento para cobrir custos

## Considerações Finais

O rebranding do OpenCode para Lynx foi realizado com sucesso, mantendo todas as funcionalidades do sistema original. O código-fonte está completamente atualizado para refletir a nova identidade visual e de marca, mas a arquitetura e funcionalidades permanecem intactas.