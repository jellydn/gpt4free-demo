# List all supports model
GET http://127.0.0.1:13000/supports

# Call Vita model
GET http://127.0.0.1:13000/ask
[QueryStringParams]
site: vita
model: gpt-3.5-turbo
prompt: Tell me a joke about Software Engineering

GET http://127.0.0.1:13000/ask
[QueryStringParams]
site: chatdemo
model: gpt-3.5-turbo
prompt: Tell me a joke about Software Engineering

GET http://127.0.0.1:13000/ask
[QueryStringParams]
site: phind
model: net-gpt3.5-turbo
prompt: Tell me a joke about Software Engineering

