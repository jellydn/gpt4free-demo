<h1 align="center">Welcome to gpt4free-demo 👋</h1>
<p>
  How to setup a free OpenAI GPT-4 API on your own
</p>

[![IT Man - Tech #38 - Setting Up Your Own Free GPT-4 API with gpt4free-ts [Vietnamese]](https://i.ytimg.com/vi/Z0ZUdFqvR_I/hqdefault.jpg)](https://www.youtube.com/watch?v=Z0ZUdFqvR_I)

## Demo

![https://gyazo.com/482f04e3061ebec1e12d39cd3850265d.gif](https://gyazo.com/482f04e3061ebec1e12d39cd3850265d.gif)

## Usage

1. Clone this repository to your local machine.

```bash
git clone https://github.com/username/gpt4free-demo.git
```

2. Navigate into the cloned directory.

```bash
cd gpt4free-demo
```

3. There is an example environment file in this directory called `.env.example`. You need to copy this file and rename the copy to `.env`. You can do this with the following command:

```bash
cp .env.example .env
```

4. Open the newly created `.env` file with your preferred text editor. Fill in your own values for the given variables. Save and close the file when you're finished.

5. Now, you can start your services using Docker Compose. Run the following command:

```bash
docker-compose up -d
```

![https://gyazo.com/d9a6b8be62174b2c6d227334ff8adc6c.gif](https://gyazo.com/d9a6b8be62174b2c6d227334ff8adc6c.gif)

This command will start the services defined in your `docker-compose.yml` file in the background and leave them running.

Note: If you change any environment variables in your `.env` file, you will need to stop and restart your services for the changes to take effect. You can do this with `docker-compose down` and `docker-compose up -d` respectively.

6. Once the services are running, the API will be accessible at `http://127.0.0.1:13000`. You can test it using the following examples:

   - **Forefront Model**

     ```
     http://127.0.0.1:13000/ask?prompt=whoareyou&model=forefront
     http://127.0.0.1:13000/ask/stream?prompt=whoareyou&model=forefront
     ```

   - **MCBBS Model**

     ```
     http://127.0.0.1:13000/ask?prompt=nothing&model=mcbbs&messages=[{"role":"system","content":"IMPORTANT: You are a virtual assistant powered by the gpt-3.5-turbo model, now time is 2023/6/3 13:42:27}"},{"role":"user","content":"你好\n"},{"role":"assistant","content":"你好！有什么我可以帮助你的吗？"},{"role":"user","content":"写个冒泡排序\n"}]
     ```

   - **You Model**
     ```
     http://127.0.0.1:13000/ask?prompt=whoareyou&model=you
     http://127.0.0.1:13000/ask/stream?prompt=whoareyou&model=you
     ```

## Resources

- [xiangsx/gpt4free-ts](https://github.com/xiangsx/gpt4free-ts)
- [xtekky/gpt4free](https://github.com/xtekky/gpt4free)
- [Create Your First Extension - Raycast API](https://developers.raycast.com/basics/create-your-first-extension)

## Reference videos

[![IT Man - Talk #34 - Bye Bye #Docker Desktop [Vietnamese]](https://i.ytimg.com/vi/llThjxFb7KU/mqdefault.jpg)](https://www.youtube.com/watch?v=llThjxFb7KU)

[![IT Man - Tip #36 - #Raycast AI - #ChatGPT - Anytime, anywhere [Vietnamese]](https://i.ytimg.com/vi/sY01NrxVQJM/mqdefault.jpg)](https://www.youtube.com/watch?v=sY01NrxVQJM)

## Author

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
