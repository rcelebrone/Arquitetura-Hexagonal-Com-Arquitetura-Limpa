# Use a imagem oficial do PostgreSQL como base
FROM postgres:16.0-alpine3.18

# Variáveis de ambiente para configurar o PostgreSQL
ENV POSTGRES_USER=default_user
ENV POSTGRES_PASSWORD=default_password
ENV POSTGRES_DB=default_database

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432

# Opcional: copie scripts SQL para inicialização
COPY ./postgres_scripts/ /docker-entrypoint-initdb.d/