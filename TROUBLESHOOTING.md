# Guia de Troubleshooting para Rebranding

## Problemas Comuns e Soluções

### 1. Build Falhando Após Rebranding

#### Problema: Erros de build após substituir nomes
**Solução:**
- Verifique se todas as importações e referências foram atualizadas corretamente
- Limpe o cache do Bun: `bun pm cache rm`
- Execute novamente: `bun install && bun run build`

#### Problema: Referências não encontradas após substituição
**Solução:**
- Verifique se substituições parciais de palavras não afetaram indevidamente
- Por exemplo, certifique-se de que "opencode" não tenha sido substituído em "opencode-ai" de forma a afetar outros pacotes
- Revise manualmente os arquivos modificados para garantir substituições corretas

### 2. Comando Não Encontrado

#### Problema: Comando `lynx` não encontrado após build
**Solução:**
- Verifique se o binário foi gerado corretamente: `ls -la packages/opencode/dist/`
- Verifique se o nome do binário está correto: `lynx-<plataforma>-<arquitetura>`
- Adicione o diretório do binário ao PATH ou execute com caminho completo

#### Problema: Comando `lynx` não encontrado após instalação
**Solução:**
- Verifique se o script de instalação foi atualizado corretamente
- Confirme que o binário foi instalado no diretório correto
- Verifique se o diretório de instalação está no PATH

### 3. Erros de Configuração

#### Problema: Configurações não sendo carregadas
**Solução:**
- Verifique se os caminhos de configuração mudaram de `$HOME/.opencode/` para `$HOME/.lynx/`
- Confirme que os arquivos de configuração usam o novo esquema: `https://lynxcode.apex7ai.com/config.json`
- Verifique permissões de leitura nos arquivos de configuração

#### Problema: Arquivos de configuração antigos interferindo
**Solução:**
- Remova ou renomeie o diretório antigo: `mv $HOME/.opencode $HOME/.opencode.backup`
- Crie um novo diretório de configuração para o Lynx

### 4. Erros de Rede e API

#### Problema: Erros de conexão com endpoints antigos
**Solução:**
- Verifique se todas as URLs foram atualizadas para `https://lynxcode.apex7ai.com`
- Confirme que os endpoints de API estão corretos
- Verifique se há chamadas de API em arquivos de teste que ainda usam URLs antigas

#### Problema: Erros de autenticação após rebranding
**Solução:**
- Verifique se as credenciais de autenticação estão sendo armazenadas no novo diretório
- Confirme que os endpoints de autenticação usam o novo domínio
- Verifique se as variáveis de ambiente de autenticação foram atualizadas

### 5. Problemas com Variáveis de Ambiente

#### Problema: Variáveis de ambiente antigas ainda sendo usadas
**Solução:**
- Verifique se todas as variáveis `OPENCODE_*` foram substituídas por `LYNX_*`
- Atualize seu shell profile (`.bashrc`, `.zshrc`, etc.) para usar as novas variáveis
- Reinicie o terminal após alterações

#### Problema: Variáveis de ambiente não sendo reconhecidas
**Solução:**
- Verifique se as variáveis estão sendo lidas corretamente no código
- Confirme que os nomes das variáveis estão corretos
- Verifique se há fallbacks adequados para quando as variáveis não estão definidas

### 6. Problemas com Interface TUI/Web

#### Problema: Interface não carrega ou mostra nome antigo
**Solução:**
- Verifique se os assets e templates foram atualizados
- Confirme que os endpoints da API estão corretos
- Limpe o cache do navegador se estiver usando a interface web

#### Problema: Erros de renderização após rebranding
**Solução:**
- Verifique se não há strings codificadas com o nome antigo
- Confirme que todos os componentes usam variáveis ou constantes em vez de strings literais

### 7. Problemas com Scripts de Build

#### Problema: Build gera binários com nome antigo
**Solução:**
- Verifique o script `packages/opencode/script/build.ts` para garantir que substituições estejam corretas
- Confirme que o nome do pacote em `package.json` está correto
- Verifique se há definições de nome em outros arquivos de configuração

#### Problema: Build falha com erros de plataforma
**Solução:**
- Verifique se os targets de build ainda são válidos após as alterações
- Confirme que todas as dependências necessárias estão disponíveis
- Tente build para uma plataforma específica com `--single`

### 8. Problemas com Testes

#### Problema: Testes falhando após rebranding
**Solução:**
- Verifique se os arquivos de teste referenciam caminhos ou nomes antigos
- Atualize fixtures e mocks para usar o novo nome
- Confirme que os testes usam os caminhos de configuração corretos

#### Problema: Testes de integração falhando
**Solução:**
- Verifique se os endpoints de teste usam o novo domínio
- Confirme que os testes não dependem de URLs ou nomes codificados
- Atualize quaisquer mocks de rede para refletir as mudanças

### 9. Problemas com Aplicativo Desktop

#### Problema: Aplicativo desktop ainda mostra nome antigo
**Solução:**
- Atualize `packages/desktop/src-tauri/tauri.conf.json`:
  - `productName`
  - `identifier`
  - `mainBinaryName`
- Verifique se os ícones e recursos também foram atualizados se necessário

#### Problema: Build do desktop falhando
**Solução:**
- Verifique se o binário do CLI está disponível no caminho esperado
- Confirme que o `externalBin` em `tauri.conf.json` aponta para o binário correto
- Atualize o caminho do binário se necessário

### 10. Problemas de Desempenho

#### Problema: Aplicação mais lenta após rebranding
**Solução:**
- Verifique se não há chamadas duplicadas ou redundantes
- Confirme que não há URLs antigas sendo tentadas antes das novas
- Verifique se o novo domínio está respondendo com a mesma velocidade

## Ferramentas de Diagnóstico

### Verificação de Substituições
```bash
# Procure por quaisquer ocorrências restantes de "opencode"
grep -r "opencode" packages/opencode/ --exclude-dir=node_modules --exclude="*.md" --exclude="*.lock"
```

### Verificação de URLs
```bash
# Procure por URLs antigas
grep -r "opencode.ai" packages/opencode/ --exclude-dir=node_modules
```

### Verificação de Variáveis de Ambiente
```bash
# Verifique variáveis antigas
env | grep -i opencode
# Verifique variáveis novas
env | grep -i lynx
```

## Processo de Depuração

1. **Identifique o problema**: Descreva exatamente o que está acontecendo
2. **Verifique logs**: Execute com `--log-level DEBUG --print-logs` para obter mais informações
3. **Isolamento**: Tente reproduzir o problema em um ambiente limpo
4. **Verificação reversa**: Confirme que todas as substituições foram feitas corretamente
5. **Teste incremental**: Faça e teste as mudanças em pequenos passos

## Recursos Adicionais

### Comandos Úteis
```bash
# Verificar versão
lynx --version

# Verificar configurações
lynx config get

# Verificar caminhos
lynx path get

# Verificar logs detalhados
lynx --log-level DEBUG --print-logs run "teste"
```

### Verificação de Funcionalidades
- Servidor: `lynx serve --port 4096`
- Interface web: `lynx web`
- Comandos básicos: `lynx run "mensagem"`
- Configurações: `lynx config get`

Se encontrar um problema não listado aqui, verifique se:
- Todos os arquivos relevantes foram modificados
- Não há cache ou arquivos temporários com referências antigas
- As dependências estão atualizadas
- O ambiente de desenvolvimento está configurado corretamente