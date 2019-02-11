FROM ruby:2.6.1

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /calculator_service
WORKDIR /calculator_service

COPY . /calculator_service/
RUN bundle install
RUN npm install
RUN npm run build

EXPOSE 4200
CMD [ "./bin/rails", "s" ]
