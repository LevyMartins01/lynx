# Guia de Verificação do Rebranding

## Como Verificar se as Configurações do Lynx estão Corretas

Este guia descreve como verificar se o rebranding do OpenCode para Lynx foi realizado com sucesso e se todas as configurações estão funcionando corretamente.

## 1. Verificação de Build

### Passo 1: Build do Projeto
```bash
cd packages/opencode
bun run build
```

Verifique se:
- O build é concluído sem erros
- Os binários gerados têm o nome `lynx` em vez de `opencode`
- Os caminhos de distribuição refletem o novo nome

### Passo 2: Verificação dos Arquivos Gerados
```bash
ls -la dist/
```

Verifique se:
- Os diretórios têm nomes como `lynx-linux-x64`, `lynx-darwin-arm64`, etc.
- Os binários dentro dos diretórios têm o nome correto

## 2. Verificação de Execução

### Passo 1: Teste de Versão
```bash
# Execute o binário gerado para sua plataforma
./dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx --version
```

Verifique se:
- O comando executa sem erros
- A versão é exibida corretamente
- O nome do aplicativo aparece como "lynx"

### Passo 2: Teste de Ajuda
```bash
./dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx --help
```

Verifique se:
- A ajuda é exibida corretamente
- O nome do aplicativo aparece como "lynx"
- Todos os comandos estão disponíveis

## 3. Verificação de Configuração

### Passo 1: Teste de Inicialização
```bash
# Crie um diretório temporário para testar
mkdir -p /tmp/teste-lynx && cd /tmp/teste-lynx
../dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx config get
```

Verifique se:
- O comando executa sem erros
- As configurações padrão são exibidas
- Os caminhos de configuração refletem o novo nome

### Passo 2: Verificação de Caminhos
```bash
# Verifique os caminhos usados pelo sistema
../dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx path get
```

Verifique se:
- Os caminhos de configuração usam `.lynx` em vez de `.opencode`
- Os diretórios de dados e cache estão corretos

## 4. Verificação de Funcionalidades

### Passo 1: Teste de Servidor
```bash
# Inicie o servidor Lynx
../dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx serve --port 4097
```

Verifique se:
- O servidor inicia sem erros
- A API está acessível em `http://localhost:4097`
- Os endpoints funcionam corretamente

### Passo 2: Teste de API
```bash
# Em outro terminal, teste o endpoint de saúde
curl http://localhost:4097/global/health
```

Verifique se:
- A resposta é 200 OK
- A resposta contém `{ "healthy": true, "version": "..." }`
- A versão está correta

## 5. Verificação de URLs e Endpoints

### Passo 1: Verificação de Chamadas de API
Se o sistema fizer chamadas para servidores remotos, verifique:

- As URLs usam `https://lynx.apex7ai.com` em vez de `https://opencode.ai`
- As chamadas de API funcionam corretamente
- Não há erros de conexão

### Passo 2: Verificação de Esquemas
Verifique se os arquivos de configuração usam o novo esquema:
- `$schema` deve apontar para `https://lynx.apex7ai.com/config.json`

## 6. Verificação de Variáveis de Ambiente

### Passo 1: Verificação de Variáveis
```bash
# Verifique se as variáveis de ambiente foram atualizadas
env | grep -i lynx
```

Verifique se:
- Variáveis como `LYNX_VERSION`, `LYNX_CHANNEL` estão definidas
- Variáveis antigas como `OPENCODE_*` não estão mais em uso

## 7. Verificação de Instalação

### Passo 1: Teste de Instalação
Se você atualizou o script de instalação:

1. Execute o script de instalação modificado
2. Verifique se o binário é instalado corretamente
3. Verifique se o caminho é adicionado ao PATH
4. Execute `lynx --version` para confirmar a instalação

## 8. Verificação de Logs

### Passo 1: Verificação de Logs
```bash
# Execute um comando simples e verifique os logs
../dist/lynx-<sua-plataforma>-<arquitetura>/bin/lynx --print-logs --version
```

Verifique se:
- Os logs mostram o nome correto "lynx"
- Não há mensagens de erro relacionadas a nomes antigos
- Os caminhos de log estão corretos

## 9. Verificação de Testes

### Passo 1: Execução dos Testes
```bash
cd packages/opencode
bun test
```

Verifique se:
- Todos os testes passam
- Não há falhas relacionadas a nomes antigos
- Os testes referenciam o novo nome corretamente

## 10. Checklist Final

Antes de considerar o rebranding completo, verifique:

- [ ] Build concluído com sucesso
- [ ] Binário renomeado de `opencode` para `lynx`
- [ ] Caminhos de configuração atualizados para `.lynx`
- [ ] URLs atualizadas para `https://lynx.apex7ai.com`
- [ ] Variáveis de ambiente renomeadas de `OPENCODE_*` para `LYNX_*`
- [ ] Mensagens de interface atualizadas
- [ ] Documentação atualizada
- [ ] Testes passando
- [ ] Funcionalidades principais operacionais
- [ ] Servidor iniciando corretamente
- [ ] API respondendo corretamente

## Solução de Problemas

### Se o build falhar:
- Verifique se todas as referências a `opencode` foram substituídas
- Confirme que os caminhos de importação estão corretos
- Verifique as dependências do projeto

### Se o binário não executar:
- Verifique as permissões do arquivo
- Confirme que o binário foi gerado corretamente
- Verifique se há dependências ausentes

### Se as configurações não forem carregadas:
- Verifique os caminhos de configuração
- Confirme que os arquivos de configuração usam o novo nome
- Verifique as variáveis de ambiente

## Conclusão

Após completar todas as verificações acima com sucesso, você pode ter certeza de que o rebranding do OpenCode para Lynx foi realizado corretamente e todas as configurações estão funcionando como esperado.