#!/bin/bash

# Caminho onde o USB é montado no host
USB_MOUNT_PATH="/share/data"  # Altere conforme necessário

# Verifique se o USB está montado
if mountpoint -q "$USB_MOUNT_PATH"; then
    echo "Dispositivo USB detectado, iniciando o container..."

    # Inicie o Docker Compose se o USB estiver montado
    docker-compose up -d
else
    echo "Dispositivo USB não encontrado. Nenhum dado será exibido."

    # Opcional: Iniciar o container sem dados sensíveis ou apenas com um site de aviso
    docker-compose up -d --no-deps webserver
fi
