<h1 align="center">Welcome to gpt4free-demo 👋</h1>
<p align="center">
  Set up a free OpenAI GPT-4 API on your own
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=Z0ZUdFqvR_I">
    <img src="https://i.ytimg.com/vi/Z0ZUdFqvR_I/hqdefault.jpg" alt="IT Man - Tech #38 - Setting Up Your Own Free GPT-4 API with gpt4free-ts [Vietnamese]">
  </a>
</p>

## Demo

<p align="center">
  <img src="https://gyazo.com/482f04e3061ebec1e12d39cd3850265d.gif" alt="Demo GIF 1">
  <img src="https://gyazo.com/d44a9ad144deb85e8a29952926acae43.gif" alt="Demo GIF 2">
</p>

## Usage

Follow these steps to get gpt4free-demo up and running:

1. **Clone the Repository**: 

   ```bash
   git clone https://github.com/username/gpt4free-demo.git
   cd gpt4free-demo
   ```

2. **Set Up Environment Variables**: Copy the example environment file and set up your own variables:

   ```bash
   cp .env.example .env
   ```

   Open `.env` with your preferred text editor and fill in your own values for the given variables. Save and close the file when you're finished.

3. **Start the Services**: Start your services using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   ![Services Start GIF](https://gyazo.com/d9a6b8be62174b2c6d227334ff8adc6c.gif)

   If you change any environment variables in your `.env` file, restart your services with `docker-compose down` and `docker-compose up -d`.

4. **Access the API**: Once the services are running, the API will be accessible at:

   - Find supports model and site: `http://127.0.0.1:13000/supports` [GET]
   - Return when chat is complete: `http://127.0.0.1:13000/ask?prompt=***&model=***&site=***` [POST/GET]
   - Return with event stream: `http://127.0.0.1:13000/ask/stream?prompt=***&model=***&site=***` [POST/GET]

   More usage examples can be found at [xiangsx/gpt4free-ts](https://github.com/xiangsx/gpt4free-ts#-lets-use-gpt4).

Certainly! If you want to include instructions on how to use `hurl` to test the API in the README, you can add a new section like this:

## Testing with Hurl

[Hurl](https://hurl.dev/) is a command-line tool to run HTTP requests. You can use it to test the endpoints in this API. Here's how you can get started:

1. **Install Hurl**: Follow the instructions on the [official website](https://hurl.dev/docs/installation.html) to install Hurl on your system.

2. **Create a Hurl File**: You can create a file with a `.hurl` extension to define the HTTP requests you want to test. Here's an example `gpt.hurl` file for this project:

   ```hurl
   # List all supports model
   GET http://127.0.0.1:13000/supports

   # Call Vita model
   GET http://127.0.0.1:13000/ask
   [QueryStringParams]
   site: vita
   model: gpt-3.5-turbo
   prompt: Tell me a joke about Software Engineering
   ```

3. **Run the Hurl File**: Use the following command to execute the `gpt.hurl` file:

   ```bash
   hurl --verbose gpt.hurl
   ```

   This will run the defined HTTP requests and print the responses to the terminal.

4. **Read the Documentation**: For more advanced usage, you can refer to the [samples documentation](https://hurl.dev/docs/samples.html).


## Resources

- [xiangsx/gpt4free-ts](https://github.com/xiangsx/gpt4free-ts)
- [xtekky/gpt4free](https://github.com/xtekky/gpt4free)
- [Create Your First Extension - Raycast API](https://developers.raycast.com/basics/create-your-first-extension)

## Reference Videos

- [![IT Man - Talk #34](https://i.ytimg.com/vi/llThjxFb7KU/mqdefault.jpg)](https://www.youtube.com/watch?v=llThjxFb7KU)
- [![IT Man - Tip #36](https://i.ytimg.com/vi/sY01NrxVQJM/mqdefault.jpg)](https://www.youtube.com/watch?v=sY01NrxVQJM)

## Author

- Website: [productsway.com](https://productsway.com/)
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

