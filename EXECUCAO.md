# Executando o Projeto Lynx Após o Rebranding

## Visão Geral

O projeto OpenCode (que será rebranding para Lynx) pode ser executado de várias formas diferentes. Este guia explica como executar cada versão do aplicativo após as alterações de rebranding.

## 1. Executando a Versão CLI

### 1.1. Build e Execução Local

Após implementar as alterações de rebranding:

```bash
# Navegue até o diretório do pacote
cd packages/opencode

# Execute o build
bun run build

# Execute o binário gerado (exemplo para Linux x64)
./dist/lynx-linux-x64/bin/lynx --version
```

### 1.2. Execução em Desenvolvimento

Para executar diretamente do código-fonte:

```bash
# Execute o comando diretamente com bun
bun run --cwd packages/opencode --conditions=browser src/index.ts --version

# Ou use o script de desenvolvimento
bun run dev
```

## 2. Executando a Versão Web

### 2.1. Servidor Headless

Para iniciar o servidor Lynx:

```bash
# Iniciar o servidor Lynx
bun run --cwd packages/opencode --conditions=browser src/index.ts serve --port 4096

# Ou usando o script npm
bun run opencode serve --port 4096
```

### 2.2. Interface Web

Para iniciar a interface web:

```bash
# Iniciar a interface web
bun run --cwd packages/opencode --conditions=browser src/index.ts web --port 3000

# A interface web será aberta automaticamente no navegador
```

## 3. Executando a Versão Desktop

### 3.1. Executando em Desenvolvimento

```bash
# Navegue até o diretório do desktop
cd packages/desktop

# Instale as dependências
bun install

# Execute em modo de desenvolvimento
bun run dev
```

### 3.2. Build da Aplicação Desktop

```bash
# Execute o build da aplicação desktop
bun run build

# Para criar o instalador
bun run tauri build
```

## 4. Executando a Versão Web Completa

### 4.1. Executando o Site Web

```bash
# Navegue até o diretório web
cd packages/web

# Execute em modo de desenvolvimento
bun run dev

# Acesse http://localhost:4321 para ver o site
```

## 5. Verificando as Mudanças Após o Rebranding

### 5.1. Verificação da CLI

Execute os seguintes comandos para verificar se as mudanças estão corretas:

```bash
# Verifique o nome do comando
lynx --version

# Verifique a ajuda
lynx --help

# Verifique os caminhos de configuração
lynx path get

# Verifique as configurações
lynx config get
```

### 5.2. Verificação do Servidor

```bash
# Inicie o servidor
lynx serve --port 4096 &

# Teste o endpoint de saúde
curl http://localhost:4096/global/health

# Verifique se o nome aparece corretamente
lynx server event (em outro terminal)
```

### 5.3. Verificação da Interface Web

Após iniciar a interface web com `lynx web`, verifique:

- O nome "Lynx" aparece corretamente na interface
- As URLs usam o domínio correto
- Todos os recursos carregam corretamente
- As funcionalidades principais estão operacionais

## 6. Testando Funcionalidades Específicas

### 6.1. Testando Comandos

```bash
# Teste um comando simples
echo "Hello" | lynx run

# Teste a interação com o modelo
lynx run "What can you do?"

# Teste a inicialização de sessão
lynx run --session new "Initialize a new session"
```

### 6.2. Testando Configurações

```bash
# Verifique se as configurações estão sendo carregadas corretamente
lynx config get

# Teste a atualização de configurações
lynx config update '{"theme": "dark"}'
```

## 7. Depuração

### 7.1. Logs

Para ver logs detalhados:

```bash
# Com logs detalhados
lynx --log-level DEBUG --print-logs run "test"

# Ou defina variáveis de ambiente
OPENCODE_LOG_LEVEL=DEBUG lynx run "test"
```

### 7.2. Variáveis de Ambiente

Certifique-se de que as variáveis de ambiente estejam corretas:

```bash
# Verifique as variáveis de ambiente
env | grep -i lynx
```

## 8. Considerações Finais

- Após o rebranding, todos os comandos que antes usavam `opencode` devem usar `lynx`
- Os caminhos de configuração mudarão de `.opencode` para `.lynx`
- As URLs e endpoints devem refletir o novo domínio `lynx.apex7ai.com`
- A funcionalidade interna permanece a mesma - apenas a identidade visual e de marca muda

## 9. Solução de Problemas

### Problema: Comando não encontrado
- Verifique se o binário foi instalado corretamente
- Verifique se o caminho está no PATH

### Problema: Erros de configuração
- Verifique se os arquivos de configuração usam o novo nome
- Verifique se os caminhos de configuração estão corretos

### Problema: Interface não carrega
- Verifique se o servidor está rodando
- Verifique as URLs e endpoints
- Verifique os logs do servidor

Com essas instruções, você pode executar e testar todas as versões do projeto Lynx após o rebranding e verificar se todas as mudanças foram implementadas corretamente.