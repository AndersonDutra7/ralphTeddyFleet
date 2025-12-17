## Ralph & Teddy Fleet

Plataforma de Gestão de Frotas Mobile construída com React Native e Supabase.

Este projeto é um aplicativo mobile que simula um sistema de gerenciamento de frotas, permitindo a visualização, consulta e detalhamento de veículos em tempo real. Foi desenvolvido como base para o curso de desenvolvimento mobile, com foco na arquitetura moderna de front-end (React Native) e backend-as-a-Service (Supabase).

## Funcionalidades Principais

O Ralph & Teddy Fleet oferece as seguintes funcionalidades essenciais:

✔ Lista de Veículos em Tempo Real: Carrega dados diretamente do Supabase e exibe o modelo e a placa de todos os veículos cadastrados.

✔ Navegação por Pilha (Stack Navigation): Estrutura de navegação clara entre a lista de veículos e os detalhes individuais.

✔ Tela de Detalhes Completa: Exibe todas as informações do veículo (modelo, placa, marca, ano e status) com um layout moderno, utilizando gradientes e ícones.

✔ Integração Robusta com Supabase: Utiliza o SDK oficial para garantir consultas seguras e rápidas.

## Tecnologias Utilizadas

React Native (Expo)

JavaScript (ES6+)

Supabase (banco e backend)

React Navigation – Native Stack

Expo LinearGradient

FontAwesome Icons

## Estrutura do Projeto

A arquitetura do projeto segue a divisão modular para facilitar a manutenção e a escalabilidade:

RalphTeddyFleet/
├── src/
│ ├── components/
│ │ ├── ActionButton.js
│ │ ├── CardVeiculo.js
│ │ └── DetalhesItem.js
│ │ └── InputField.js
│ │ └── SelectInput.js
│ ├── screens/
│ │ ├── FormVeiculo.js
│ │ ├── ListaVeiculos.js
│ │ └── DetalhesVeiculo.js
│ │ └── Login.js
│ ├── services/
│ │ └── supabase.js
│ │ └── veiculoService.js
│ ├── utils/
│ │ └── testeSupabase.js
│ │ └── validators.js
│ └── App.js
└── ...

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

Pré-requisitos

Node.js (versão LTS) — Download e https://nodejs.org/pt

Expo Go App instalado no dispositivo móvel

Instale o Expo CLI globalmente:

`npm install -g expo-cli`

Clone o repositório:

`git clone https://github.com/seuusuario/RalphTeddyFleet.git`

Entre no projeto:

`cd RalphTeddyFleet`

Instale as dependências do projeto:

```
npm install @supabase/supabase-js
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

```

Execução

Inicie o Metro Bundler:

`npm start `

Após a inicialização, use o aplicativo Expo Go para escanear o QR Code e abrir o projeto diretamente no seu celular ou emulador.

## Contexto Educacional

Este projeto foi desenvolvido para fins educativos, focado no aprendizado de React Native para o desenvolvimento mobile.

## Professor

Anderson Dutra
