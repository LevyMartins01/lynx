# Guia Completo: Execução e Rebranding do OpenCode para Lynx

## 1. Executando o Projeto Atual (OpenCode)

### 1.1. Instalação das Dependências
```bash
cd /home/levy/projetos/opencode
bun install
```

### 1.2. Executando em Modo de Desenvolvimento
```bash
# Executa o OpenCode em modo de desenvolvimento
bun dev

# Ou para executar em um diretório específico
bun dev <diretorio>

# Para executar no diretório raiz
bun dev .
```

### 1.3. Executando Comandos Específicos
```bash
# Executa o OpenCode com um comando específico
bun run --cwd packages/opencode --conditions=browser src/index.ts --help

# Inicia o servidor
bun run --cwd packages/opencode --conditions=browser src/index.ts serve

# Inicia a interface web
bun run --cwd packages/opencode --conditions=browser src/index.ts web
```

### 1.4. Build do Executável
```bash
# Compila um executável standalone
./packages/opencode/script/build.ts --single

# Executa o binário gerado
./packages/opencode/dist/opencode-<plataforma>/bin/opencode --version
```

## 2. Rebranding do OpenCode para Lynx

### 2.1. Após a Instalação
Você **não precisa** reinstalar dependências após fazer as alterações de rebranding. As dependências instaladas permanecem válidas para o projeto modificado.

### 2.2. Arquivos que Precisam Ser Modificados
Conforme detalhado nos documentos anteriores:
- package.json (nome do pacote)
- Scripts de build
- Script de instalação
- Arquivos de código fonte (substituir "opencode" por "lynx")
- URLs e endpoints
- Variáveis de ambiente
- Caminhos de configuração
- Arquivos de prompt e agentes

### 2.3. Novo Domínio
- Atualizar URLs de `https://opencode.ai` para `https://lynxcode.apex7ai.com`

## 3. Executando Após o Rebranding

### 3.1. Execução Local
```bash
# Executa o Lynx em modo de desenvolvimento
bun dev

# Ou com o comando diretamente
bun run --cwd packages/opencode --conditions=browser src/index.ts --help

# Testa o comando renomeado
./packages/opencode/dist/lynx-<plataforma>/bin/lynx --version
```

### 3.2. Verificação Pós-Rebranding
```bash
# Verifica se o nome aparece corretamente
lynx --version

# Verifica a ajuda
lynx --help

# Testa funcionalidades básicas
lynx run "Hello World"
```

## 4. Considerações Importantes

### 4.1. Dependências
- As dependências instaladas com `bun install` permanecem válidas após o rebranding
- Você não precisa reinstalar dependências após as alterações de nome
- Apenas o código e configurações visuais mudam, não a estrutura de dependências

### 4.2. Caminhos e Configurações
- Diretórios de configuração mudam de `$HOME/.opencode/` para `$HOME/.lynx/`
- Variáveis de ambiente mudam de `OPENCODE_*` para `LYNX_*`
- URLs mudam de `https://opencode.ai/` para `https://lynxcode.apex7ai.com/`

### 4.3. Funcionalidades
- Todas as funcionalidades permanecem intactas após o rebranding
- A arquitetura cliente-servidor se mantém
- Todos os provedores de IA continuam funcionando
- O sistema de plugins e extensibilidade é preservado

## 5. Processo Completo

1. **Instale as dependências**: `bun install`
2. **Execute para testar o estado atual**: `bun dev`
3. **Faça as alterações de rebranding** (conforme guias anteriores)
4. **Execute novamente para testar as mudanças**: `bun dev` ou o executável gerado
5. **Verifique se tudo funciona corretamente**

## Conclusão

Você pode instalar as dependências uma vez e então fazer todas as alterações de rebranding sem precisar reinstalar nada. O sistema é robusto o suficiente para manter todas as funcionalidades após as alterações cosméticas de nome e identidade visual.