FROM node:22-alpine
WORKDIR /app
COPY . .
RUN chmod +x rajib.sh
ENTRYPOINT ["./rajib.sh"]
CMD [ "node", "app.js" ]
EXPOSE 8080