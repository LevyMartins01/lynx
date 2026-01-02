# Guia Rápido: Rebranding OpenCode para Lynx

## Visão Geral

Este guia resume o processo de rebranding do OpenCode para Lynx, mantendo as funcionalidades originais.

## Situação Atual

- O OpenCode está instalado globalmente e funcionando corretamente
- O comando `opencode` está disponível e funcional
- As alterações de rebranding foram feitas no código-fonte local
- Endpoints originais do OpenCode estão sendo usados para manter funcionalidades

## O que foi alterado no rebranding

### Elementos de Branding (Visuais)
- Nome do comando: `opencode` → `lynx`
- Nome do pacote: `opencode` → `lynx`
- Caminho de configuração: `~/.opencode/` → `~/.lynx/`
- Variáveis de ambiente: `OPENCODE_*` → `LYNX_*`
- Nome do binário: `opencode` → `lynx`

### Elementos mantidos (Funcionais)
- Endpoints de API: `https://api.opencode.ai/` (mantido original)
- Esquema de configuração: `https://opencode.ai/config.json` (mantido original)
- Documentação: `https://opencode.ai/docs` (mantido original)
- Provedores de IA e modelos (mantidos originais)

## Como testar o rebranding completo

### Pré-requisitos
1. Instalar Bun: `curl -fsSL https://bun.sh/install | bash`
2. Ter domínios configurados: `lynxcode.apex7ai.com`
3. Hospedar binários em repositório GitHub

### Passos para compilar
```bash
cd packages/opencode
./script/build.ts --single
```

### Instalação local
```bash
# Após compilar, usar o binário gerado
./dist/lynx-<plataforma>/bin/lynx --version
```

## Comandos úteis

### Testar funcionalidades atuais
```bash
opencode --version
opencode run "Hello World" --model opencode/grok-code
opencode models
```

### Verificar configurações
```bash
opencode config get
opencode path get
```

## Arquivos modificados

### Principais arquivos alterados
- `packages/opencode/package.json` - Nome do pacote e binário
- `packages/opencode/src/global/index.ts` - Nome do aplicativo
- `packages/opencode/src/index.ts` - Nome do script
- `packages/opencode/src/flag/flag.ts` - Variáveis de ambiente
- `packages/opencode/bin/opencode` - Script binário
- `install` - Script de instalação
- `README.md` - Documentação

## Status atual

- ✅ OpenCode instalado e funcional
- ✅ Código-fonte com alterações de rebranding salvas
- ✅ Endpoints mantidos para preservar funcionalidades
- ⏳ Aguardando hospedagem para endpoints Lynx
- ⏳ Aguardando compilação com Bun para testes completos

## Próximos passos

1. **Opcional**: Continuar usando OpenCode original para testes
2. **Quando pronto**: Instalar Bun e compilar versão Lynx
3. **Configurar**: Hospedar binários e endpoints Lynx
4. **Testar**: Funcionalidades com novo branding

## Dicas rápidas

- Para voltar ao estado original: reinstalar com `curl -fsSL https://opencode.ai/install | bash`
- Para testar rebranding: compilar com Bun após instalação
- Funcionalidades principais: modelos de IA, comandos, configurações
- O rebranding não afeta a arquitetura ou funcionalidades internas