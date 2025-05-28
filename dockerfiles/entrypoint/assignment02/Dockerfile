FROM python:slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN mkdir data
COPY data-default data
COPY . .
RUN rm -r data-default
VOLUME [ "/app/data" ]
ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD [ "uvicorn", "main:app" ,"--host","0.0.0.0","--port", "8000" ]
EXPOSE 8000