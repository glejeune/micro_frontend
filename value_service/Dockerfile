FROM elixir:1.8.1

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /value_service
WORKDIR /value_service

COPY . /value_service/
RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix deps.get
RUN npm install
RUN npm run build

EXPOSE 4100
CMD [ "mix", "phx.server" ]
