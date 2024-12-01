# Usa la última imagen de Nginx como base
FROM nginx:latest

# Copia los archivos estáticos de React al directorio de Nginx
COPY build/ /usr/share/nginx/html

# Remueve la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu archivo de configuración personalizado
COPY nginx.conf /etc/nginx/conf.d/

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


