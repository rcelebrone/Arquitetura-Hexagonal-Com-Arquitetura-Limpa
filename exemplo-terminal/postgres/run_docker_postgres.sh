#!/bin/bash

# Verifica se o arquivo .env existe
if [ -f ../.env ]; then
  echo "Lendo variáveis de ambiente do arquivo .env"
  export $(cat ../.env | xargs)
fi

# Comando para executar o contêiner com as variáveis de ambiente
docker run -d --name postgres-arqhex-container -p 5432:5432 \
  -e POSTGRES_USER="${DB_USER}" \
  -e POSTGRES_PASSWORD="${DB_PASSWORD}" \
  -e POSTGRES_DB="${DB_DATABASE}" \
  postgres-arqhex-image
