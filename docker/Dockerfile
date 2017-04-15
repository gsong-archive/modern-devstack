FROM python:3.6-slim
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt && rm -rf /root/.cache

ARG TINI_VERSION
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

COPY . .
