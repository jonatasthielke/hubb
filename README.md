# Secure Screen Application

Este é um projeto de aplicação Secure Screen, que permite aos usuários acessar uma tela segura por vez. O acesso à tela segura é controlado por um backend em Node.js que gerencia o semáforo de acesso.

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **hubb-backend:** Contém o código fonte do backend em Node.js.
- **hubb-frontend:** Contém o código fonte do frontend React.

## Instruções de Uso

### Backend (hubb-backend)

1. **Instalação de Dependências:**

   Navegue até a pasta `hubb-backend` e execute:

   ```bash
   npm install
   ```

2. **Execução do Servidor:**

   Execute o servidor com o seguinte comando:

   ```bash
   npm start
   ```

   O servidor estará disponível em [http://localhost:3001](http://localhost:3001).

3. **Endpoints Disponíveis:**

   - `PUT /semaphore`: Abre uma sessão na tela segura. Retorna um ID de sessão.
   - `DELETE /semaphore`: Fecha a sessão atual na tela segura.

### Frontend (hubb-frontend)

1. **Instalação de Dependências:**

   Navegue até a pasta `hubb-frontend` e execute:

   ```bash
   npm install
   ```

2. **Execução do Aplicativo:**

   Execute o aplicativo com o seguinte comando:

   ```bash
   npm start
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

3. **Uso do Aplicativo:**

   - Ao acessar o aplicativo, você verá a mensagem "Secure Screen: Closed".
   - Clique no botão "Open Session" para solicitar a abertura da tela segura. Se outra sessão estiver aberta, uma mensagem de erro será exibida.
   - Após abrir a sessão, a mensagem será atualizada para "Secure Screen: Open" e um botão "Close Session" será exibido.
   - Clique em "Close Session" para fechar a sessão.

